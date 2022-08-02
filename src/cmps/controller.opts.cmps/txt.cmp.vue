<template>
  <div class="edit-txt" v-if="cmp">
    <font-properties :cmp="cmp"></font-properties>
    <select-font :cmp="cmp"></select-font>
    <select-color :cmp="cmp"></select-color>
  </div>
</template>

<script>
import selectFont from './select-font.cmp';
import selectColor from './select-color.cmp';
import fontProperties from './font-properties.cmp';
export default {
  name: 'edit-txt',
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
      textShadow: null,
      value: '',
    };
  },
  created() {},
  methods: {},
};
</script>
