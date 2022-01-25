<template>
  <div id="app">
     <div class="card">
      <img class="card-img" src=${novel.img} :alt="novel.name">
      <div class="card-body" v-for="novel in novels" :key="novel.name">
        <h4 class="card-title">{{ novel.name }}</h4>
        <div class="card-text">${{ novel.price }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
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
        name: "The Lgendary Mechanic",
        price: 10, 
        img: "https://th.bing.com/th/id/OIP.A10FqatQ448m2M-3HBoFsQHaKd?w=204&h=289&c=7&r=0&o=5&pid=1.7",
      },
    ],
  };
},
};



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card{
  display: flex;
}

</style>
