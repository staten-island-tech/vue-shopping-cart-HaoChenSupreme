<template>
  <div class="card">
    <h2 class="item-name">{{ name }}</h2>
    <img :src="img" alt="" class="item-img" />
    <div class="add-to-cart">
      <h3 class="item-price">${{ price }}</h3>
      <span class="button-add"><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
    price: Number,
  },
  components: {},
};
</script>

<style scoped>
.card {
  border: 0.625rem solid rgb(174, 192, 219);
  width: 26rem;
  height: 28rem;
  border-radius: 1.25rem;
  background-color: aliceblue;
  margin-top: 0rem;
  margin-bottom: 0rem;
}
.item-img {
  width: 55%;
  border-radius: 1rem;
  border: 0.5rem solid;
  border-color: rgb(212, 171, 202);
}
.item-name,
.item-price {
  width: fit-content;
  margin: 0 auto;
}
.item-name {
  margin-top: 0.313rem;
  font-size: 2rem;
}
.item-price {
  margin-top: 0.625rem;
}
.add-to-cart {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0.625rem;
  margin-top: .625rem;
}
.button-add{
    border: .1rem solid;
    border-color: rgb(231, 121, 121); 
}


</style>