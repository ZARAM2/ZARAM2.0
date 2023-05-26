<template>
  <div>

    
   

    <Offcanvas />
    <div id="pushImg"></div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <template v-if="showOffcanvas !== false">
        <img
          id="menu"
          src="../../src/assets/img/menu.png"
          alt="..."
          data-bs-toggle="offcanvas"
          data-bs-target="#myOffcanvas"
        />
      </template>
      <div class="container px-4 px-lg-5">
        <router-link to="/"><img id="logo" class="navbar-brand" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png" alt="zara" style="cursor: pointer" /></router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li v-if="showSearch !== false" class="nav-item">
              
              <router-link to="/search"><Search /></router-link>
            </li>
            <li v-if="currentUser" class="nav-item">
              <router-link class="nav-link" to="/login"  @click="Login">{{ name }}</router-link>
            </li>
            <li v-if="currentUser" class="nav-item">
              <router-link v-if="check" class="nav-link" to="/" @click="logout">LOGOUT</router-link>
              <router-link v-else class="nav-link" to="/" ></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">HELP</a>
            </li>
            <li v-if="showCart !== false" class="nav-item">
              <div class="nav-link" style="cursor: pointer" @click="goToCart">
                <img id="bag" src="../assets/img/bag.png" alt=".." />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>


<script>
import Offcanvas from "../components/Offcanvas/canvas.vue";
// import Search from "../Search/Search.vue";
import { useRouter } from "vue-router";

export default {
  props: {
    // showSearch: {
    //   type: Boolean,
    //   default: true,
    // },
    // showCart: {
    //   type: Boolean,
    //   default: true,
    // },
    showOffcanvas: {
      type: Boolean,
      default: true,
    },
  },

  data(){
    var y=false
    var x=null
    var user=false
    if(localStorage.getItem("currentUser")===null){
y=false
      x="LOG IN"
    }else{
y=true
      x=JSON.parse(localStorage.getItem("currentUser") ).fName
      user=true
    }

   return { name: x,
    check:y

}
},

  components: {
    Offcanvas,
    // Search,
  },
  setup() {
    const router = useRouter();
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

    const logout = () => {
      localStorage.removeItem("currentUser");
      location.reload()
    };

    const goToCart = () => {
      if (currentUser) {
        router.push("/cart");
      } else {
        router.push("/login");
      }
    };

    return {
      currentUser,
      logout,
      goToCart,
    };
  },
//   data(){
//     var x=null
//     if(localStorage.getItem("currentUser")===null){
//       x="LOG IN"
//     }else{

//       x=JSON.parse(localStorage.getItem("currentUser") as string).fName
//     }

//    return { name: x,
// }
// },
};
</script>

<style scoped>
#menu-button{
  cursor: pointer;
}

#menu{
  height: 25px;
  width: 25px;
  margin-left: 20px;
  margin-bottom: 60px;
  cursor: pointer;
}

#logo{
  color: transparent;
  width: 5.2cm;
  height: 3.2cm;
}

#bag{
  height: 25px;
  width: 25px;
}

#navbarResponsive{
  margin-right: 30px;
}

div{
  padding: 10px;
}

</style>
