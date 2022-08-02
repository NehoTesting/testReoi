import Vue from "vue";
import app from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store.js";
import * as VueGoogleMaps from 'vue2-google-maps'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/styles.scss";
import VueClipboard from 'vue-clipboard2'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

Vue.use(VueClipboard)
Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCkBmq94RUL-VNdku46pXE3nt-_Z01Damo',
        libraries: 'places',
    },
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount("#app");