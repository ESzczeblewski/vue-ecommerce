<template>
  <div class="menJackets">
    <app-products-sorting class="menJackets__sorting"></app-products-sorting>
    <app-products :sex="'m'" :category="'Jackets'"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';

export default {
  name: 'menJackets',
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

.menJackets {
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
