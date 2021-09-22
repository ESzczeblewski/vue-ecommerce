<template>
  <div class="cart view-default">
    <app-category :category="category"></app-category>
    <div class="cart__empty" v-if="!this.cartItems">
      Your cart is currently empty
    </div>
    <table v-if="this.cartItemsList.length">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody class="content">
        <tr v-for="order in this.cartItemsList" :key="order.id">
          <td>
            <button
              class="content__delete content__text-pos"
              @click="REMOVE_FROM_CART(order)"
            >
              X
            </button>
          </td>
          <td class="hide-img">
            <img class="content__product-img" :src="order.order.img" alt="" />
          </td>
          <td>
            <span class="content__hide-category">Product: </span
            ><span class="content__text-pos content__prod-name">{{
              order.order.title
            }}</span>
          </td>
          <td>
            <span class="content__hide-category">Quantity: </span>
            <div class="content__text-pos">
              <span>{{ order.quantity }}</span>
              <button
                class="content__btn content__btn--green"
                @click="ADD_TO_CART(order.order)"
              >
                +
              </button>
              <button
                class="content__btn content__btn--red"
                @click="REMOVE_ONE(order.order)"
              >
                -
              </button>
            </div>
          </td>
          <td>
            <span class="content__hide-category">Price: </span
            ><span class="content__text-pos">{{ order.order.value }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cart__total" v-if="this.cartItemsList.length">
      Total: <span>{{ this.cartValue }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  methods: {
    ...mapActions(['ADD_TO_CART', 'REMOVE_FROM_CART', 'REMOVE_ONE']),
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

table {
  @include content-width;
  margin-top: 1em;
  margin-bottom: 0;
  table-layout: fixed;
  empty-cells: show;
  border-collapse: collapse;
  border: 3px solid rgba(0, 0, 0, 0.1);

  thead {
    display: none;
    @media (min-width: 768px) {
      display: table-header-group;
      text-align: left;
    }

    th {
      padding: 1em 1em;
    }
  }

  thead th:nth-child(1) {
    width: 10%;
  }

  thead th:nth-child(2) {
    width: 15%;
  }

  thead th:nth-child(3) {
    width: 45%;
  }

  thead th:nth-child(4) {
    width: 15%;
  }
  thead th:nth-child(5) {
    width: 15%;
  }

  .content {
    tr:nth-child(2n) {
      background-color: rgba(0, 0, 0, 0.025);
    }

    .hide-img {
      display: none;
      @media (min-width: 768px) {
        display: table-cell;
      }
    }

    td {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 1em 0.5em;
      border: 1px solid rgba(0, 0, 0, 0.05);

      @media (min-width: 768px) {
        display: table-cell;
        text-align: left;
        padding: 0.5em 1em;
        border-left: none;
        border-right: none;
      }
    }

    &__delete {
      font-weight: $primary-bold;
      color: rgba(0, 0, 0, 0.4);
      background-color: transparent;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      padding: 0.5em 0.8em;
      cursor: pointer;

      &:hover {
        color: rgb(255, 0, 0);
        border-color: rgb(255, 0, 0);
      }
    }

    &__prod-name {
      color: rgb(160, 130, 64);
    }

    &__product-img {
      display: none;
      @media (min-width: 768px) {
        display: block;
        position: relative;
        max-width: 4em;
      }
    }

    &__text-pos {
      text-align: right;
      @media (min-width: 768px) {
        @include vertical-center;
        text-align: left;
      }
    }

    &__hide-category {
      margin-right: 0.2em;
      @media (min-width: 768px) {
        display: none;
      }
    }

    &__btn {
      font-weight: $primary-bold;
      font-size: 1.2rem;
      background-color: transparent;
      border: none;
      padding: 0 0.5em;
      cursor: pointer;

      &:hover {
        transform: scale(1.3);
      }

      &--green {
        color: rgb(10, 152, 120);
      }

      &--red {
        color: rgb(255, 0, 0);
      }
    }
  }
}
</style>
