<template>
  <section
    v-if="cmp.info.cmps"
    @click.self="setEditItem"
    class="web-container"
    :class="cmp.info.dir + ' ' + onEdit"
    :style="this.cmp.style"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <draggable
      id="workspace2"
      class="draggable-container2"
      :list="cmps"
      group="workspace-cmps2"
      @change="updateSite"
      ghost-class="ghost"
      :disabled="!isEditOn"
    >
      <component
        v-for="(currCmp, idx) in cmp.info.cmps"
        :is="currCmp.type"
        :key="idx"
        :info="currCmp.info"
        :cmpStyle="currCmp.style"
        :cmp="currCmp"
        :_rootId="cmp.id"
      >
      </component>
    </draggable>
    <edit-menu v-if="showEditMenu" :cmp="cmp" parent="container" />
  </section>
</template>

<script>
import editMenu from '@/cmps/web.edit.menu.cmp';
import { eventBus } from '../services/eventbus.service.js';
import webMap from '@/cmps/elements.cmps/web.map.cmp';
import webTxt from '@/cmps/elements.cmps/web.txt.cmp';
import webVideo from '@/cmps/elements.cmps/web.video.cmp';
import webImg from '@/cmps/elements.cmps/web.img.cmp';
import webForm from '@/cmps/elements.cmps/web.form.cmp';
import webButton from '@/cmps/elements.cmps/web.button.cmp';
import webList from '@/cmps/elements.cmps/web.list.cmp';
import webDiv from '@/cmps/elements.cmps/web.div.cmp';
import webHamburger from '@/cmps/elements.cmps/web.hamburger.cmp';
import draggable from 'vuedraggable';

export default {
  name: 'web-container',
  props: {
    cmp: Object,
  },
  data() {
    return {
      showEditMenu: false,
      
    };
  },
  components: {
    webTxt,
    webMap,
    webImg,
    webForm,
    webButton,
    webList,
    webVideo,
    editMenu,
    webDiv,
    webHamburger,
    draggable,
  },
  methods: {
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
    updateSite() {
      eventBus.$emit('update-site');      
    },
  },
  computed: {
    onEdit() {
      return this.$store.getters.isEditOn ? 'on-edit' : '';
    },
    cmps(){
      return this.cmp.info.cmps
    },
      isEditOn(){
      return this.$store.getters.isEditOn
    }
  },
  created() {
    eventBus.$on('change-web-container', () => {
      this.$forceUpdate();
    });
  },
};
</script>
