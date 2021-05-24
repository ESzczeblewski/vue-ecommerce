<template>
  <div class="menJeans">
    <app-products-sorting class="menJeans__sorting"></app-products-sorting>
    <app-products :sex="'m'" :category="'Jeans'"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';

export default {
  name: 'menJeans',
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

.menJeans {
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
