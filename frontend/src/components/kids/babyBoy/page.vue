<template>
  <div>
    <Navbar />
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
import NavBar from "../frontend/components/NavBar.vue"
import axios from "axios";
import LargeOneItem from "@/components/OneItem/LargeOneItem.vue";

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
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      axios
        .post("http://localhost:3001/items/searchCategory", {
          gender: "babyboy",
          type: "babyboy",
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