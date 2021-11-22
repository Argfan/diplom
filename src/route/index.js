import Vue from "vue";
import VueRouter from "vue-router";

import DLogin from "../pages/DLogin";
import DMain from "../pages/DMain.vue";
// import Tempp from "../components/Tempp";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "DLogin",
      component: DLogin,
    },
    {
      path: "/main",
      name: "main",
      component: DMain,
    },
  ],
});
