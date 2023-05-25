<template>
  <div>
    <button id="add-button" @click="handleSubmit">ADD TO CART</button>
  </div>
</template>

<script>
import axios from "axios";
import { useNavigation } from "vue-router";


export default {
  name: "AddToCart",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    async handleSubmit() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const router = useNavigation();

      if (!currentUser) {
        router.push("/login");
      } else {
        console.log(currentUser.id, ` | itemid: ${this.id}`);
        await axios.post("http://localhost:3001/user/add", { userId: currentUser.id, itemId: this.id });
        const refreshed = await axios.get(`http://localhost:3001/user/refresh/${currentUser.id}`);
        localStorage.setItem("currentUser", JSON.stringify(refreshed.data));
        router.push("/cart");
      }
    }
  }
};
</script>

<style>
@font-face {
  font-family: "zara";
  src: url("../../Fonts/Neue\ Helvetica\ Condensed\ BQ\ Regular.otf");
}

#add-button{
  background-color: black;
  color: white;
  font-family: "zara";
}

</style>
