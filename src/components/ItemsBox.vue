<template>
  <div class="main-items-wrapper">
    <ItemCard
      v-for="item in itemsList"
      :key="`itemsList-`+item.id"
      :item="item"
      btnTitle="Add to cart"
      :state="$store.state"
      :clickFunction="addToCart"
      sorce="itemsBox"
    />
  </div>
</template>
<script>
import ItemCard from "./ItemCard.vue";
export default {
  props: {},
  computed: {
    itemsList() {
      return this.$store.state.itemsList;
    },
  },
  methods: {
    addToCart(item) {
      item.onCart = true;
      const isOnCart = this.$store.state.shoppingCart.some(
        (obj) => obj.id === item.id
      );
      if (!isOnCart) {
        this.$store.state.shoppingCart.push(item);
      } else {
        this.$store.commit('allreadyInCart', item)
      }
    },
  },
  components: {
    ItemCard,
  },
};
</script>

<style>
.main-items-wrapper {
  border: 1px black solid;
  padding: 1rem;
  margin: 1% 2%;
  border-radius: 25px;
}
</style>
