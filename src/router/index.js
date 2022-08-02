import Vue from "vue";
import VueRouter from "vue-router";
import editor from "../views/editor.vue";
import templateList from "../views/template.list.vue";
import user from '../views/user.vue'
import sitePreview from "../views/site.preview.vue";
import home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/editor",
    name: "editor",
    component: editor
  },
  {
    path: "/editor/:id",
    name: "editor",
    component: editor
  },
  {
    path: "/templates",
    name: "templates",
    component: templateList
  },
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/:id",
    name: "site",
    component: sitePreview
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
