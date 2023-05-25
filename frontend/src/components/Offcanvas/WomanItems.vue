<template>
    <ul>
     <li> <RouterLink to="/jackets" class="offcanvas-body">JACKETS | TRENCH COATS</RouterLink></li>
     <li><RouterLink to="/waistcoats" class="offcanvas-body">WAISTCOATS | GILETS</RouterLink></li>
      <li><RouterLink to="/dresses" class="offcanvas-body">DRESSES | JUMPSUITS</RouterLink></li>
      <li><RouterLink to="/shirts" class="offcanvas-body">SHIRTS</RouterLink></li>
      <li><RouterLink to="/tops" class="offcanvas-body">TOPS | BODYSUITS</RouterLink></li>
      <li><RouterLink to="/trousers" class="offcanvas-body">TROUSERS</RouterLink></li>
      <li><RouterLink to="/jeans" class="offcanvas-body">JEANS</RouterLink></li>
      <li><RouterLink to="/skirts" class="offcanvas-body">SKIRTS</RouterLink></li>
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
          duration: 0.6,
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
  