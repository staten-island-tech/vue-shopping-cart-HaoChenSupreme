import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        img: "https://th.bing.com/th/id/OIP.O-TD0lk2oZPlq6KcKB45gwAAAA?w=138&h=184&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 4,
        name: "Martial Peak",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.mUvjkiv2jZLeJKPjKKv92QAAAA?w=189&h=273&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 5,
        name: "Terror Infinity",
        price: 10,
        img: "https://th.bing.com/th/id/OIP.nfPJi1XQaJz6QiQlO8IZTQAAAA?w=180&h=247&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 6,
        name: "The Strongest System",
        price: 10,
        img: "https://www.bing.com/th?id=OIP.eQGm0Oiwv2ytWD6q8MmcPAAAAA&w=120&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        id: 7,
        name: "Hail The King",
        price: 8,
        img: "https://th.bing.com/th/id/OIP.V07Fr76JsEOMiLpK4e7zXgAAAA?w=148&h=197&c=7&r=0&o=5&pid=1.7",
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
    inCart: [],
  },
  getters: {
    novels: (state) => state.novels,
    inCart: (state) => state.inCart,
  },
  mutations: {
    // TODO: Add mutations
  },
  actions: {
    // TODO: Add actions
  },
});
