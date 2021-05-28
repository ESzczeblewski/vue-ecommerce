import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sorting: 'default',
  search: '',
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
};

export const getters = {
  sorting(state) {
    return state.sorting;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
