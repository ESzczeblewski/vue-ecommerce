<template>
  <div class="cart view-default">
    <app-category :category="category"></app-category>
    <div class="cart__empty" v-if="!this.cartItems">
      Your cart is currently empty
    </div>
    <div class="cart__products" v-if="this.cartItemsList.length">
      <div v-for="product in this.cartItemsList" :key="product.id">
        <button class="cart__products__delete">X</button>
        <div>
          Product: <span>{{ product.title }}</span>
        </div>
        <div>
          Price: <span>{{ product.price }}</span>
        </div>
      </div>
    </div>
    <div class="cart__total" v-if="this.cartItemsList.length">
      Total: <span>{{ this.cartValue }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Category from '../components/Category.vue';

export default {
  name: 'menJackets',
  components: {
    appCategory: Category,
  },
  data() {
    return {
      category: 'Cart',
    };
  },
  computed: {
    ...mapGetters(['cartValue', 'cartItems', 'cartItemsList']),
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.cart {
  &__empty {
    background-color: rgb(61, 156, 210);
    color: rgb(255, 255, 255);
    line-height: 1.4rem;
    padding: 1em 2.5em;
    margin: 2em;
    display: flex;
    align-items: center;
  }

  &__products {
    @include content-width;
    margin-top: 2em;
    margin-bottom: 0;
    border: 2px solid rgba(0, 0, 0, 0.1);

    &__delete {
      font-weight: $primary-bold;
      color: rgba(0, 0, 0, 0.4);
      background-color: transparent;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      padding: 0.5em 0.8em;
      margin-bottom: 1em;
      cursor: pointer;

      &:hover {
        color: rgb(255, 0, 0);
        border-color: rgb(255, 0, 0);
      }
    }

    div {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1em;

      div {
        display: flex;
        justify-content: space-between;
        text-align: right;
      }
    }
  }

  &__total {
    @include content-width;
    border: 3px solid rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    text-align: right;
  }
}
</style>
