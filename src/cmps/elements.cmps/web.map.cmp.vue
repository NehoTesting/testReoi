<template>
  <section
    class="web-map"
    :style="cmp.style"
    @click.stop="setEditItem"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <edit-menu v-if="showEditMenu" :cmp="cmp" />

    <GmapMap
      :center="{ lat: cmp.info.lat, lng: cmp.info.lng }"
      :zoom="cmp.info.zoom"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
      }"
      map-type-id="terrain"
      :class="cmp.class"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  props: {
    cmp: Object,
  },
  data() {
    return {
      showEditMenu: false,
    };
  },
  computed: {
    markers() {
      return [{ position: { lat: this.cmp.info.lat, lng: this.cmp.info.lng } }];
    },
  },
  name: 'web-map',
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
};
</script>
<style scoped>
</style>
