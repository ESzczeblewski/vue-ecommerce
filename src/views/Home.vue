<template>
  <div class="home view-default">
    <app-products-sorting class="view-default__sorting"></app-products-sorting>
    <app-products :sex="'default'" :category="'default'"></app-products>
    <app-footer></app-footer>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    appProducts: ProductsGrid,
    appProductsSorting: ProductsSorting,
    appFooter: Footer,
  },
  beforeDestroy() {
    this.$store.dispatch('RESET_SORTING');
  },
};
</script>

<style lang="scss" scoped>
@import '../design';
</style>
