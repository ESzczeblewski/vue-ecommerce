<template>
  <div class="home">
    <app-products-sorting class="home__sorting"></app-products-sorting>
    <app-products></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';

export default {
  name: 'Home',
  components: {
    appProducts: ProductsGrid,
    appProductsSorting: ProductsSorting,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(255, 255, 255);
  padding-top: 2em;
  display: flex;
  flex-direction: column;

  &__sorting {
    margin-left: auto;
    margin-bottom: 1em;
    padding-right: 1.5em;
  }
}
</style>
