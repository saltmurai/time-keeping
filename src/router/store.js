import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    authenticated: false,
    userId: "",
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
    setUserid(state, status) {
      state.userId = status;
    },
  },
});

export default store;
