<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Search products"
      v-model="search"
      @keypress.enter.prevent="SET_SEARCH(search)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchProducts',
  data() {
    return {
      search: ''.toLowerCase(),
    };
  },
  methods: {
    ...mapActions(['SET_SEARCH']),
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__input {
    background-color: #f9f9f9;
    padding: 0.4em 0.8em;
    border: 2px solid #ccc;
  }
}
</style>
