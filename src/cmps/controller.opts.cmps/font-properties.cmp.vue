<template>
  <div class="font-properties">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Text Styling</span>
        </template>
        <div class="flex center space plr10">
          <span>Align</span>
          <span class="align-text-btns">
            <button @click="setAlign('left')" class="button-reset">
              <div class="icon-set" v-html="alignLeft"></div>
            </button>
            <button @click="setAlign('center')" class="button-reset">
              <div class="icon-set" v-html="alignCenter"></div>
            </button>
            <button class="button-reset" @click="setAlign('right')">
              <div class="icon-set" v-html="alignRight"></div>
            </button>
          </span>
        </div>
        <div class="flex center space plr10">
          <span>Decoration</span>
          <button @click="toggleBold" class="button-reset btn-bold">B</button>
          <button @click="toggleItalic" class="button-reset btn-italic">
            I
          </button>
          <button @click="toggleUnderline" class="button-reset btn-underline">
            U
          </button>
        </div>
        <div class="flex center space plr10">
          <span>Font Size</span>
          <el-slider
            :max="100"
            v-model="fontSize"
            @input="setFontSize"
          ></el-slider>
        </div>
        <div class="flex center space plr10">
          <span>Spacing</span>
          <el-slider
            :min="0"
            :max="100"
            v-model="letterSpacing"
            @input="setSpacing"
          ></el-slider>
        </div>
        <div class="flex center space plr10">
          <span>Shadow</span>
          <el-select
            class="plr10"
            v-model="textShadow"
            @change="setTextShadow"
            placeholder="Select"
          >
            <el-option value="None">None</el-option>
            <el-option value="Light">Light</el-option>
            <el-option value="Medium">Medium</el-option>
            <el-option value="Strong">Strong</el-option>
          </el-select>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { iconService } from '../../services/icon-service.js';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'edit-txt',
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      fontSize: 0.875,
      letterSpacing: 0,
      textShadow: 0,
      textAlign: 'none',
      spacingInput: 0,
      fontSizeInput: 0,
      alignRight: iconService.alignRight(),
      alignLeft: iconService.alignLeft(),
      alignCenter: iconService.alignCenter(),
      value: '',
      activeName: '1',
    };
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          this.fontSize = this.cmp.style.fontSize
            ? +this.getNumFromString('fontSize') * 16
            : 0.875;
          this.letterSpacing = this.cmp.style.letterSpacing
            ? +this.getNumFromString('letterSpacing') * 16
            : 0;
        }
      },
    },
  },
  created() {
    this.fontSize = this.cmp.style.fontSize
      ? +this.getNumFromString('fontSize') * 16
      : 14;
    this.letterSpacing = this.cmp.style.letterSpacing
      ? +this.getNumFromString('letterSpacing') * 16
      : 0;
  },
  methods: {
    getNumFromString(styleProperty) {
      if (!this.cmp.style) this.cmp.style = {};
      if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join('.');
      } else {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
      }
    },

    setAlign(align) {
      if (!this.cmp.style.textAlign) this.cmp.style.textAlign = align;
      this.cmp.style.textAlign = align;
      eventBus.$emit('update-site');
    },
    setTextShadow(strength) {
      switch (strength) {
        case 'None':
          this.cmp.style.textShadow = 'unset';
          break;
        case 'Light':
          this.cmp.style.textShadow = '1px 1px 2px #d1c9ca';
          break;
        case 'Medium':
          this.cmp.style.textShadow = '3px 2px 3px #b7b0b1';
          break;
        case 'Strong':
          this.cmp.style.textShadow = '5px 5px 3px #b7b0b1';
          break;
      }
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
      return this.cmp.style.textShadow;
    },
    setFontSize(size) {
      this.cmp.style.fontSize = size / 16 + 'rem';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
    },
    setSpacing(size) {
      // this.letterSpacing = size;
      this.cmp.style.letterSpacing = size / 16 + 'rem';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
    },
    toggleBold() {
      if (this.cmp.style.fontWeight === 'unset' || !this.cmp.style.fontWeight)
        this.cmp.style.fontWeight = 'bold';
      else this.cmp.style.fontWeight = 'unset';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
    },
    toggleItalic() {
      if (this.cmp.style.fontStyle === 'unset' || !this.cmp.style.fontStyle)
        this.cmp.style.fontStyle = 'italic';
      else this.cmp.style.fontStyle = 'unset';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
    },
    toggleUnderline() {
      if (
        this.cmp.style.textDecoration === 'unset' ||
        !this.cmp.style.textDecoration
      )
        this.cmp.style.textDecoration = 'underline';
      else this.cmp.style.textDecoration = 'unset';
      eventBus.$emit('update-site');
      eventBus.$emit('change-web-txt');
    },
  },
};
</script>
