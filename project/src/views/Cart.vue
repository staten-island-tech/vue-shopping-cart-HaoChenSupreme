<template>
  <div class="Cart">
    <item
      class="item"
      v-for="(cart, index) in carts"
      :key="index"
      :name="cart.name"
      :price="cart.price"
      :img="cart.img"
    >
      <Button @button-click="removeCard(index)">Remove</Button>
    </item>
    <Button v-if="this.carts.length > 0" @button-click="removeAll()"
      >Remove All</Button
    >

    <h2>Price: ${{ sum }}</h2>
  </div>
</template>

<script>
import item from "../components/item.vue";
import Button from "../components/button.vue";
export default {
  components: {
    item,
    Button,
  },
  computed: {
    carts() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.total;
    },
    sum() {
      return this.$store.state.cart.reduce(
        (total, vanguard) => total + vanguard.price,
        0
      );
    },
  },
  methods: {
    removeCard(index, price) {
      this.$store.commit("remove", index, price);
    },
    removeAll() {
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style scoped>

.container.item {
margin:2rem; 
border: 0.625rem solid rgb(174, 192, 219);
border-radius: 1.25rem;
padding-top: 1rem;
padding-bottom: 1rem;
padding-left: 1rem;
}

</style>