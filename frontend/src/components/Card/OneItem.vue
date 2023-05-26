<template>
    <div>
    
      <div class="item-container">
        <img :src="image" alt="image" width="206" height="309" />
        <div class="details-container">
          <p class="detail-text">{{ name }}</p>
          <p class="detail-text" style="position: absolute; transform: translateX(165px)">{{ price }} TND</p>
        </div>
        <!-- <AddToCart v-if="showAdd !== false" :id="id" /> -->
      </div>
    </div>
  </template>
  
  <script>
//   import './OneItem.css';
//   import AddToCart from "../AddToCart/page.vue";
  
  export default {
    name: 'OneItem',
    components: {
    //   AddToCart,
    },
    props: {
      id: {
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
      image: {
        type: String,
        default: '',
      },
      showAdd: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add the styles from OneItem.css here */
  </style>