<template>
    <div>
      <NavBar />
      <div id="cart-container">
        <button class="search-gender">CART</button>
        <button class="search-gender">FAVORITES</button>
      </div>
      <div id="cart-image">
        <template v-if="!items">
          <div style="margin-left: 150px; margin-bottom: 40px">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
              <!-- SVG paths -->
            </svg>
          </div>
          <p>YOUR SHOPPING BASKET IS EMPTY</p>
        </template>
        <template v-else>
          <div style="display: flex; flex-direction: row">
            <OneItem v-for="(item, index) in items" :key="index" :name="item.name" :price="item.price" :image="item.image" :showAdd="false" />
            <p>{{ console.log(currentUser) }}</p>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "../NavBar.vue";
  import axios from 'axios';
  import OneItem from "./OneItem.vue";
  
  export default {
    name: 'Cart',
    components: {
      NavBar,
      OneItem
    },
    data() {
      return {
        currentUser: JSON.parse(localStorage.getItem("currentUser")),
        items: []
      };
    },
    async created() {
      try {
        const result = await axios.get(`http://localhost:3001/items/cartItems/${this.currentUser.id}`);
        this.items = result.data;
      } catch (err) {
        console.log(err);
      }
    },
  };
  </script>
  
  <style></style>
  