<template>
  <div class="view-default">
    <app-category :category="category"></app-category>
    <h2>Avaliable soon...</h2>
  </div>
</template>

<script>
import Category from '../components/Category.vue';

export default {
  name: 'menJackets',
  components: {
    appCategory: Category,
  },
  data() {
    return {
      category: 'Checkout',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

h2 {
  @include fluid-font(7vw, 1rem, 1.5rem, 35px);
  color: $main-font-color;
  font-weight: $primary-normal;
  margin: auto;
  margin-top: 2em;
}
</style>
