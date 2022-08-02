<template>
  <div id="app" class="container">
    <main-nav v-if="isShowHeader" @showLogin="showLogin" />
    <div class="modal-bg" v-if="isShowLogin"></div>
    <login-cmp v-if="isShowLogin" @showLogin="showLogin" :msg="loginMsg" />
    <user-msg />
    <loading-cmp v-if="isLoading" />
    <router-view />
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import mainNav from '@/cmps/site.cmps/main-nav.cmp';
import loginCmp from '@/cmps/login.cmp';
import userMsg from '@/cmps/user.msg.cmp';
import loadingCmp from '@/cmps/loading.cmp';

export default {
  name: 'app',
  components: {
    mainNav,
    loginCmp,
    userMsg,
    loadingCmp,
  },
  data() {
    return {
      isShowHeader: true,
      isShowLogin: false,
      isLoading: false,
      loginMsg: null,
      template: {
        templateName: null,
        templatePreviewImg: null,
      },
    };
  },
  methods: {
    showLogin() {
      this.isShowLogin = !this.isShowLogin;
    },
  },
  computed: {},
  created() {
    eventBus.$on('change-edit-mode', () => {
      this.isShowHeader = !this.isShowHeader;
      this.$forceUpdate();
    });
    eventBus.$on('show-login', (msg) => {
      this.loginMsg = msg;
      this.isShowLogin = true;
    });
  },
};
</script>