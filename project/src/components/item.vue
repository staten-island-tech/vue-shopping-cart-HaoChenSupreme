<template>
 <div id="app">
    <div class="display">
      <div class="card">
      <img class="card-img" :src="img">
      <h2 class="card-body">{{ name }}</h2>
      <h3 class="card-price">${{ price }}</h3>
      <button class="btn-cart">Add To Cart</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['id', 'name', 'img', 'price'],
};
</script>
