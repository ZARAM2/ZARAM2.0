<template>
    
      <!-- <RouterLink to="/kids/girl" class="offcanvas-body">GIRL | 6-14 YEARS</RouterLink>
      <RouterLink to="/kids/boy" class="offcanvas-body">BOY | 6-14 YEARS</RouterLink> -->
      <!-- <RouterLink to="/kids/babyGirl" class="offcanvas-body">BABY GIRL | 9 MONTHS - 6 YEARS</RouterLink>
      <RouterLink to="/kids/babyBoy" class="offcanvas-body">BABY BOY | 9 MONTHS - 6 YEARS</RouterLink> -->
    
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
  