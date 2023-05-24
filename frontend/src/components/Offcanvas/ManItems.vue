<template>
   
      <RouterLink to="/man/suits" class="offcanvas-body">SUITS</RouterLink>
      <RouterLink to="/man/shirts" class="offcanvas-body">SHIRTS</RouterLink>
      <RouterLink to="/man/jackets" class="offcanvas-body">JACKETS | OVERSHIRTS</RouterLink>
      <RouterLink to="/man/trousers" class="offcanvas-body">TROUSERS</RouterLink>
      <RouterLink to="/man/jeans" class="offcanvas-body">JEANS</RouterLink>
      <RouterLink to="/man/shorts" class="offcanvas-body">SHORTS</RouterLink>
      <RouterLink to="/man/hoodies" class="offcanvas-body">HOODIES | SWEATSHIRTS</RouterLink>
    
  </template>
  
  <script>
  // import { motion } from "vue-motion";
  import { RouterLink } from "vue-router";
  
  export default {
    components: {
      // motion,
      RouterLink,
    },
    data() {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
        transition: {
          duration: 0.8,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .offcanvas-content {
    /* Add your offcanvas content styles here */
  }
  
  .offcanvas-body {
    /* Add your offcanvas body styles here */
  }
  </style>
  