<template>
  <div class="home">
    <app-products></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'Home',
  components: {
    appProducts: ProductsGrid,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(255, 255, 255);
  padding-top: 2em;
}
</style>
