<template>
  <div class="edit-img">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Change Image</span>
        </template>
        <label class="pointer">
          <div class="upload-image flex space center">
            <span>Upload Image</span>
            <i class="el-icon-upload2" v-if="!isLoading"></i>
            <i class="el-icon-loading" v-if="isLoading"></i>
            <input type="file" @change="uploadImg" />
          </div>
        </label>
        <p
          class="upload-image pointer flex space center"
          @click="isToShowLink = !isToShowLink"
        >
          Link Image <i class="el-icon-edit"></i>
        </p>
        <el-input
          class="link-input"
          v-if="isToShowLink"
          @input="changeLinkTo"
          @keyup.enter="changeLinkTo"
          placeholder="Your link here"
          v-model="cmp.info.src"
        ></el-input>
        <p
          class="pointer upload-image flex space center"
          @click="(isToShowSearch = !isToShowSearch), (unsplashImages = null)"
        >
          Search Image
          <i class="el-icon-search"></i>
        </p>
        <el-autocomplete
          v-model="term"
          v-if="isToShowSearch"
          :fetch-suggestions="querySearch"
          placeholder="Search Here"
          :trigger-on-focus="false"
          class="link-input plr10"
          @change="searchImages"
          popper-class="search-popper"
          @select="handleSelect"
        ></el-autocomplete>
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
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Image Styling</span>
        </template>
        <el-checkbox
          v-model="isBorder"
          @change="toggleBorder"
          class="change-image plr10"
          >Change Border</el-checkbox
        >
        <div class="flex center space plr10">
          <p>Radius</p>
          <el-slider
            :min="0"
            :max="50"
            v-model="borderRadius"
            @input="setBorderRadius"
          ></el-slider>
        </div>
        <div class="flex center space plr10">
          <p>Change Size</p>
          <el-slider
            :min="0"
            :max="100"
            v-model="width"
            @input="setWidth"
          ></el-slider>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { unsplashService } from '../../services/unsplash.service.js';
import { uploadImg } from '../../services/img.upload.service.js';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'edit-img',
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {
      borderRadius: 0,
      isBorder: null,
      width: 100,
      isToShowLink: false,
      input: 0,
      isLoading: false,
      term: null,
      isToShowSearch: false,
      unsplashImages: null,
      activeName: '1',
    };
  },
  created() {
    this.borderRadius = this.cmp.style.borderRadius
      ? parseInt(this.cmp.style.borderRadius)
      : 0;
    this.width = this.cmp.style.width ? +this.getNumFromString('width') : 100;
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id && this.cmp) {
          this.borderRadius = this.cmp.style.borderRadius
            ? parseInt(this.cmp.style.borderRadius)
            : 0;
          this.width = this.cmp.style.width
            ? +this.getNumFromString('width')
            : 100;
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
      this.isLoading = true;
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.info.src = img.url;
      eventBus.$emit('update-site');
      this.isLoading = false;
    },
    querySearch(queryString, cb) {
      cb([{ value: 'Search For ' + queryString }]);
    },
    async searchImages() {
      if (!this.term) return;
      const res = await unsplashService.getImages(this.term);
      this.unsplashImages = res;
    },
    handleSelect() {
      this.searchImages();
    },
    changeLinkTo(link) {
      this.cmp.info.src = link;
      eventBus.$emit('update-site');
    },
    toggleBorder() {
      if (this.cmp.style.border === 'unset')
        this.cmp.style.border = '1px solid gray';
      else this.cmp.style.border = 'unset';
      eventBus.$emit('update-site');
    },
    setBorderRadius(percent) {
      this.cmp.style.borderRadius = percent + '%';
      eventBus.$emit('update-site');
      eventBus.$emit('change-img');

      this.borderRadius = null;
    },
    setImage(imageUrl) {
      this.cmp.info.src = imageUrl;
      eventBus.$emit('update-site');
    },
    setWidth(percent) {
      this.input++;
      if (this.input <= 1) return;
      this.cmp.style.width = percent + '%';
      eventBus.$emit('change-img');
      this.width = percent;
    },
  },
};
</script>