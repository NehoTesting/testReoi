<template>
  <div :class="editMenuClass" v-if="showMenu">
    <ul>
      <li
        :class="removeBtnClass"
        @mouseenter="emitShow"
        @click="removeCmp(cmp.id)"
      >
        <i class="el-icon-delete"></i>
      </li>
      <li
        v-if="parent === 'container' || parent === 'video'"
        @click="setEditItem"
      >
        <i class="el-icon-edit"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
    parent: String,
  },
  name: 'edit-menu',
  data() {
    return {};
  },
  computed: {
    showMenu() {
      return this.$store.getters.isEditOn;
    },
    removeBtnClass() {
      if (this.parent === 'small') return 'small-remove-btn';
      return '';
    },
    editMenuClass() {
      if (this.parent === 'container') return 'el-edit-menu';
      return 'el-edit-menu-small';
    },
  },
  methods: {
    emitShow() {
      this.$emit('showMenu');
    },
    emitHide() {
      this.$emit('hideMenu');
    },
    removeCmp(cmpId) {
      const _rootId = this.cmp._rootId;
      eventBus.$emit('removeCmp', { cmpId, _rootId });
    },
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
  created() {},
};
</script>
<style scoped>
</style>
