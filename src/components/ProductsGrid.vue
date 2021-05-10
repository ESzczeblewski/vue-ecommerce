<template>
  <div>
    Elo
    <app-product
      v-for="product in products"
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
    };
  },
  components: {
    appProduct: Product,
  },
};
</script>
