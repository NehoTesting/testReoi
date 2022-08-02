<template>
  <section class="user-profile flex space center">
    <div v-if="isLoading" class="loader">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
    <div class="main-section" v-else>
      <h3>Welcome back, {{ user.username }}!</h3>
      <p class="main-section-title">
        Select a site to edit, view and open its dashboard
      </p>
      <div class="flex space center user-tmp-list">
        <span
          class="user-tmp-display"
          v-for="website in websites"
          :key="website._id"
        >
          <span class="user-tmp-name">{{ website.name }}</span>
          <div class="tmp-img-container">
            <img class="user-tmp-image" :src="website.previewImg" alt="" />
          </div>
          <span class="flex center">
            <button @click="removeWeb(website._id)">
              <i class="el-icon-delete"></i>
            </button>
            <router-link class="choose pointer" :to="'editor/' + website._id">
              <button><i class="el-icon-edit"></i></button>
            </router-link>
          </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    removeWeb(webId) {
      this.$store.dispatch('removeWeb', webId);
    },
    async loadUserWeb() {
      this.isLoading = true;
      await this.$store.dispatch('loadUserWebs');
      try {
        eventBus.$emit('toggleLoading');
      } catch {
        eventBus.$emit('toggleLoading');
        console.log('user webs load failed.');
      }
      this.isLoading = false;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    websites() {
      return this.$store.getters.userWebs;
    },
  },
  created() {
    this.loadUserWeb();
  },
};
</script>

