import { utilService } from '../services/util-service.js'

var localDraftSite = {
    _id: null,
    name: null,
    previewImg: null,
    createdBy: {
        _id: null,
        username: null,
        userPicture: null
    },
    cmps: []
};
if (utilService.loadFromStorage('draft_db')) {

    localDraftSite = utilService.loadFromStorage('draft_db')
}

import { templateService } from '@/services/template.service.js'
import { webService } from '@/services/web.service.js'
import { eventBus } from '@/services/eventbus.service.js';

export const webStore = {
    state: {
        isEdit: false,
        isPreview: false,
        siteToEdit: localDraftSite,
        cmpsToShow: null,
        isShowHeader: true,
        templates: templateService.getTemplates(),
        templateUrl: null,
        isFixedHeader: false
    },
    getters: {
        cmps(state) {
            return state.cmpsToShow
        },
        isShowHeader(state) {
            return state.isShowHeader
        },
        isEditOn(state) {
            return state.isEdit
        },
        isFixedHeaderOn(state) {
            return state.isFixedHeader
        },
        isPreviewOn(state) {
            return state.isPreview
        },
        webCmps(state) {
            return state.siteToEdit.cmps
        },
        web(state) {
            return state.siteToEdit
        },
        templates(state) {
            return state.templates
        }
    },
    mutations: {
        removeCmp(state, { id }) {
            var mainIdx = state.siteToEdit.cmps.findIndex(cmp => cmp.id === id)
            if (mainIdx < 0) {
                state.siteToEdit.cmps.forEach((cmp, idx) => {
                    var foundIdx = cmp.info.cmps.findIndex(cmp => {
                        return cmp.id === id
                    })
                    if (foundIdx > 0) {
                        state.siteToEdit.cmps[idx].info.cmps.splice(foundIdx, 1)
                        return
                    } else {
                        console.log('cannot remove cmp');
                    }
                })
            } else {
                state.siteToEdit.cmps.splice(mainIdx, 1)
                utilService.storeToStorage('draft_db', state.siteToEdit)
            }
        },
        setCmpsToShow(state, { cmpType }) {
            const cmps = templateService.getCmpsByType(cmpType)
            state.cmpsToShow = cmps
        },
        updateSite(state, { site }) {
            state.siteToEdit = site
            utilService.storeToStorage('draft_db', site)
        },
        setSite(state, { site }) {
            state.siteToEdit = site

        },
        setEditMode(state, { isEditOn }) {
            state.isEdit = isEditOn
        },
        setFixedHeader(state, { isFixed }) {
            state.isFixedHeader = isFixed
        },
        setPreviewMode(state, { isPreviewOn }) {
            state.isPreview = isPreviewOn
        },
        setShowMenu(state, { isShowMenu }) {
            state.isShowMenu = isShowMenu
        },
        setEmptySiteToEdit(state) {
            state.siteToEdit = {
                _id: null,
                name: null,
                previewImg: null,
                createdBy: {
                    _id: null,
                    username: null,
                    userPicture: null
                },
                cmps: []
            }
            eventBus.$emit('setEmptySiteToEdit')
        }
    },
    actions: {
        changeTempalte({ commit }, { template }) {
            const site = template
            commit({ type: 'updateSite', site })
        },
        async saveTemplate({ commit }, { templateToSave }) {
            const template = await webService.saveWeb(templateToSave)
            try {
                commit({ type: 'setSite', site: template })
                return template
            } catch {
                console.log('cannot save template');
            }
        },
        async publishTemplate({ commit }, { templateToSave }) {
            const template = await webService.saveWeb(templateToSave)
            try {
                commit({ type: 'addTemplate', template })
                this.templateUrl = `heroku.subdomain.com/${template.id}`
                return template;
            } catch {
                console.log('cannot publish template');
            }
        },
        async loadSite({ context }, { id }) {
            const site = await webService.getById(id);
            try {
                context.commit({ type: 'setSite', site })
            } catch {
                console.log('cannot find site from store');
            }
            return site;
        },

    }
};