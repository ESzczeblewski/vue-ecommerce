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
  padding-bottom: 1em;
  margin-bottom: 2em;
  margin-left: 2em;
  margin-right: 2em;
  border-bottom: 2px solid #eeeeee;
  &__info {
    color: $main-font-color;
    font-weight: $primary-normal;
    @include fluid-font(7vw, 1.7rem, 2.5rem, 35px);
  }
}
</style>
