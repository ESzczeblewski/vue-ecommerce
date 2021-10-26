<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
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
