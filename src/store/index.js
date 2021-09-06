import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sorting: 'default',
  search: '',
  cartValue: 0,
  cartItems: 0,
  cartItemsList: [],
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
  addToCart(state, product) {
    const item = state.cartItemsList.find((item) => item.product.id === product.id);

    if (item) {
      const itemIndex = state.cartItemsList.indexOf(item);

      state.cartItemsList[itemIndex].product.price += state.cartItemsList[itemIndex].product.price;
      state.cartItemsList[itemIndex].quantity += 1;
      state.cartValue += product.price;
      state.cartItems += 1;
      return;
    }

    state.cartValue += product.price;
    state.cartItems += 1;

    const quantity = 1;

    state.cartItemsList.push({ product, quantity });
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
  ADD_TO_CART({ commit }, product) {
    commit('addToCart', product);
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
  cartItemsList(state) {
    return state.cartItemsList;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
