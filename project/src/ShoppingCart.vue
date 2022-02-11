<template>
  <button class="btn btn-primary">Cart ({{ inCart.length }})</button>
</template>

<script>
export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
  },
};
</script>
