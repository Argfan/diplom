import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./route";

import "@/assets/css/app.min.css";
import "@/assets/scss/main.scss";

Vue.config.productionTip = false;



new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
