<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseInit';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },

  computed: {
    ...mapGetters(['cartValue', 'cartItems', 'cartItemsList']),
  },

  async created() {
    await getDocs(collection(db, 'cities'));
    const querySnapshot = await getDocs(collection(db, 'cartItems'));
    querySnapshot.forEach((doc) => {
      this.$store.dispatch('GET_FIREBASE_DATA', doc.data());
    });
  },
};
</script>

<style lang="scss">
@import './design';

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: $primary-font;
  box-sizing: border-box;
  background-color: $nav-background;
}
</style>
