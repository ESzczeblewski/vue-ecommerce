<template>
  <div>
    <select name="sort" id="" :value="sorting">
      <option @click="SET_SORTING('default')" value="default">
        Default sorting
      </option>
      <option @click="SET_SORTING('priceLowToHigh')" value="priceLowToHigh">
        Price low to high
      </option>
      <option @click="SET_SORTING('priceHighToLow')" value="priceHighToLow">
        Price high to low
      </option>
    </select>
  </div>
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

<style lang="scss">
select {
  font-size: 0.9rem;
}
</style>
