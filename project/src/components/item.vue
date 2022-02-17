<template>
  <div class="container">
    <div class="items">
      <img :src="img" alt="" class="img" />
      <h2 class="name">{{ name }}</h2>
      <h2 class="price">${{ price }}</h2>
      <span class="button-holder"><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    name: String,
    img: String,
    price: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img {
  width: 20%;
  border: 0.5rem solid rgb(156, 182, 219);
  border-radius: 1.25rem;
}
.items {
  width: 70vw;
  display: flex;
  justify-content: space-between;
}
.name,
.price {
  margin-top: 0;
  font-display: center;
}
</style>
