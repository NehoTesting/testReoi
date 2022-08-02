<template>
  <div class="editor flex">
    <div class="modal-bg" v-if="webUrl"></div>
    <div class="web-url-modal" v-if="webUrl">
      <el-input v-model="webUrl"></el-input>
      <div class="web-url-modal-btns">
        <el-button @click="closeModal">Close</el-button>
        <el-button
          type="button"
          v-clipboard:copy="webUrl"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          >Copy to clipboard</el-button
        >
      </div>
    </div>
    <controller
      v-if="siteToEdit"
      :itemToEdit="itemToEdit"
      :siteLength="siteToEdit.cmps.length"
      @focus.native="test"
    />
    <work-space
      v-if="siteToEdit"
      :cmps="siteToEdit.cmps"
      @updateCmpId="updateCmpId"
    />
  </div>
</template>

<script>
import workSpace from '@/cmps/workspace.cmp';
import controller from '@/cmps/controller.cmp';
import { eventBus } from '@/services/eventbus.service.js';
import { templateService } from '@/services/template.service.js';

export default {
  name: 'editor',
  components: {
    workSpace,
    controller,
  },
  data() {
    return {
      siteToEdit: null,
      itemToEdit: 'webImg',
      webUrl: null,
      savedTimes: 0,
    };
  },
  methods: {
    updateCmpId() {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    },
    removeCmp(root, cmpId, deep = 0) {
      var currRootCmps = root.info ? root.info.cmps : root;
      currRootCmps.forEach((cmp, idx) => {
        if (cmp.id === cmpId) {
          currRootCmps.splice(idx, 1);
          this.$store.commit({ type: 'updateSite', site: this.siteToEdit });
          return;
        }
        if (cmp.info.cmps) this.removeCmp(cmp, cmpId, ++deep);
      });
    },
    searchCmp(cmps, cmpId, _rootId) {
      var rootFather;
      if (_rootId) {
        rootFather = cmps.find((webContainer) => webContainer.id === _rootId);
      } else {
        rootFather = cmps;
      }
      this.removeCmp(rootFather, cmpId);
    },
    async saveTemplate(template) {
      var templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      templateToSave.name = template.templateName;
      templateToSave.previewImg = template.templatePreviewImg;
      var createdBy;
      if (!this.$store.getters.user) {
        createdBy = {
          _id: 1,
          username: 'guest',
          userPicture: 'https://i.ibb.co/PzTL54h/guest-icon-png-29.png',
        };
      } else {
        const { _id, username, userPicture } = this.$store.getters.user;
        createdBy = {
          _id,
          username,
          userPicture,
        };
      }
      templateToSave.createdBy = createdBy;
      const savedTemplte = await this.$store.dispatch({
        type: 'saveTemplate',
        templateToSave,
      });
      try {
        this.siteToEdit = JSON.parse(JSON.stringify(savedTemplte));
      } catch (err) {
        console.log('cannot save template. err on editor', err);
      }
    },

    async publishTemplate() {
      const templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      var createdBy;
      if (!this.$store.getters.user) {
        createdBy = {
          _id: 1,
          username: 'guest',
          userPicture: 'https://i.ibb.co/PzTL54h/guest-icon-png-29.png',
        };
      } else {
        const { _id, username, userPicture } = this.$store.getters.user;
        createdBy = {
          _id,
          username,
          userPicture,
        };
      }
      templateToSave.createdBy = createdBy;
      const savedTemplte = await this.$store.dispatch({
        type: 'saveTemplate',
        templateToSave,
      });
      try {
        const baseUrl = window.location.origin;
        this.siteToEdit = JSON.parse(JSON.stringify(savedTemplte));
        this.webUrl = `${baseUrl}/${savedTemplte._id}`;
      } catch (err) {
        console.log('cannot Publish template. err on editor', err);
      }
    },
    async loadSite(id) {
      this.loading = true;
      var site;
      if (id.includes('sys')) {
        site = templateService.getTemplateById(id);
        const siteCopy = JSON.parse(JSON.stringify(site));
        delete siteCopy._id;
        this.siteToEdit = siteCopy;
        this.loading = false;
        return;
      }
      site = await this.$store.dispatch({ type: 'loadSite', id });
      try {
        this.siteToEdit = JSON.parse(JSON.stringify(site));
        this.loading = false;
      } catch {
        console.log('cannot find site');
      }
    },
    closeModal() {
      this.webUrl = null;
    },
    onCopy: function (e) {
      alert('You just copied: ' + e.text);
      this.closeModal();
    },
    onError: function () {
      alert('Failed to copy texts');
    },
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
  created() {
    this.$store.commit({ type: 'setEditMode', isEditOn: true });
    const id = this.$route.params.id;
    if (id) {
      this.loadSite(id);
    } else {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    }
    eventBus.$on('addCmp', () => {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    });
    eventBus.$on('onSaveTemplate', (template) => {
      this.savedTimes++;
      if (this.savedTimes >= 2) {
        return;
      } else {
        this.saveTemplate(template);
      }
    }),
      eventBus.$on('onPublishTemplate', () => {
        this.publishTemplate();
      }),
      eventBus.$on('removeCmp', (cmpIds) => {
        const { cmpId, _rootId } = cmpIds;
        const cmps = this.siteToEdit.cmps;
        this.searchCmp(cmps, cmpId, _rootId);
      });
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    eventBus.$on('update-site', () => {
      this.$store.commit({ type: 'updateSite', site: this.siteToEdit });
    });
    eventBus.$on('setEmptySiteToEdit', () => {
      this.siteToEdit = null;
      this.$forceUpdate();
    });
  },
  destroyed() {
    this.$store.commit({ type: 'setEditMode', isEditOn: false });
  },
};
</script>
