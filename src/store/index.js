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
  resetSorting(state) {
    state.sorting = 'default';
  },
};
const actions = {
  SET_SORTING({ commit }, sorting) {
    commit('setSorting', sorting);
  },
  RESET_SORTING({ commit }) {
    commit('resetSorting');
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
