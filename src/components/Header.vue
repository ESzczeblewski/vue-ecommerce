<template>
  <transition name="navbarSlideDown">
    <nav class="navbar" v-if="showNav">
      <div class="container">
        <div class="container__row">
          <router-link class="navbar__brand" :to="{ name: 'home' }">
            <h1>Shopistic Lite</h1>
          </router-link>
          <button
            class="hamburger"
            :class="{ 'hamburger--active': hamburgerActive }"
            @click="openMenu()"
          >
            <span class="hamburger__box">
              <span class="hamburger__inner"></span>
            </span>
          </button>
          <div class="navbar__dropdowns">
            <app-dropdown v-if="navOpen">
              Men
              <span class="caret"></span>
              <ul class="dropdown" aria-label="submenu">
                <router-link tag="li" :to="{ name: 'men-shoes' }"
                  >Shoes</router-link
                >
                <router-link tag="li" :to="{ name: 'men-shirts' }"
                  >Shirts</router-link
                >

                <router-link tag="li" :to="{ name: 'men-jackets' }"
                  >Jackets</router-link
                >

                <router-link tag="li" :to="{ name: 'men-jeans' }"
                  >Jeans</router-link
                >

                <router-link tag="li" :to="{ name: 'men-tshirts' }"
                  >T-Shirts</router-link
                >
              </ul>
            </app-dropdown>
            <app-dropdown v-if="navOpen">
              Women
              <span class="caret"></span>
              <ul class="dropdown" aria-label="submenu">
                <router-link tag="li" :to="{ name: 'women-dresses' }"
                  >Dresses</router-link
                >
                <router-link tag="li" :to="{ name: 'women-jeans' }"
                  >Jeans</router-link
                >
                <router-link tag="li" :to="{ name: 'women-jackets' }"
                  >Jackets</router-link
                >
              </ul>
            </app-dropdown>
          </div>
        </div>
        <div class="container__row">
          <div class="login__cart">
            <router-link :to="{ name: 'login' }">
              <button
                v-if="!Object.keys(this.$store.state.userProfile).length"
                class="btn login__cart__logbtn"
              >
                Log in
              </button>
              <button v-else @click="logout()" class="btn login__cart__logbtn">
                Log out
              </button>
            </router-link>
            <router-link :to="{ name: 'cart' }">
              <button class="btn login__cart__cartbtn">
                ${{ this.cartValue }} ({{ this.cartItems }})
                <img src="../assets/icons/shopping-cart.png" alt="" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import AppDropdown from './AppDropdown.vue';

export default {
  name: 'Header',

  data() {
    return {
      hamburgerActive: false,
      navOpen: false,
      showNav: false,
    };
  },

  methods: {
    openMenu() {
      this.hamburgerActive = !this.hamburgerActive;
      this.navOpen = !this.navOpen;
    },

    handleMenuView() {
      if (this.hamburgerActive) {
        this.hamburgerActive = !this.hamburgerActive;
      }
      this.navOpen = window.innerWidth >= 550;
    },

    logout() {
      this.$store.dispatch('LOGOUT');
    },
  },

  computed: {
    ...mapGetters(['cartValue', 'cartItems']),
  },

  components: {
    AppDropdown,
  },

  created() {
    this.handleMenuView();
    window.addEventListener('resize', this.handleMenuView);
  },

  mounted() {
    this.$nextTick(() => {
      this.showNav = true;
    });
  },
};
</script>

<style scoped lang="scss">
@import '../design/';

.navbar {
  & .container {
    display: flex;
    flex-direction: column;
    padding-top: 2em;
    padding-right: 1em;
    padding-left: 1em;
    max-width: 1440px;
    margin: auto;

    @media screen and (min-width: 1000px) {
      @include content-width;
      flex-direction: row;
      justify-content: space-between;
      padding-right: 2em;
      padding-left: 2em;
    }

    &__row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      margin-bottom: 1.5em;

      @media screen and (min-width: 600px) {
        flex-wrap: nowrap;
        justify-content: flex-start;
      }
    }

    > :nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__brand {
    @include fluid-font(7vw, 1rem, 1.8rem, 35px);

    color: $main-font-color;

    @media screen and (min-width: 600px) {
      margin-right: 2em;
    }
  }
}

.hamburger {
  padding-top: 0.5em;
  padding-right: 0;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform 0.3s 0.1s ease-in-out, visibility 0s 0.4s;

  @media screen and (min-width: 550px) {
    display: none;
  }

  &__box {
    width: 2.5em;
    height: 2em;
    display: inline-block;
    position: relative;
  }

  &__inner {
    @include hamburger-line;

    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.1s ease-in-out;
  }

  &__inner::before,
  &__inner::after {
    @include hamburger-line;

    content: '';
    left: 0;
    transition: transform 0.2s ease-in-out;
  }

  &__inner::before {
    top: -10px;
  }

  &__inner::after {
    top: 10px;
  }
  &--active .hamburger__inner {
    background-color: transparent;
  }

  &--active .hamburger__inner:before {
    transform: translateY(10px) rotate(45deg);
  }

  &--active .hamburger__inner:after {
    transform: translateY(-10px) rotate(-45deg);
  }
}

.navbar__dropdowns {
  display: flex;
  margin-top: 1em;

  @media screen and (min-width: 550px) {
    margin-top: 0;
  }
}

.login__cart {
  display: flex;
  align-items: center;

  &__logbtn {
    color: $nav-btn-default;
    margin-right: 1em;
    padding-right: 1em;
    padding-bottom: 0;
    border-right: 1px solid #b3b3b3;
  }

  &__logbtn:hover,
  &__logbtn:focus {
    color: #a08240;
    text-decoration: underline;
  }

  &__cartbtn {
    color: $nav-btn-default;
    padding-bottom: 0;
    img {
      width: 1.8em;
      margin-left: 0.5em;
    }
  }
}

.navbarSlideDown-enter-active,
.navbarSlideDown-leave-active {
  transition: transform 0.5s 0.5s, opacity 1s 0.5s;
}
.navbarSlideDown-enter,
.navbarSlideDown-leave-to {
  transform: translateY(-5em);
  opacity: 0;
}
</style>
