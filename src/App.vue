<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    appHeader: Header,
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
