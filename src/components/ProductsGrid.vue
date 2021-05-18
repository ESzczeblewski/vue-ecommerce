<template>
  <div class="productsGrid">
    <app-product
      v-for="product in orderedProducts"
      :key="product.id"
      :product="product"
    ></app-product>
  </div>
</template>

<script>
import Product from './Product.vue';
import { storeProducts } from '../storeProducts';

export default {
  name: 'ProductsGrid',
  data() {
    return {
      products: storeProducts,
      productsOrder: 'price',
    };
  },
  computed: {
    orderedProducts() {
      const originalProd = [...this.products];
      if (this.$store.getters.sorting === 'priceHighToLow') {
        return originalProd.sort((a, b) => b.price - a.price);
      }
      if (this.$store.getters.sorting === 'priceLowToHigh') {
        return originalProd.sort((a, b) => a.price - b.price);
      }
      return this.products;
    },
  },
  components: {
    appProduct: Product,
  },
};
</script>

<style lang="scss" scoped>
.productsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
</style>
