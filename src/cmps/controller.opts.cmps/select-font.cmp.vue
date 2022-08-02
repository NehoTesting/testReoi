
<template>
  <div class="select-font">
    <el-collapse accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space pointer"></div>
          <span>Font</span>
        </template>
        <div class="flex center space plr10">
          <span>Font</span>
          <el-select
            class="plr10"
            v-model="value"
            @change="setFontFamily"
            placeholder="Select Font"
          >
            <el-option
              v-for="font in fonts"
              :key="font.value"
              :label="font.label"
              :value="font.value"
              :style="{ fontFamily: font.value }"
            >
            </el-option>
          </el-select>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'select-font',
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {
      fonts: [
        {
          value: 'abril',
          label: 'Abril',
        },
        {
          value: 'almondNougat',
          label: 'Almond Nougat',
        },
        {
          value: 'assistantBold',
          label: 'Assistant (Bold)',
        },
        {
          value: 'assistantLight',
          label: 'Assistant (Light)',
        },
        {
          value: 'caviarDreams',
          label: 'Caviar Dreams',
        },
        {
          value: 'champagneLimousines',
          label: 'Champagne Limousines',
        },
        {
          value: 'crimsonText',
          label: 'Crimson Text',
        },
        {
          value: 'fredericka',
          label: 'Fredericka The Great',
        },
        {
          value: 'raleway',
          label: 'Raleway',
        },
        {
          value: 'robotomonoLight',
          label: 'RobotoMono Light',
        },
        {
          value: 'robotomono',
          label: 'RobotoMono',
        },
        {
          value: 'rubik',
          label: 'Rubik',
        },
        {
          value: 'sacramento',
          label: 'Sacramento',
        },
        {
          value: 'caudex',
          label: 'Caudex',
        },
        {
          value: 'funcyKids',
          label: 'Funcy Kids',
        },
        {
          value: 'kulo',
          label: 'Kulo',
        },
        {
          value: 'pumpkins',
          label: 'Pumpkins',
        },
        {
          value: 'romantika',
          label: 'Romantika',
        },
        {
          value: 'sundayMorning',
          label: 'Sunday Morning',
        },
      ],
      value: '',
    };
  },
  created() {
    this.value = this.cmp.style.fontFamily ? this.cmp.style.fontFamily : '';
  },
  methods: {
    setFontFamily(font) {
      this.cmp.style.fontFamily = font;
      eventBus.$emit('update-site');
      eventBus.$emit('change-' + this.cmp.type);
    },
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          this.value = this.cmp.style.fontFamily
            ? this.cmp.style.fontFamily
            : '';
        }
      },
    },
  },
};
</script>
