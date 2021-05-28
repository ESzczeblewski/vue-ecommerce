<template>
  <div class="home view-default">
    <div class="home__inputs">
      <app-search-products class="home__inputs__search"></app-search-products>
      <app-products-sorting></app-products-sorting>
    </div>
    <app-products :sex="'default'" :category="'default'"></app-products>
  </div>
</template>

<script>
import ProductsGrid from '../components/ProductsGrid.vue';
import ProductsSorting from '../components/ProductsSorting.vue';
import SearchProducts from '../components/SearchProducts.vue';

export default {
  name: 'Home',
  components: {
    appProducts: ProductsGrid,
    appProductsSorting: ProductsSorting,
    appSearchProducts: SearchProducts,
  },
  beforeDestroy() {
    this.$store.dispatch('RESET_SORTING');
    this.$store.dispatch('RESET_SEARCH');
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.home {
  &__inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    margin-bottom: 2em;

    @media screen and (min-width: 500px) {
      flex-direction: row;
    }

    &__search {
      margin-bottom: 2em;

      @media screen and (min-width: 500px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
