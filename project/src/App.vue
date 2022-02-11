<template>
  <div id="app">
    <h1 class="header">Novels for Sale</h1>

   <div class="display">
      <Item
        v-for="novel in novels"
        :key="novel.id"
        :id="novel.id"
        :name="novel.name"
        :img="novel.img"
        :price="novel.price" />
    </div>
    <div class="col-md-3">
        <ShoppingCart />
    </div>
  </div>

  
</template>

<script>
import Item from "./components/item.vue";
import ShoppingCart from "./ShoppingCart.vue";
export default {
  name: 'app',
  components: {Item},
  computed: {
    novels() { return this.$store.getters.novels; },
    inCart() { return this.$store.getters.inCart; },
  },
  };



</script>

<style>
#app, html{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0rem;
  margin: 0rem;
  box-sizing: border-box;
  font-size: 62.5%;
  color: #2c3e50;
  background-color: rgb(250, 223, 223);
}

.display{
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 flex-wrap: wrap;
 margin-left: 5rem;
 margin-right: 5rem;
}
:root{
  --h1: 9.594rem;
  --h2: 3.063rem;
  --h3: 2.375rem;
  --h4: 1.25rem;
}

.header{
  margin: 1rem;
}

.card-price, .card-body{
  margin: 0;
  padding: 0;
}

h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

.card{
  width: 35vh;
  height: 50vh;
  border: 0.5rem solid;
  border-color: rgb(243, 122, 122);
  background-color: rgb(165, 216, 250);
  border-radius: 1rem;
  padding-top: 3rem;
  margin: 1rem;
}

.card-img{
  width: 26vh;
  height: 39vh;
  border: 0.5rem solid;
  border-color: rgb(204, 165, 248);
  border-radius: 1rem;
}

</style>
