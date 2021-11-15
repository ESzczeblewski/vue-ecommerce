<template>
  <div class="prodDetails view-default">
    <div class="prodDetails__imgs">
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide
          v-for="(img, index) in [product.img, product.imgHover]"
          :key="index"
        >
          <img :src="img" alt="" />
        </swiper-slide>
      </swiper>
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide
          v-for="(img, index) in [product.img, product.imgHover]"
          :key="index"
        >
          <img :src="img" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="prodDetails__info">
      <h2>{{ product.title }}</h2>
      <p>${{ displayPrice }}</p>
      <button @click="ADD_TO_CART(order)">Add to cart</button>
      <ul>
        <li v-for="info in product.info" :key="info">{{ info }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { mapActions } from 'vuex';

export default {
  name: 'productDetails',

  props: ['product'],

  data() {
    return {
      dataPassed: '',
      swiperOptionTop: {
        loop: true,
        loopedSlides: 2, // looped slides should be the same
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 2, // looped slides should be the same
        spaceBetween: 5,
        centeredSlides: false,
        slidesPerView: 2,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      order: {
        id: this.product.id,
        price: this.product.price,
        title: this.product.title,
        value: this.product.price,
        img: this.product.img,
      },
    };
  },

  computed: {
    displayPrice() {
      return parseFloat(this.product.price).toFixed(2);
    },
  },

  methods: {
    ...mapActions(['ADD_TO_CART']),
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },

  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.prodDetails {
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  &__info {
    @include content-width;

    margin-top: 2em;
    margin-bottom: 2em;
    flex-basis: content;

    @media (min-width: 900px) {
      margin-left: 1em;
      margin-top: 8em;
      max-width: 20em;
    }

    > * {
      margin-bottom: 0.8em;
    }

    h2 {
      font-weight: $primary-bold;
      color: $main-font-color;
      font-size: 2.5rem;
    }

    p {
      font-weight: $primary-bold;
      color: rgb(10, 152, 120);
      font-size: 1.5rem;
    }

    button {
      font-weight: $primary-bold;
      color: rgb(255, 255, 255);
      background-color: rgb(10, 152, 120);
      border: 3px solid rgb(10, 152, 120);
      border-radius: 0.4em;
      padding: 1em;
      display: flex;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: rgb(10, 152, 120);
        background-color: rgb(255, 255, 255);
      }
    }

    ul {
      color: $main-font-color;
      list-style-type: disc;
      list-style-position: inside;

      li {
        margin-bottom: 0.3em;
      }
    }
  }

  &__imgs {
    @include content-width;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: content;
    margin-bottom: 0;
    margin-top: 1em;

    @media (min-width: 900px) {
      margin-right: 1em;
      max-width: 50%;
    }
  }

  .swiper {
    &.gallery-top {
      width: 100%;
      max-width: 30em;

      img {
        width: 100%;
      }

      @media (min-width: 900px) {
        width: 90%;
        max-width: 40em;
        margin-left: 2em;
      }
    }
    &.gallery-thumbs {
      width: 50%;
      max-width: 12em;

      @media (min-width: 900px) {
        margin-left: 2em;
      }
    }
    &.gallery-thumbs .swiper-slide {
      opacity: 0.4;
      img {
        width: 100%;
      }
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
}
</style>
