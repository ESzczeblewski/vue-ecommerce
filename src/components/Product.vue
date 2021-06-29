<template>
  <div class="product" @mouseenter="handleHover()" @mouseleave="handleHover()">
    <img :src="showBtn ? product.imgHover : product.img" alt="Product image" />
    <transition name="btn-slideUp">
      <button v-show="showBtn" class="btn">
        <img
          @click="ADD_TO_CART(product)"
          src="../assets/icons/add-to-cart.png"
          alt=""
        />
      </button>
    </transition>
    <div class="wrapper">
      <div class="product__category">{{ product.category }}</div>
      <div class="product__title">{{ product.title }}</div>
      <div class="product__price">${{ displayPrice }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',
  props: ['product'],
  data() {
    return {
      showBtn: false,
    };
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),

    handleHover() {
      this.showBtn = !this.showBtn;
    },
  },
  computed: {
    displayPrice() {
      return parseFloat(this.product.price).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
@import '../design/';

.product {
  position: relative;
  width: 90%;
  max-width: 21em;
  margin-right: 1em;
  margin-bottom: 2em;
  margin-left: 1em;
  display: flex;
  flex-direction: column;

  &:hover {
    .wrapper {
      border-color: rgb(204, 204, 204);
      transition: border-color 0.1s ease 0.1s;
    }
    img {
      transform: scale(1);
    }
  }

  img,
  div {
    margin-bottom: 0.5em;
  }

  img {
    transform: scale(0.95);
    transition: transform 0.2s ease;
    width: 100%;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    cursor: pointer;
  }

  button {
    position: absolute;
    bottom: 9em;
    right: 1em;
    border-radius: 1em;
    background-color: rgb(255, 255, 255);
    cursor: pointer;

    &:hover {
      background-color: rgb(10, 152, 120);
    }

    img {
      width: 3em;
    }
  }

  .wrapper {
    padding-top: 0.5em;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    transition: border-color 0.1s ease;
  }

  &__category {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: rgb(204, 204, 204);
    width: 95%;
    margin: auto;
  }

  &__title {
    font-size: 1.1rem;
    color: $main-font-color;
    width: 95%;
    margin: auto;
    cursor: pointer;
  }

  &__price {
    font-size: 1.4rem;
    color: rgb(10, 152, 120);
    width: 95%;
    margin: auto;
  }

  .btn-slideUp-enter-active,
  .btn-slideUp-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .btn-slideUp-enter,
  .btn-slideUp-leave-to {
    opacity: 0;
    transform: translateY(1em);
  }
}
</style>
