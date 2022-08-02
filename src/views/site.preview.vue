<template>
  <div class="site-preview">
    <fixed-header :threshold="100">
      <div class="preview-bar" v-if="isPreview">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo2.png" alt="" srcset=""
          /></router-link>
        </div>
        <div class="preview-header-content">
          Create your own amazing website
          <a class="preview-bar-btn" @click="editSite"> Try Me Out </a>
        </div>
      </div>
    </fixed-header>
    <work-space :cmps="previweSite.cmps" class="full" v-if="previweSite" />
  </div>
</template>

<script>
import workSpace from '@/cmps/workspace.cmp';
import { eventBus } from '@/services/eventbus.service.js';
import { templateService } from '@/services/template.service.js';
import FixedHeader from 'vue-fixed-header';
export default {
  name: 'site-preview',
  components: {
    workSpace,
    FixedHeader,
  },
  data() {
    return {
      previweSite: null,
    };
  },
  methods: {
    editSite() {
      const template = this.previweSite
      this.$store.dispatch({ type: 'changeTempalte', template });
      this.$nextTick(()=>{
        this.$router.push('/editor');
      })
    },
    async loadSite(id) {
      this.loading = true;
      var site;
      if (id.includes('sys')) {
        site = templateService.getTemplateById(id);
        const siteCopy = JSON.parse(JSON.stringify(site));
        delete siteCopy._id;
        this.previweSite = siteCopy;
        this.loading = false;
        return;
      }
      site = await this.$store.dispatch({ type: 'loadSite', id });
      try {
        this.previweSite = JSON.parse(JSON.stringify(site));
        this.loading = false;
      } catch {
        console.log('cannot find site');
      }
    },
  },
  computed: {
    isPreview() {
      return this.$store.getters.isPreviewOn;
    },
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.loadSite(id);
    }
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    this.$store.commit({ type: 'setEditMode', isEditOn: false });
    this.$store.commit({ type: 'setShowMenu', isShowMenu: false });
    eventBus.$emit('change-edit-mode');
  },
  destroyed() {
    this.$store.commit({ type: 'setPreviewMode', isPreviewOn: false });
    this.$store.commit({ type: 'setEditMode', isEditOn: true });
    this.$store.commit({ type: 'setShowMenu', isShowMenu: true });
    eventBus.$emit('change-edit-mode');
  },
};
</script>
<style scoped>
.preview-bar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
