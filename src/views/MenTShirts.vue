<template>
  <div class="menTShirts view-default">
    <app-category :category="category"></app-category>
    <app-products-sorting class="view-default__sorting"></app-products-sorting>
    <app-products :sex="'m'" :category="category"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';
import Category from '../components/Category.vue';

export default {
  name: 'menTShirts',
  components: {
    appProducts: ProductsGrid,
    appProductsSorting: ProductsSorting,
    appCategory: Category,
  },
  data() {
    return {
      category: 'T-Shirts',
    };
  },
  beforeDestroy() {
    this.$store.dispatch('RESET_SORTING');
  },
};
</script>

<style lang="scss" scoped>
@import '../design';
</style>
