<template>
  <section id="controller" class="controller flex space col">
    <div>
      <nav class="flex pointer space">
        <a @click="addOrEdit = 'add'" :class="getIsAdd('add')">
          <i class="el-icon-plus"></i>
          Add</a
        >
        <a @click="addOrEdit = 'edit'" :class="getIsAdd('edit')">
          <i class="el-icon-edit"></i>
          Edit</a
        >
      </nav>
      <component :is="addOrEdit" :itemToEdit="itemToEdit"></component>
    </div>
  </section>
</template>
<script>
import add from '@/cmps/controller.opts.cmps/add.cmp';
import edit from '@/cmps/controller.opts.cmps/edit.cmp';
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'controller',
  components: {
    add,
    edit,
  },
  props: {
    itemToEdit: String,
    siteLength: Number,
  },
  data() {
    return {
      addOrEdit: 'add',
      cmpToEdit: null,
    };
  },
  methods: {
    getIsAdd(type) {
      return {
        'active-tab': this.addOrEdit === type,
      };
    },
  },
  created() {
    eventBus.$on('openEditor', () => {
      this.addOrEdit = 'edit';
    });
  },
  watch: {
    siteLength: {
      deep: true,
      handler() {
        if (this.siteLength === 0) this.addOrEdit = 'add';
      },
    },
  },
};
</script>
<style scoped>
</style>