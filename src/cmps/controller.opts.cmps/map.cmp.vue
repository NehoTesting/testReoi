<template>
  <div class="edit-map plr10 flex center space col">
    <p><i class="el-icon-add-location"></i>Add your address</p>
    <div
      v-if="showSuggested && suggestedLocs"
      @click="setLoc"
      class="suggested-locs"
    >
      {{ suggestedLocs.address }}
    </div>
    <el-autocomplete
      class="inline-input"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="Enter your address"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
import { mapService } from '@/services/map.service.js';
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'edit-map',
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      input: null,
      suggestedLocs: null,
      showSuggested: false,
      searchRes: [],
      state: '',
    };
  },
  methods: {
    async querySearch(queryString, cb) {
      const res = await mapService.getAddress(queryString);
      try {
        this.suggestedLocs = res;
        cb([{ value: res.address }]);
      } catch {
        console.log('error');
      }
    },
    handleSelect() {
      this.showSuggested = false;
      const { lat, lng } = this.suggestedLocs;
      this.cmp.info.lat = lat;
      this.cmp.info.lng = lng;
      this.onEdit();
    },
    onEdit() {
      eventBus.$emit('update-site');
    },
  },
  computed: {
    // showSuggested(){
    //   return this.input && this.suggestedLocs ? true : false
    // }
  },
};
</script>