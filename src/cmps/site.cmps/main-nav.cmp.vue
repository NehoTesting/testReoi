

<template>
  <section class="main-navbar">
    <fixed-header :threshold="100">
      <nav class="main-nav" :class="fixedHeaderClass">
        <div class="logo">
          <router-link to="/">
            <img class="logo-img" src="@/assets/logo2.png" alt="" />
          </router-link>
        </div>
        <button
          class="hamburger hamburger--spring"
          @click="toggleMenu"
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div class="menu">
          <router-link class="nav-link"  @click.native="toggleMenu" to="/templates">Templates</router-link>
          <router-link class="nav-link"  @click.native="toggleMenu" to="/editor">Editor</router-link>
          <a @click="showLogin(); toggleMenu();" class="nav-link" v-if="!user">Login</a>
          <span v-if="user">
            <a class="nav-link" @click="doLogout(); toggleMenu();">Log Out</a>
            <router-link class="nav-link" to="/user">
              Profile <i class="el-icon-user profile"></i
            ></router-link>
          </span>
          <span class="save-and-publish" v-if="onEdit">
            <a class="nav-link" @click="save"
              >Save <i v-if="isLoading" class="el-icon-loading loader"></i
            ></a>
            <a class="nav-link" @click="publishTemplate">Publish</a></span
          >
        </div>
      </nav>
    </fixed-header>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import FixedHeader from 'vue-fixed-header';

export default {
  name: 'app',
  components: {
    FixedHeader,
  },
  data() {
    return {
      template: {
        templateName: null,
        templatePreviewImg: null,
      },
      isLoading: false,
    };
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('menu-open');
      document.querySelector('.hamburger').classList.toggle('is-active');
    },
    showLogin() {
      this.$emit('showLogin');
    },
    doLogout() {
      this.$store.dispatch({ type: 'logout' });
    },
    saveTemplate() {
      const templateToSave = JSON.parse(JSON.stringify(this.template));
      eventBus.$emit('onSaveTemplate', templateToSave);
      this.template = {
        templateName: null,
        templatePreviewImg: null,
      };
    },
    publishTemplate() {
      eventBus.$emit('onPublishTemplate');
    },
    async getScreenShot() {
      var htmlToImage = require('html-to-image');
      try {
        var dataUrl = await htmlToImage.toPng(
          document.getElementById('workspace'),
          { quality: 0.01, height: 900, pixelRatio: 0.85 }
        );
        return dataUrl;
      } catch {
        console.log('error');
      }
    },
    async save() {
      this.isLoading = true;
      const screenshot = await this.getScreenShot();
      if (!this.$store.getters.user) {
        eventBus.$emit(
          'show-login',
          'Please login in order to save the website'
        );
      } else {
        this.$prompt("What is your website's name?", {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        })
          .then(({ value }) => {
            this.template.templatePreviewImg = screenshot;
            this.$message({
              type: 'success',
              message: 'Your website is saved',
            });
            this.template.templateName = value;
            this.saveTemplate();
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: 'Website was not saved.',
            });
          });
      }
      this.isLoading = false;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    onEdit() {
      return this.$store.getters.isEditOn;
    },
    fixedHeaderClass() {
      return this.$store.getters.isFixedHeaderOn ? 'nav-fixed-header' : '';
    },
  },
  created() {},
};
</script>

<style scoped>
/* .main-nav.vue-fixed-header--isFixed {
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100vw;
  border-bottom: 0;
  animation-duration: 0.7s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
  animation-timing-function: ease;
  transition: 0.3s all ease-in-out;
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
} */
</style>