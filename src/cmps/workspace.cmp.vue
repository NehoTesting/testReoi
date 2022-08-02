<template>
  <div class="workspace">
    <draggable
      :sort="isEditOn"
      :disabled="!isEditOn"
      id="workspace"
      :class="{ dragArea: isDragging, dragIcon: !cmps.length }"
      class="draggable-container"
      :list="cmps"
      group="workspace-cmps"
      @change="updateSite"
      @add="addCmp"
      ghost-class="ghost"
    >
      <component
        v-for="(cmp, idx) in cmps"
        :style="cmp.style"
        :is="cmp.type"
        :cmp="cmp"
        :class="cmp.class"
        :key="idx"
      >
      </component>
    </draggable>
  </div>
</template>

<script>
import webContainer from '@/cmps/web.container.cmp';
import { eventBus } from '@/services/eventbus.service.js';
import draggable from 'vuedraggable';
import webDiv from '@/cmps/elements.cmps/web.div.cmp';
import webMap from '@/cmps/elements.cmps/web.map.cmp';
import webTxt from '@/cmps/elements.cmps/web.txt.cmp';
import webVideo from '@/cmps/elements.cmps/web.video.cmp';
import webImg from '@/cmps/elements.cmps/web.img.cmp';
import webForm from '@/cmps/elements.cmps/web.form.cmp';
import webButton from '@/cmps/elements.cmps/web.button.cmp';
import webList from '@/cmps/elements.cmps/web.list.cmp';
import webHamburger from '@/cmps/elements.cmps/web.hamburger.cmp';

export default {
  props: {
    cmps: Array,
  },
  name: 'work-space',
  components: {
    webContainer,
    draggable,
    webDiv,
    webMap,
    webTxt,
    webVideo,
    webImg,
    webForm,
    webButton,
    webList,
    webHamburger,
  },
  data() {
    return {
      isDragging: false,
    };
  },
  methods: {
    emitItemToEdit() {},
    updateSite() {
      eventBus.$emit('update-site');
    },
    addCmp(ev) {
      eventBus.$emit('addCmp', ev.clone.innerText);
    },
  },
  computed: {
    isEditOn() {
      return this.$store.getters.isEditOn;
    },
  },
  created() {
    eventBus.$on('dragStart', () => {
      this.isDragging = true;
    });
    eventBus.$on('dragStop', () => {
      this.isDragging = false;
    });
  },
};
</script>
