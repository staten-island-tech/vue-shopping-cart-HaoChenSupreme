<template>
<div>
  <h1>Novels For Sale</h1>
  <div class="home">
    <Card
      v-for="(novel, index) in novels"
      :key="index"
      :name="novel.name"
      :img="novel.img"
      :price="novel.price"
      class="card"
      ><Button @button-click="addCard(novel)">ADD TO CART</Button></Card
    >
  </div>
</div>
</template>

<script>
import Card from "../components/card.vue";
import Button from "../components/button.vue";
export default {
  name: "Home",
  components: {
    Card,
    Button,
  },
  methods: {
    addCard(novel) {
      this.$store.commit("add", novel);
      novel.name, novel.img, novel.price;
    },
  },
  computed: {},
  data() {
    return {
      novels: [
      {
        name: "Ze Tian Ji",
        price: 15,
        img: "https://bookcover.yuewen.com/qdbimg/349573/3347595/180",
      },
      {
        name: "Reverend Insanity",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.9su0swVbRbVFzohIqf7KdQAAAA?w=204&h=274&c=7&r=0&o=5&pid=1.7",
      },
      {
        name: "A Will Eternal",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.O-TD0lk2oZPlq6KcKB45gwAAAA?w=138&h=184&c=7&r=0&o=5&pid=1.7",
      },
      {
        name: "Martial Peak",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.mUvjkiv2jZLeJKPjKKv92QAAAA?w=189&h=273&c=7&r=0&o=5&pid=1.7",
      },
      {
        name: "Terror Infinity",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.nfPJi1XQaJz6QiQlO8IZTQAAAA?w=180&h=247&c=7&r=0&o=5&pid=1.7",
      },
      {
        name: "The Strongest System",
        price: 10,
        img: "https://www.bing.com/th?id=OIP.eQGm0Oiwv2ytWD6q8MmcPAAAAA&w=120&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        name: "Hail The King",
        price: 8,
        img: "https://th.bing.com/th/id/OIP.V07Fr76JsEOMiLpK4e7zXgAAAA?w=148&h=197&c=7&r=0&o=5&pid=1.7",
      },
      {
        name: "A Valiant Life",
        price: 8,
        img: "https://th.bing.com/th/id/OIP.2u4fumvPJcIOOIec6Dmd3QAAAA?pid=ImgDet&rs=1",
      },
      {
        name: "The Legendary Mechanic",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.A10FqatQ448m2M-3HBoFsQHaKd?w=204&h=289&c=7&r=0&o=5&pid=1.7",
      },
    ],
    };
  },
};
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 2.25rem;
  background-color: antiquewhite;
}
.card {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-block-color: rgb(226, 191, 191);
}
</style>