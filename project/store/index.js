import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    total: 0,
  },
  mutations: {
    add(state, payload) {
      state.cart.push(payload);
    },
    remove(state, payload) {
      state.cart.splice(payload, 1);
    },
    removeAll(state) {
      state.cart = [];
    },
  },

  actions: {
    add({ commit }) {
      commit("add");
    },
    remove({ commit }) {
      commit("remove");
    },
    removeAll({ commit }) {
      commit("removeAll");
    },
  },
});