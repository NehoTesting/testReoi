<template>
  <div class="edit-btn">
    <font-properties :cmp="cmp"></font-properties>
    <select-font :cmp="cmp"></select-font>
    <el-collapse accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Button Styling</span>
        </template>
        <div class="plr10 mb1">
          <el-input
            @input="changeLinkTo"
            placeholder="Attach Link And Press Enter"
            v-model="cmp.linkTo"
            suffix-icon="el-icon-edit"
          ></el-input>
        </div>
        <span class="plr10">
          <el-checkbox v-model="border" @change="toggleBorder"
            >Change Border</el-checkbox
          ></span
        >
        <div class="flex center space plr10">
          <p>Radius</p>
          <el-slider
            :max="100"
            v-model="borderRadius"
            @input="setBorderRadius"
          ></el-slider>
        </div>
      </el-collapse-item>
    </el-collapse>
    <select-color :cmp="cmp"></select-color>
  </div>
</template>

<script>
import selectFont from './select-font.cmp';
import selectColor from './select-color.cmp';
import fontProperties from './font-properties.cmp';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'edit-btn',
  props: {
    cmp: [Object, Array],
  },
  components: {
    selectFont,
    selectColor,
    fontProperties,
  },
  data() {
    return {
      lineHeight: null,
      borderRadius: null,
      border: null,
    };
  },
  created() {
    if (!this.cmp.style.borderRadius) {
      this.cmp.style.borderRadius = '0px';
      this.borderRadius = 0;
    } else if (
      this.cmp.style.borderRadius &&
      this.cmp.style.borderRadius !== 'unset'
    ) {
      this.borderRadius = +this.getNumFromString('borderRadius');
    }
  },
  methods: {
    getNumFromString(styleProperty) {
      if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join('.');
      } else {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
      }
    },
    changeLinkTo(link) {
      this.cmp.linkTo = link;
      eventBus.$emit('update-site');
    },
    toggleBorder() {
      if (this.cmp.style.border === 'unset')
        this.cmp.style.border = '1px solid gray';
      else this.cmp.style.border = 'unset';
      eventBus.$emit('update-site');
    },
    setBorderRadius(size) {
      this.cmp.style.borderRadius = size + 'px';
      eventBus.$emit('update-site');
    },
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          if (!this.cmp.style.borderRadius) {
            this.borderRadius = null;
            this.cmp.style.borderRadius = '0px';
          } else if (
            this.cmp.style.borderRadius &&
            this.cmp.style.borderRadius !== 'unset'
          ) {
            this.borderRadius = +this.getNumFromString('borderRadius');
          }
        }
      },
    },
  },
};
</script>