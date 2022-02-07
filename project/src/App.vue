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
  </div>

  
</template>

<script>
import Item from "./components/item.vue"
export default {
  name: 'app',
  components: {Item},
  data(){
    return { 
      novels: [
      {
        id: 1,
        name: "Ze Tian Ji",
        price: 15,
        img: "https://bookcover.yuewen.com/qdbimg/349573/3347595/180",
      },
      {
        id: 2,
        name: "Reverend Insanity",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.9su0swVbRbVFzohIqf7KdQAAAA?w=204&h=274&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 3,
        name: "A Will Eternal",
        price: 10,
        img:"https://th.bing.com/th/id/OIP.O-TD0lk2oZPlq6KcKB45gwAAAA?w=138&h=184&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 4,
        name: "Martial Peak",
        price: 10,
        img:"https://th.bing.com/th/id/OIP.mUvjkiv2jZLeJKPjKKv92QAAAA?w=189&h=273&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 5,
        name: "Terror Infinity",
        price: 10,
        img:"https://th.bing.com/th/id/OIP.nfPJi1XQaJz6QiQlO8IZTQAAAA?w=180&h=247&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 6,
        name: "The Strongest System",
        price: 10,
        img:"https://www.bing.com/th?id=OIP.eQGm0Oiwv2ytWD6q8MmcPAAAAA&w=120&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        id: 7, 
        name: "Hail The King",
        price: 8,
        img:"https://th.bing.com/th/id/OIP.V07Fr76JsEOMiLpK4e7zXgAAAA?w=148&h=197&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 8,
        name: "A Valiant Life",
        price: 8,
        img: "https://th.bing.com/th/id/OIP.2u4fumvPJcIOOIec6Dmd3QAAAA?pid=ImgDet&rs=1",
      },
      {
        id: 9,
        name: "The Legendary Mechanic",
        price: 10, 
        img: "https://th.bing.com/th/id/OIP.A10FqatQ448m2M-3HBoFsQHaKd?w=204&h=289&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 10,
        name: " Manual",
        price: 11, 
        img: "https://th.bing.com/th/id/OIP.uf0N5YQvwf1QkMChI1JZ-QHaL2?w=197&h=316&c=7&r=0&o=5&pid=1.7",
      },
    ],
  };
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
