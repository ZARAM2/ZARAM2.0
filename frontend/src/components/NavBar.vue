<template>
  <div>
    <router-link to="/login"> <p class="login">LOG IN</p></router-link>
   <router-link to="/home"> <img class="logo" src="..\assets\Logo.png" /></router-link>
    <img class="menu" src="..\assets\img\menu.png"/>
    <p class="help">HELP</p>
    <P class="search">SEARCH</P>
    <img class="bag"  src="..\assets\img\bag.png" />
  </div>

</template>

<script lang="ts">

export default {
  name: 'NavBar',
  components: {
   
  }
}
</script>

<style>
.logo{
  width: 150px;
  position:absolute;
  left: 180px;
  top:10px
}
.menu{
  width: 25px;
  position:absolute;
  left: 30px;
  top:20px
}

.bag{
  width: 25px;
  position:absolute;
  right: 30px;
  top:30px
}

.login{
  position:absolute;
  right: 150px;
  top:18px;
  color: black;
}

.search{
  position:absolute;
  right: 300px;
  top:18px;
 
  border-bottom: 1px solid;
}

.help{
  position:absolute;
  right: 100px;
  top:18px;
 

}
div{
  padding: 10px;
}

p{
  @font-face {font-family: "Helvetica Neue LT Com"; src: url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.eot"); src: url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.woff") format("woff"), url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/81d87eba2f25b790803c324963f02063.svg#Helvetica Neue LT Com") format("svg"); }
  font-size:12px;
   
   font-weight:300;
}

</style>