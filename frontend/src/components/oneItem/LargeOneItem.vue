<template>
    <div class="large-one-item">
      <img :src="image" :alt="name" />
      <h2>{{ name }}</h2>
      <h2>{{ price }} TND</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LargeOneItem',
    props: {
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
  