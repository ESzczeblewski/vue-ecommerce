<template>
  <div
    @click="toggle()"
    @mouseover="toggle()"
    @mouseleave="toggle()"
    v-on-clickaway="away"
  >
    <slot name="toggler">
      <button></button>
    </slot>
    <slot />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'AppDropdown',

  mixins: [clickaway],

  provide() {
    return {
      sharedState: this.sharedState,
    };
  },

  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },

  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },

    away() {
      this.sharedState.active = false;
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
}
</style>
