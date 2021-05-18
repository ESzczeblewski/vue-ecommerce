import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sorting: 'default',
};
const mutations = {
  setSorting(state, sorting) {
    state.sorting = sorting;
    console.log(state.sorting);
  },
};
const actions = {
  SET_SORTING({ commit }, sorting) {
    commit('setSorting', sorting);
  },
};

const getters = {
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
