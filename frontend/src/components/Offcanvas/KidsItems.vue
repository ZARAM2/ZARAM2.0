<template>
     <ul className="offcanvas-content" >
      <RouterLink to="/girl" class="offcanvas-body">GIRL | 6-14 YEARS</RouterLink>
      <RouterLink to="/boy" class="offcanvas-body">BOY | 6-14 YEARS</RouterLink> 
       <RouterLink to="/babyGirl" class="offcanvas-body">BABY GIRL | 9 MONTHS - 6 YEARS</RouterLink>
      <RouterLink to="/babyBoy" class="offcanvas-body">BABY BOY | 9 MONTHS - 6 YEARS</RouterLink> -->
     </ul>
  </template>
  
  <script>
 
  import { RouterLink } from "vue-router";
  
  export default {
    components: {
      
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
  .offcanvas-content{
  margin-top: 25px;
  display: flex;
  flex-direction: column;
}

.offcanvas-body{
  text-decoration: none;
  color: black;
}

.search-gender{
  background-color: inherit;
  border:none ;
}

#menu{
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-bottom: 60px;
  cursor: pointer;
}
  </style>
  