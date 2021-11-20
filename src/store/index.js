import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFolded: false,
  },
  mutations: {
    SET_ISFOLDED(state, data) {
      state.isFolded = data;
    },
  },
  actions: {},
  getters: {
    ISFOLDED(state) {
      return state.isFolded;
    },
  },
});
