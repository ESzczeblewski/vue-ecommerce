/* eslint-disable comma-dangle */
<template>
  <div class="products-grid">
    <div class="products-grid__products">
      <app-product
        v-for="product in orderedProducts"
        :key="product.id"
        :product="product"
      ></app-product>
    </div>
    <div class="products-grid__pagination">
      <vue-paginate-al
        :totalPage="totalPages"
        customActiveBGColor="rgb(10, 152, 120)"
        :nextText="'Next'"
        :prevText="'Prev'"
        :currentPage="1"
        @btnClick="handleClick"
      ></vue-paginate-al>
    </div>
  </div>
</template>

<script>
import VuePaginateAl from 'vue-paginate-al';
import Product from './Product.vue';
import { storeProducts } from '../allProducts';

export default {
  name: 'ProductsGrid',
  data() {
    return {
      products: storeProducts,
      productsOrder: 'price',
      totalPages: Math.ceil(storeProducts.length / 10),
      start: 0,
      end: 10,
    };
  },
  props: {
    sex: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick(t) {
      this.start = t * 10 - 10;
      this.end = t * 10;
      window.scrollTo(0, 0);
    },
  },
  computed: {
    orderedProducts() {
      const originalProd = [...this.products]
        .slice(this.start, this.end)
        .filter((prod) => {
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
    VuePaginateAl,
  },
};
</script>

<style lang="scss" scoped>
.products-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  &__products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
}
</style>
