<template>
  <div>
    <img :src="product.img" alt="Product image" />
    <div>{{ product.category }}</div>
    <div>{{ product.tite }}</div>
    <span>{{ product.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
};
</script>

<style lang="scss">
img {
  width: 10em;
}
</style>
