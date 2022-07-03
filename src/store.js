import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shoppingCartTotalAmount: 0,
    shoppingCart: [],
    itemsList: [
      {
        id: 1,
        title: "tara milk",
        description: "low fat milk",
        price: 3,
        amount: 1,
        onCart: false,
      },
      {
        id: 2,
        title: "tnova milk",
        description: "high fat milk",
        price: 5.5,
        amount: 1,
        onCart: false,
      },
      {
        id: 3,
        title: "homos",
        description: "homos",
        price: 13.5,
        amount: 1,
        onCart: false,
      },
    ],
  },
  methods: {},
  mutations: {
    // allreadyInCart(state, item) {
    //     // here will be the implementation 
    //     // alon said there is no need to implement
    // },
    whenFocusLeaves(state, item, newValue = 6) {
        const indexOfItem = state.shoppingCart.findIndex((obj) => {
            return item.id == obj.id;
        });
        state.shoppingCart[indexOfItem].amount = newValue;
        console.log(state.shoppingCart[indexOfItem].amount)
    }
  },
});
export default store;
