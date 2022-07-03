<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <ItemsBox />
        </b-col>
        <b-col>
          <ShoppingCart />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ItemsBox from "./components/ItemsBox.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "App",
  components: {
    ItemsBox,
    ShoppingCart
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
  margin-top: 60px;
}
</style>
