<template>
  <div class="womenJackets view-default">
    <app-products-sorting class="view-default__sorting"></app-products-sorting>
    <app-products :sex="'w'" :category="'Jackets'"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';

export default {
  name: 'womenJackets',
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
</style>
