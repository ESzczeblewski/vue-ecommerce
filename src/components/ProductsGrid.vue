/* eslint-disable comma-dangle */
<template>
  <div class="products-grid">
    <div class="products-grid__products">
      <app-product
        v-for="product in productsPerPage"
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
      start: 0,
      end: 8,
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
      this.start = t * 8 - 8;
      this.end = t * 8;
      window.scrollTo(0, 0);
    },
  },
  computed: {
    orderedProducts() {
      const displayedProducts = [...this.products]
        .filter((prod) => {
          if (this.sex === 'default' && this.category === 'default') {
            return prod;
          }

          if (prod.sex === this.sex && prod.category === this.category) {
            return prod;
          }

          return false;
        })
        .filter((prod) => {
          return prod.title
            .toLowerCase()
            .includes(this.$store.state.search.toLowerCase());
        });

      if (this.$store.getters.sorting === 'priceHighToLow') {
        return displayedProducts.sort((a, b) => b.price - a.price);
      }
      if (this.$store.getters.sorting === 'priceLowToHigh') {
        return displayedProducts.sort((a, b) => a.price - b.price);
      }
      return displayedProducts;
    },
    productsPerPage() {
      return this.orderedProducts.slice(this.start, this.end);
    },
    totalPages() {
      return Math.ceil(this.orderedProducts.length / 8);
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
