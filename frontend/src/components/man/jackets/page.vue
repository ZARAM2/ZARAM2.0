<template>
  <div>

    <Navbar/>
    <div>
      <LargeOneItem

        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :name="item.name"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>

import Navbar from "../../NavBar.vue";
import LargeOneItem from "../../oneItem/LargeOneItem.vue";
import axios from "axios";

export default {
  name: "jackets",

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
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios
        .post("http://localhost:3001/items/searchCategory", {
          gender: "male",
          type: "jacket",
        })
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
