import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import router from "./router";

import "@/assets/css/app.min.css";
import "@/assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
