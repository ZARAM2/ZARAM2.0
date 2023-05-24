<template>
    
      <!-- <RouterLink to="/woman/jackets" class="offcanvas-body">JACKETS | TRENCH COATS</RouterLink>
      <RouterLink to="/woman/waistcoats" class="offcanvas-body">WAISTCOATS | GILETS</RouterLink>
      <RouterLink to="/woman/dresses" class="offcanvas-body">DRESSES | JUMPSUITS</RouterLink>
      <RouterLink to="/woman/shirts" class="offcanvas-body">SHIRTS</RouterLink>
      <RouterLink to="/woman/tops" class="offcanvas-body">TOPS | BODYSUITS</RouterLink>
      <RouterLink to="/woman/trousers" class="offcanvas-body">TROUSERS</RouterLink>
      <RouterLink to="/woman/jeans" class="offcanvas-body">JEANS</RouterLink>
      <RouterLink to="/woman/skirts" class="offcanvas-body">SKIRTS</RouterLink> -->
    
  </template>
  
  <script>
//   import { motion } from "vue-motion";
  import { RouterLink } from "vue-router";
  
  export default {
    components: {
    //   motion,
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
          duration: 0.6,
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
  