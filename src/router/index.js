import VueRouter from "vue-router";

import DLogin from "../pages/DLogin";
import DMain from "../pages/DMain";
// import Tempp from "../components/Tempp";

export default new VueRouter({
  mode: "history",
  router: [
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
