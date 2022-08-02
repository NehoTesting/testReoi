<template>
  <div class="edit-container" v-if="cmp">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Section Styling</span>
        </template>
        <div class="flex center space plr10">
          Set Length
          <el-slider
            :min="0"
            :max="1400"
            v-model="minHeight"
            @input="setMinHeight"
          ></el-slider>
        </div>
        <div class="flex center space plr10"></div>
        <div class="flex center space plr10">
          <p>Side Spacing</p>
          <el-slider
            :min="0"
            :max="250"
            v-model="padding"
            @input="setHorPadding"
          ></el-slider>
        </div>
        <label class="pointer">
          <div class="upload-image flex space center">
            Upload Background
            <i class="el-icon-upload2"></i>
            <input type="file" @change="uploadImg" />
          </div>
        </label>
        <div>
          <p
            class="pointer upload-image flex space center"
            @click="(isToShowSearch = !isToShowSearch), (unsplashImages = null)"
          >
            Search Image
            <i class="el-icon-search"></i>
          </p>
          <el-autocomplete
            v-model="term"
            class="plr10"
            v-if="isToShowSearch"
            :fetch-suggestions="querySearch"
            placeholder="Search Here"
            :trigger-on-focus="false"
            @change="searchImages"
            popper-class="search-popper"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
        <div v-if="unsplashImages" class="usp-gallery center">
          <div
            v-for="(image, idx) in unsplashImages"
            :key="idx"
            class="usp-image pointer"
            @click="setImage(image.urls.full)"
          >
            <img :src="image.urls.thumb" />
          </div>
        </div>
        <div v-if="getIsImage" class="plr10">
          <el-checkbox v-model="image" @change="removeImage"
            >Remove Background Image</el-checkbox
          >
        </div>
      </el-collapse-item>
    </el-collapse>
    <select-color :cmp="cmp"></select-color>
  </div>
</template>

<script>
import selectColor from './select-color.cmp';
import { unsplashService } from '../../services/unsplash.service.js';
import { uploadImg } from '../../services/img.upload.service.js';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'edit-container',
  props: {
    cmp: [Object, Array],
  },
  components: {
    selectColor,
  },
  data() {
    return {
      padding: 0,
      minHeight: 0,
      image: null,
      term: null,
      isToShowSearch: false,
      unsplashImages: null,
      activeName: '1',
    };
  },
  created() {
    if (!this.cmp.style) this.cmp.style = {};
    if (this.cmp.style.minHeight) {
      var minHeightNum = this.getNumFromString('minHeight');
      this.minHeight = +minHeightNum * 16;
    }
    if (this.cmp.style.paddingRight || this.cmp.style.paddingLeft) {
      var paddingNum = this.getNumFromString('paddingRight');
      this.padding = +paddingNum * 16;
    }
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          if (this.cmp.style.minHeight) {
            var minHeightNum = this.getNumFromString('minHeight');
            this.minHeight = +minHeightNum * 16;
          }
          if (this.cmp.style.padding) {
            var paddingNum = this.getNumFromString('padding');
            this.padding = +paddingNum * 16;
          }
        }
      },
    },
  },
  methods: {
    getNumFromString(styleProperty) {
      if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join('.');
      } else {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
      }
    },
    async uploadImg(ev) {
      if (!this.cmp.style.backgroundImage) {
        this.cmp.style.backgroundImage = '';
      }
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.style.backgroundImage = `url(${img.url})`;
      eventBus.$emit('update-site');
    },
    removeImage() {
      this.cmp.style.backgroundImage = 'unset';
      eventBus.$emit('update-site');
    },
    async searchImages() {
      if (!this.term) return;
      const res = await unsplashService.getImages(this.term);
      this.unsplashImages = res;
    },
    setImage(imageUrl) {
      this.cmp.style.backgroundImage = `url(${imageUrl})`;
      eventBus.$emit('update-site');
    },
    setMinHeight(size) {
      this.minHeight = size;
      this.cmp.style.minHeight = size / 16 + 'rem';
      eventBus.$emit('change-web-txt');
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-container');
    },
    setBgcColor(bgcColor) {
      this.cmp.style.backgroundColor = bgcColor;
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-container');
    },
    setHorPadding(size) {
      this.padding = size;
      this.cmp.style.paddingRight = size / 16 + 'rem';
      this.cmp.style.paddingLeft = size / 16 + 'rem';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-container');
    },
    setVerPadding(size) {
      this.padding = size;
      this.cmp.style.paddingTop = size / 16 + 'rem';
      this.cmp.style.paddingBottom = size / 16 + 'rem';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-container');
    },
    querySearch(queryString, cb) {
      cb([{ value: 'Search For ' + queryString }]);
    },
    handleSelect() {
      this.searchImages();
    },
  },
  computed: {
    getIsImage() {
      if (
        this.cmp.style.backgroundImage === 'unset' ||
        !this.cmp.style.backgroundImage
      )
        return false;
      else return true;
    },
  },
};
</script>