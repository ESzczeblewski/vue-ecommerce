<template>
  <ul class="dropdown-outer">
    <li>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppDropdown',

  props: ['name'],
};
</script>

<style lang="scss" scoped>
@import '../design';

.dropdown-outer {
  background: transparent;
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
  padding-left: 0;
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

.dropdown {
  background-color: #fff;
  border: 1px solid $nav-background;
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
  width: 100%;
  border-top: none;
  padding: 0.5em 0.5em;
  font-weight: $primary-bold;
}
</style>
