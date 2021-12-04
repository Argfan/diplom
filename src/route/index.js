import Vue from "vue";
import VueRouter from "vue-router";

import DLogin from "../pages/DLogin.vue";
import DMain from "../pages/DMain.vue";
import FirstContent from "../pages/contentPages/FirstContent.vue";
import SecondContent from "../pages/contentPages/SecondContent.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "DLogin",
      component: DLogin,
    },
    {
      path: "/",
      name: "main",
      component: DMain,
      children: [
        {
          path: "/main",
          name: "FirstContent",
          component: FirstContent,
        },
        {
          path: "/main/SecondContent",
          name: "SecondContent",
          component: SecondContent,
        },
      ],
    },
  ],
});
