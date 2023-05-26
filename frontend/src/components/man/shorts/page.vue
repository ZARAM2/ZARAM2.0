<template>
  <div>
    <navbar/>
    <div>
      <large-one-item
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
  name: "Page",
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
          type: "short",
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
