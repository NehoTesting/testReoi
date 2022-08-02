<template>
  <span
    class="cmp-span"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <a
      :contenteditable="isEdit"
      class="web-button"
      :style="cmp.style"
      v-if="cmp"
      @click.stop="setEditItem"
      :href="cmp.info.linkTo"
      >{{ cmp.info.content }}
      <img v-if="cmp.info.imgUrl" :src="cmp.info.imgUrl" alt="" />
    </a>
    <edit-menu v-if="showEditMenu" :cmp="cmp" />
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
  name: 'web-button',
  data() {
    return {
      showEditMenu: false,
    };
  },
  components: {
    editMenu,
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.content = ev.target.innerText;
      eventBus.$emit('update-site');
    },
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
  computed: {
    isEdit() {
      return this.$store.getters.isEditOn;
    },
  },
  created() {
    this.cmp._rootId = this._rootId;
  },
};
</script>
<style scoped>
</style>
