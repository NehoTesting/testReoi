<template>
  <section
    contenteditable
    class="web-list"
    :style="cmp.style"
    @click.stop="setEditItem"
  >
    <span>{{ cmp.info.content }}</span>
    <ul>
      <li
        v-for="(children, idx) in cmp.info.cmps"
        :key="idx"
        :element="children"
      >
        <span>{{ children.content }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
  },
  name: 'web-list',
  components: {},
  data() {
    return {};
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
};
</script>
<style scoped>
</style>
