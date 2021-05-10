<template>
  <div>
    <div>Home view</div>
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
</style>
