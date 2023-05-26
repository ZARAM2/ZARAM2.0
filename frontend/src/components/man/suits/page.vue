<template>
  <div>
    <Navbar />
    <div>
      <LargeOneItem v-for="(item, index) in items" :key="index" :image="item.image" :name="item.name" :price="item.price" />
    </div>
  </div>
</template>

<script>

import axios from "axios";
import Navbar from "../../NavBar.vue";
import LargeOneItem from "../../oneItem/LargeOneItem.vue";
export default {
  components: {
    Navbar,
    LargeOneItem,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .post("http://localhost:3001/items/searchCategory", { gender: "male", type: "suits" })
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
