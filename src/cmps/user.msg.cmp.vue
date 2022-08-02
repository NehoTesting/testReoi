<template>
  <section></section>
</template>
<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      singupNums: 0
    };
  },
    methods: {
      open1() {
        this.$message('This is a message.');
      },
      loginSuccess() {
        this.$message({
          message: 'Login succuess',
          type: 'success'
        });
      },
      singupSuccess() {
        this.$message({
          message: 'Signup succuess',
          type: 'success'
        });
      },
      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    },
    created() {
      eventBus.$on('user-msg', (type)=> {
        if (type === 'login-success') this.loginSuccess()
        if (type === 'signup-success'){
          this.singupNums++
          if (this.singupNums >= 2) return
          this.singupSuccess()
        } 
      })
    },
};
</script>