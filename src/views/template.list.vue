<template>
  <div class="template-list">
    <template-preview :templates="templates" @createNewWeb="createNewWeb" />
  </div>
</template>

<script>
import templatePreview from '@/cmps/template.list.cmps/template.preview.cmp';

export default {
  name: 'template-list',
  components: {
    templatePreview,
  },
  data() {
    return {
      templates: this.$store.getters.templates,
    };
  },
  methods: {
    createNewWeb() {
      this.$store.commit('setEmptySiteToEdit');
    },
  },
  computed: {},
  created() {},
};
</script>
