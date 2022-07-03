<template>
  <div class="main-cart-wrapper">
    <div class="total-amount-wrapper">
        cart total amount: {{totalPrice}}
    </div>
    <ItemCard
      v-for="item in cartItems"
      :key="`shoppingCart-`+item.id"
      :item="item"
      btnTitle="Remove from cart"
      :clickFunction="removeFromCart"
      sorce="shoppingCart"
    />
  </div>
</template>
<script>
import ItemCard from "./ItemCard.vue";
export default {
  computed: {
    totalPrice(){
        this.setTotalToZero()
        this.$store.state.shoppingCart.map(({ amount, price }) => (this.$store.state.shoppingCartTotalAmount += amount * price).toFixed(2))
        return this.$store.state.shoppingCartTotalAmount;
    },
    cartItems() {
      return this.$store.state.shoppingCart.filter(item => item.onCart);
    },
  },
  components: {
    ItemCard,
  },
  methods: {
      setTotalToZero(){
        this.$store.state.shoppingCartTotalAmount = 0;
      },
    removeFromCart(item) {
      const indexOfItem = this.$store.state.itemsList.findIndex((obj) => {
        return item.id == obj.id;
      });
      this.$store.state.itemsList[indexOfItem].onCart = false;
      this.$store.state.shoppingCart.splice(indexOfItem, 1);
      this.totalPrice;
    },
  },
};
</script>
<style>
.main-cart-wrapper {
  padding: 1rem;
  border: 1px black solid;
  border-radius: 25px;
  min-height: 20rem;
}
.total-amount-wrapper{
    margin-bottom: 1rem;;
}
</style>
