<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './firebaseInit';

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
    const data = JSON.parse(localStorage.getItem('cartItemsList'));

    if (data) {
      data.forEach((el) => {
        this.$store.dispatch('GET_STORAGE_DATA', el);
      });
    }
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
