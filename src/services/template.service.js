const gTemplates = [
]


const gCmps = [
]


// Templates

import { savedTemplates } from '../services/templates/saved.templates.js'



gTemplates.push(...savedTemplates)


// Cmps

import { savedCmps } from '../services/cmps/saved.cmps.js'

gCmps.push(...savedCmps)


import HttpService from './HttpService.js'


export const templateService = {
    getEmptyTemplate,
    getCmpsByType,
    getTemplateById,
    getCmpById,
    getTemplates,
    getTemplateByIdAsync,
    addTemplate
}

function getTemplates() {
    return gTemplates
}

function getEmptyTemplate() {
    return {
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
}


function getCmpsByType(name) {
    return gCmps.filter(cmps => cmps.name === name)
}

function getTemplateById(id) {
    return gTemplates.find(template => template._id === id)
}
async function getTemplateByIdAsync(id) {
    return gTemplates.find(template => template._id === id)
}

function getCmpById(id) {
    return gCmps.find(cmp => cmp.id === id)
}

function addTemplate(template) {
    return HttpService.post(`template`, template)
}