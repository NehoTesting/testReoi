<template>
  <span class="cmp-span" @mouseleave="showEditMenu = false" :class="cmp.class">
    <img
      class="web-img"
      :style="cmp.style"
      @click.stop="setEditItem"
      :src="cmp.info.src"
      alt=""
      @mouseover="showEditMenu = true"
    />
    <edit-menu
      v-if="showEditMenu"
      :cmp="cmp"
      @showMenu="mouseOnEl = true"
      @hideMenu="mouseOnEl = false"
      parent="small"
    />
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  props: {
    cmp: Object,
    _rootId: String,
  },
  data() {
    return {
      mouseOnEl: false,
      mouseOnMenu: false,
      showEditMenu: false,
    };
  },
  name: 'web-img',
  components: {
    editMenu,
  },
  computed: {
    isShowMenu() {
      if (!this.mouseOnMenu && !this.mouseOnEl) return false;
      if (this.mouseOnMenu || this.mouseOnEl) return true;
      return false;
    },
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.src = ev.target.innerText;
      eventBus.$emit('update-site');
    },
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
    showMenu() {
      this.$emit('showMenu');
    },
  },
  created() {
    this.cmp._rootId = this._rootId;
    eventBus.$on('change-img', () => {
      this.$forceUpdate();
    });
  },
};
</script>
<style scoped>
</style>
