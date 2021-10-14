import Vue from 'vue';
import Vuex from 'vuex';
import {
  doc, setDoc, getDoc, updateDoc, deleteDoc, increment,
} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseInit';
import router from '../router';

Vue.use(Vuex);

const state = {
  sorting: 'default',
  search: '',
  cartValue: 0,
  cartItems: 0,
  cartItemsList: [],
  userProfile: {},
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
  addToCart(state, order) {
    const item = state.cartItemsList.find((item) => item.order.id === order.id);
    const initialPrice = order.price;

    if (item) {
      const itemIndex = state.cartItemsList.indexOf(item);
      state.cartItemsList[itemIndex].order.value += initialPrice;
      state.cartItemsList[itemIndex].quantity += 1;
      state.cartValue += initialPrice;
      state.cartItems += 1;
      return;
    }

    state.cartValue += order.price;
    state.cartItems += 1;

    const quantity = 1;

    state.cartItemsList.push({ order, quantity });
  },
  removeFromCart(state, order) {
    const deletedProduct = state.cartItemsList.find((item) => item.order.id === order.order.id);

    const newItemsList = state.cartItemsList
      .filter((item) => item.order.id !== deletedProduct.order.id);

    state.cartItemsList = newItemsList;
    state.cartValue -= deletedProduct.order.value;
    state.cartItems -= deletedProduct.quantity;
  },
  removeOne(state, order) {
    const product = state.cartItemsList.find((item) => item.order.id === order.id);
    const initialPrice = order.price;
    const itemIndex = state.cartItemsList.indexOf(product);

    state.cartItemsList[itemIndex].order.value -= initialPrice;
    state.cartItemsList[itemIndex].quantity -= 1;
    state.cartValue -= initialPrice;
    state.cartItems -= 1;

    if (state.cartItemsList[itemIndex].quantity === 0) {
      const newItemsList = state.cartItemsList
        .filter((item) => item.order.id !== product.order.id);
      state.cartItemsList = newItemsList;
    }
  },
  getFirebaseData(state, payload) {
    state.cartItems += payload.quantity;
    state.cartItemsList.push(payload);
    state.cartValue += payload.order.value;
  },

  setUserProfile(state, val) {
    state.userProfile = val;
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
  async ADD_TO_CART({ commit }, order) {
    commit('addToCart', order);
    const docRef = doc(db, 'cartItems', order.title);
    const docSnap = await getDoc(docRef);

    await setDoc(docRef, { order }, { merge: true });

    if (docSnap.data()) {
      await updateDoc(docRef, {
        quantity: increment(1),
      });
      return;
    }

    await updateDoc(docRef, {
      quantity: 1,
    });
  },

  async REMOVE_FROM_CART({ commit }, product) {
    commit('removeFromCart', product);
    const docRef = doc(db, 'cartItems', product.order.title);
    await deleteDoc(docRef);
  },
  async REMOVE_ONE({ commit }, product) {
    commit('removeOne', product);
    const docRef = doc(db, 'cartItems', product.title);
    const { price } = product;
    const docSnap = await getDoc(docRef);

    if (docSnap.data().order.value === price) {
      await deleteDoc(docRef);
      return;
    }

    await updateDoc(docRef, {
      'order.value': increment(-price),
      quantity: increment(-1),
    });
  },

  GET_FIREBASE_DATA({ commit }, payload) {
    commit('getFirebaseData', payload);
  },

  async LOGIN({ dispatch }, form) {
    // sign user in
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, form.email, form.password);

    // fetch user profile and set in state
    dispatch('FETCH_USER_PROFILE', user);
  },

  async FETCH_USER_PROFILE({ commit }, user) {
    // fetch user profile
    const docRef = doc(db, 'usersCollection', `${user.uid}`);
    const docSnap = await getDoc(docRef);

    // set user profile in state
    commit('setUserProfile', docSnap.data());

    // change route to dashboard
    router.push('/cart');
  },

  async SIGNUP({ dispatch }, form) {
    // sign user up
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);

    // create user profile object in userCollections
    await setDoc(doc(db, 'usersCollection', `${user.uid}`), {
      name: form.name,
      title: form.title,
    });

    // fetch user profile and set in state
    dispatch('FETCH_USER_PROFILE', user);
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
