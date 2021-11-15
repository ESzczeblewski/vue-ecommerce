<template>
  <ul>
    <li>
      Set sorting
      <ul class="dropdown" aria-label="submenu">
        <li
          :class="sorting === 'default' ? 'active' : ''"
          @click="SET_SORTING('default')"
        >
          Default
        </li>
        <li
          :class="sorting === 'priceLowToHigh' ? 'active' : ''"
          @click="SET_SORTING('priceLowToHigh')"
        >
          Price low to high
        </li>
        <li
          :class="sorting === 'priceHighToLow' ? 'active' : ''"
          @click="SET_SORTING('priceHighToLow')"
        >
          Price high to low
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductsSorting',

  methods: {
    ...mapActions(['SET_SORTING']),
  },
  computed: {
    ...mapState(['sorting']),
  },
};
</script>

<style scoped lang="scss">
@import '../design';

ul {
  margin-top: 1em;
  background: #fff;
  list-style: none;
  margin: 0;
  padding-left: 0;
  z-index: 9;
}

li {
  color: $main-font-color;
  border: 1px solid #f0f0f0;
  display: block;
  float: left;
  padding: 0.35em 2em;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

li:hover,
li:focus-within {
  background: $nav-background;
  border-color: $nav-background;
  color: $main-font-color;
  cursor: pointer;
}

li:focus-within a {
  outline: none;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 0.4em;
  left: 0;
  /* display: none; */
}

ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover,
ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
  clear: both;
  width: 100%;
  border-top: none;
}

.active {
  background: $nav-background;
  border-color: $nav-background;
  color: $main-font-color;
}
</style>
