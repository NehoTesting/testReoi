<template>
  <div class="edit-video">
    <p><i class="el-icon-edit"></i>Insert URL</p>
    <el-input
      v-model="input"
      @input="changeLinkTo"
      placeholder="Enter URL From YouTube"
    ></el-input>
    <p><i class="el-icon-search"></i>Search Video</p>
    <el-autocomplete
      popper-class="search-popper"
      v-model="searchTerm"
      :fetch-suggestions="querySearch"
      placeholder="Enter your address"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
    <div class="search-vids" v-if="vids">
      <div class="search-vid-preview" v-for="(vid, idx) in vids" :key="idx">
        <img :src="vid.thumbnail.url" @click="changeLinkTo(vid.videoId)" />
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import { youtubeService } from '@/services/youtube.service.js';

export default {
  name: 'edit-video',
  components: {},
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      input: '',
      searchTerm: '',
      vids: null,
    };
  },
  methods: {
    changeLinkTo(url) {
      if (url) {
        this.cmp.info.content = 'https://www.youtube.com/embed/' + url;
      } else {
        var embbedVal = this.input.replace('watch?v=', 'embed/');
        var idx = embbedVal.indexOf('&');
        this.cmp.info.content =
          idx === -1
            ? embbedVal.substring(0, embbedVal.length)
            : embbedVal.substring(0, idx);
      }
      this.onEdit();
    },
    querySearch(queryString, cb) {
      cb([{ value: 'Search For ' + queryString }]);
    },
    handleSelect() {
      this.onSearch();
    },
    async onSearch() {
      const vids = await youtubeService.getVids(this.searchTerm);
      try {
        this.vids = vids;
        this.searchTerm = null;
      } catch {
        console.log('error while searching for videos.');
      }
    },
    onEdit() {
      eventBus.$emit('update-site');
    },
    created() {},
  },
};
</script>