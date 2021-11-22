import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFolded: false,
    user: {
      login: 'admin',
      password: '123'
    }
  },
  mutations: {
    SET_ISFOLDED: (state, data) => {
      state.isFolded = data;
    },
  },
  actions: {
    ISFOLDED_CHANGE({ commit }, data) {
      commit("SET_ISFOLDED", data);
    },
  },
  getters: {
    ISFOLDED(state){
      return state.isFolded;
    },
    USER_GET(state){
      return state.user
    }
  },
});
