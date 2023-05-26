<template>

   <ul>
      <li><RouterLink to="/suits" class="offcanvas-body">SUITS</RouterLink></li>
      <li><RouterLink to="/shirts" class="offcanvas-body">SHIRTS</RouterLink></li>
      <li><RouterLink to="/jackets" class="offcanvas-body">JACKETS | OVERSHIRTS</RouterLink></li>
      <li><RouterLink to="/trousers" class="offcanvas-body">TROUSERS</RouterLink></li>
      <li><RouterLink to="/jeans" class="offcanvas-body">JEANS</RouterLink></li>
      <li><RouterLink to="/shorts" class="offcanvas-body">SHORTS</RouterLink></li>
      <li><RouterLink to="/hoodies" class="offcanvas-body">HOODIES | SWEATSHIRTS</RouterLink></li>
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
  