<template>
  <div class="select-color">
    <div v-if="colors">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <span>Background Color</span>
          </template>
          <div class="colors-pagination flex col center space">
            <ul
              v-for="colors in displayedColors"
              :key="colors.idx"
              class="pointxer palette"
            >
              <span class="flex center space">
                <i
                  @click="changePage(-1)"
                  class="el-icon-arrow-left page-link pointer"
                ></i>
                <li
                  class="transparent"
                  @click="setColor('transparent', 'backgroundColor')"
                >
                  <span></span>
                </li>
                <li
                  v-for="color in colors"
                  @click="setColor(color, 'backgroundColor')"
                  :key="color.idx"
                  :style="{ backgroundColor: color }"
                ></li>
                <i
                  @click="changePage(1)"
                  class="el-icon-arrow-right page-link pointer"
                ></i>
              </span>
              <div
                class="change-color-method flex center"
                @click="textOrBgc = 'backgroundColor'"
              >
                <span>Not a palette fan? → </span>
                <el-color-picker
                  @active-change="setColor"
                  v-model="cmp.style.backgroundColor"
                ></el-color-picker>
              </div>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" v-if="cmp.type !== 'web-container'">
          <template slot="title">
            <div
              class="flex center plr10 space mb1 pointer"
              v-show="cmp.type !== 'web-container'"
            ></div>
            Text Color
          </template>
          <div class="colors-pagination flex col center space">
            <ul
              v-for="colors in displayedColors"
              :key="colors.idx"
              class="pointer palette"
            >
              <span class="flex center space">
                <i
                  @click="changePage(-1)"
                  class="el-icon-arrow-left page-link pointer"
                ></i>
                <li
                  class="tranparent"
                  @click="setColor('transparent', 'backgroundColor')"
                >
                  <span></span>
                </li>
                <li
                  v-for="color in colors"
                  @click="setColor(color, 'color')"
                  :key="color.idx"
                  :style="{ backgroundColor: color }"
                ></li>
                <i
                  @click="changePage(1)"
                  class="el-icon-arrow-right page-link pointer"
                ></i>
              </span>
              <div
                class="change-color-method flex center"
                @click="textOrBgc = 'color'"
              >
                <span>Not a palette fan? → </span>
                <el-color-picker
                  @active-change="setColor"
                  v-model="cmp.style.color"
                ></el-color-picker>
              </div>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { colorService } from '../../services/color.service';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'select-color',
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      colors: null,
      page: 1,
      perPage: 1,
      pages: [],
      textOrBgc: null,
    };
  },
  created() {
    const colorPalette = colorService.getColors();
    this.colors = colorPalette;
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.colors.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(colors) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return colors.slice(from, to);
    },
    setColor(color, classProperty = this.textOrBgc) {
      this.cmp.style[classProperty] = color;
      eventBus.$emit('update-site');
      eventBus.$emit('change-' + this.cmp.type);
    },
    changePage(diff) {
      if (this.page >= this.colors.length && diff === 1) this.page = 0;
      if (this.page === 1 && diff === -1) this.page = this.colors.length + 1;
      this.page += diff;
    },
  },
  computed: {
    displayedColors() {
      return this.paginate(this.colors);
    },
  },
  watch: {
    colors() {
      this.setPages();
    },
  },
};
</script>
