<template>
    <div class="large-one-item">
      <img :src="image" :alt="name" />
      <h2>{{ name }}</h2>
      <h2>{{ price }} TND</h2>
    <div>
    <AddToCart />
  </div>
      
    </div>
  </template>
  
  <script>
  import AddToCart from "../AddToCart/page.vue";
  export default {
    name: 'LargeOneItem',
    props: {
      components: {
    AddToCart
  },
      image: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  