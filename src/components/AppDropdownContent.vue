<template>
  <!-- <transition name="subMenuFade"> -->
  <div
    v-if="active"
    @mouseover="handleContentView()"
    @mouseleave="handleContentView()"
  >
    <slot />
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'AppDropdownContent',

  inject: ['sharedState'],

  methods: {
    handleContentView() {
      this.sharedState.active = !this.sharedState.active;
    },
  },

  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    position: absolute;
    background-color: #ffffff;
    padding: 2em;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }
}
</style>
