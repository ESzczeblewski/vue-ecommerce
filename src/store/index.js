import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sorting: 'default',
  search: '',
  cartValue: 0,
  cartItems: 0,
};
export const mutations = {
  setSorting(state, sorting) {
    state.sorting = sorting;
  },
  resetSorting(state) {
    state.sorting = 'default';
  },
  setSearch(state, search) {
    state.search = search;
  },
  resetSearch(state) {
    state.search = '';
  },
  addToCart(state, price) {
    state.cartValue += price;
    state.cartItems += 1;
  },
};
export const actions = {
  SET_SORTING({ commit }, sorting) {
    commit('setSorting', sorting);
  },
  RESET_SORTING({ commit }) {
    commit('resetSorting');
  },
  SET_SEARCH({ commit }, search) {
    commit('setSearch', search);
  },
  RESET_SEARCH({ commit }, search) {
    commit('resetSearch', search);
  },
  ADD_TO_CART({ commit }, price) {
    commit('addToCart', price);
  },
};

export const getters = {
  sorting(state) {
    return state.sorting;
  },
  cartValue(state) {
    return state.cartValue.toFixed(2);
  },
  cartItems(state) {
    return state.cartItems;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
