<template>
  <div class="category">
    <h2 class="category__info">{{ category }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: String,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.category {
  @include content-width;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 1em;
  border-bottom: 2px solid #eeeeee;
  &__info {
    color: $main-font-color;
    font-weight: $primary-normal;
    @include fluid-font(7vw, 1.7rem, 2.5rem, 35px);
  }
}
</style>
