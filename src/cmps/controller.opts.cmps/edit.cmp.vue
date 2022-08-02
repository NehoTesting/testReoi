<template>
  <div class="controller-edit">
    <p v-if="!itemToEdit">Please pick an element to edit</p>
    <component v-if="itemToEdit" :is="itemToEdit" :cmp="cmp"></component>
  </div>
</template>
<script>
import { eventBus } from '../../services/eventbus.service.js';
import webButton from './button.cmp';
import webContainer from './container.cmp';
import webImg from './img.cmp';
import webMap from './map.cmp';
import webTxt from './txt.cmp';
import webVideo from './video.cmp';

export default {
  name: 'controller-edit',
  components: {
    webButton,
    webContainer,
    webImg,
    webMap,
    webTxt,
    webVideo,
  },
  data() {
    return {
      itemToEdit: null,
      cmp: null,
      margin: null,
      padding: null,
    };
  },
  created() {
    eventBus.$on('setItem', this.setEditItem);
  },
  methods: {
    setEditItem(cmp) {
      if (cmp.type !== 'web-form') {
        this.cmp = cmp;
        this.itemToEdit = cmp.type;
      } else this.itemToEdit = null;
    },
  },
};
</script>