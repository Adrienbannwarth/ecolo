import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHidden: false
  },
  mutations: {
    // isHidden(state) {
    //   state.isHidden = !state.isHidden
    // }
  },
  actions: {
  },
  modules: {}
});