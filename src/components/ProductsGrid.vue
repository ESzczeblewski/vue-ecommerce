/* eslint-disable comma-dangle */
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
import { storeProducts } from '../allProducts';

export default {
  name: 'ProductsGrid',
  data() {
    return {
      products: storeProducts,
      productsOrder: 'price',
    };
  },
  props: {
    sex: {
      type: String,
      required: true,
      default: 'default',
    },
    category: {
      type: String,
      required: true,
      default: 'default',
    },
  },
  computed: {
    orderedProducts() {
      const originalProd = [...this.products].filter((prod) => {
        if (this.sex === 'default' && this.category === 'default') {
          return prod;
        }

        if (prod.sex === this.sex && prod.category === this.category) {
          return prod;
        }

        return false;
      });

      if (this.$store.getters.sorting === 'priceHighToLow') {
        return originalProd.sort((a, b) => b.price - a.price);
      }
      if (this.$store.getters.sorting === 'priceLowToHigh') {
        return originalProd.sort((a, b) => a.price - b.price);
      }
      return originalProd;
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
