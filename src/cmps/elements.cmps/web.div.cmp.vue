<template>
  <section :style="cmp.style" :class="cmp.class + ' ' + onEditMode">
    <component
      v-for="(cmp, idx) in cmp.info.cmps"
      :is="cmp.type"
      :key="idx"
      :info="cmp.info"
      :cmpStyle="cmp.style"
      :cmp="cmp"
    ></component>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import webImg from '@/cmps/elements.cmps/web.img.cmp';
import webTxt from '@/cmps/elements.cmps/web.txt.cmp';
import webButton from '@/cmps/elements.cmps/web.button.cmp';
import webMap from '@/cmps/elements.cmps/web.map.cmp';
import webVideo from '@/cmps/elements.cmps/web.video.cmp';
import webList from '@/cmps/elements.cmps/web.list.cmp';
import webHamburger from '@/cmps/elements.cmps/web.hamburger.cmp';

export default {
  props: {
    cmp: Object,
  },
  name: 'web-div',
  components: {
    webImg,
    webTxt,
    webButton,
    webMap,
    webVideo,
    webList,
    webHamburger
  },
  data() {
    return {
      isEditMode: true,
    };
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
  },
  computed: {
    onEditMode() {
      return this.$store.getters.isEditOn ? 'on-edit' : '';
    },
  },
};
</script>
<style scoped>
</style>
