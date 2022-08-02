<template>
  <section class="template-preview-container">
    <div class="template-preview-header">
      Select a template or create a site from scratch
    </div>
    <div class="template-previews-list">
      <span class="template-preview" @click="goToEditor">
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name"> Create new website </span>
        </div>
        <div class="template-img">
          <img class="dots" src="@/assets/blank.png" @click="createNewWeb" />
        </div>
      </span>
      <div
        class="template-preview"
        v-for="(template, idx) in templates"
        :key="idx"
      >
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name">
            {{ template.name }}
          </span>
        </div>
        <div class="template-img">
          <img :src="template.previewImg" alt="" srcset="" />
        </div>
        <div class="template-preview-btns">
          <router-link class="choose pointer" :to="'editor/' + template._id"
            ><i class="el-icon-right"></i> Choose
          </router-link>
          <span @click="setPreviewOn">
            <router-link class="preview pointer" :to="'/' + template._id"
              ><i class="el-icon-view"></i>
              Preview
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    templates: Array,
  },
  data() {
    return {};
  },
  name: 'template-preview',
  methods: {
    setPreviewOn() {
      this.$store.commit({ type: 'setPreviewMode', isPreviewOn: true });
    },
    chooseTemplate(template) {
      this.$store.dispatch({ type: 'changeTempalte', template });
    },
    goToEditor() {
      this.$router.push('/editor');
    },
    createNewWeb() {
      localStorage.clear();
      this.$emit('createNewWeb');
    },
  },
};
</script>
<style scoped>
</style>
