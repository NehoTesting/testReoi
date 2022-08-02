<template>
  <span
    class="cmp-span"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <span
      class="web-txt"
      :class="cmp.class"
      :contenteditable="isEdit"
      :style="cmp.style"
      @blur="onEdit"
      @click.stop="setEditItem"
      ref="elTxt"
    >
      {{ cmp.info.content }}
    </span>
    <edit-menu v-if="showEditMenu" :cmp="cmp" />
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  data() {
    return {
      showEditMenu: false,
    };
  },
  props: {
    cmp: Object,
    _rootId: String,
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
  name: 'web-txt',
  components: {
    editMenu,
  },
  created() {
    this.cmp._rootId = this._rootId;
    if (!this.cmp.style.textShadow) {
      this.cmp.style.textShadow = 'unset';
    }
    eventBus.$on('change-web-txt', () => {
      this.$forceUpdate();
    });
  },
  mounted() {
    this.changeColor++;
    if (this.changeColor <= 1) {
      const elem = this.$refs.elTxt;
      this.cmp.style.color = window
        .getComputedStyle(elem, null)
        .getPropertyValue('color');
      eventBus.$emit('update-site');
      this.$forceUpdate();
    }
  },
};
</script>
<style scoped>
</style>
