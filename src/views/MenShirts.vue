<template>
  <div class="menShirts">
    <app-products-sorting class="menShirts__sorting"></app-products-sorting>
    <app-products :sex="'m'" :category="'Shirts'"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';

export default {
  name: 'menShirts',
  components: {
    appProducts: ProductsGrid,
    appProductsSorting: ProductsSorting,
  },
  beforeDestroy() {
    this.$store.dispatch('RESET_SORTING');
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.menShirts {
  @include content-width;

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
