<template>
  <section
    class="web-video"
    :style="cmp.style"
    @click.stop="setEditItem"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <iframe
    width="640" height="385"
      :src="cmp.info.content"
      class="responsive-iframe"
      frameBorder="0"
    ></iframe>

    <edit-menu v-if="showEditMenu" :cmp="cmp" parent="video" />
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  props: {
    cmp: Object,
    _rootId: String
  },
  data() {
    return {
      showEditMenu: false,
    };
  },
  name: 'web-video',
  components: {
    editMenu,
  },
  methods: {
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
  created() {
    this.cmp._rootId = this._rootId;
  },
};
</script>
