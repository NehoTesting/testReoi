<template>
  <section class="web-form" :style="cmp.style" @click.stop="setEditItem">
    <form v-if="mail">
      <el-input type="email" v-model="mail.email" placeholder="Your Email" />
      <el-input
        type="text"
        v-model="mail.fullName"
        placeholder="Your full name"
      />
      <el-input type="text" v-model="mail.subject" placeholder="Your subject" />
      <el-input type="textarea" v-model="mail.txt" placeholder="Your message" />
      <component
        v-for="(children, idx) in cmp.info.cmps"
        :is="children.type"
        :key="idx"
        :element="children"
      ></component>
    </form>
  </section>
</template>

<script>
import webButton from "@/cmps/elements.cmps/web.button.cmp";
import { eventBus } from "@/services/eventbus.service.js";

export default {
  props: {
    cmp: Object,
  },
  name: "web-form",
  components: {
    webButton,
  },
  data() {
    return {
      mail: {
        txt: null,
        fullName: null,
        email: null,
        subject: null,
      },
    };
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.content = ev.target.innerText;
      eventBus.$emit("update-site");
    },
    setEditItem() {
      eventBus.$emit("openEditor", this.cmp);
      this.$nextTick(() => {
        eventBus.$emit("setItem", this.cmp);
      });
    },
  },
};
</script>
<style scoped>
</style>
