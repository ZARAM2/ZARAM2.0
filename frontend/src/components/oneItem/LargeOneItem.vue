<template>
  <div class="large-one-item">
    <img :src="image" :alt="name" />
    <h2>{{ name }}</h2>
    <h2>{{ price }} TND</h2>

    <div>
      <button class="button-like" @click="handleSubmit">add to cart</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
 
export default {
  name: 'LargeOneItem',

  props: {
    id: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    async handleSubmit() {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (!currentUser) {
        this.$router.push("/login");
      } else {
        console.log(currentUser.id, ` | itemid: ${this.id}`);
        await axios.post("http://localhost:3001/user/add", { userId: currentUser.id, itemId: this.id });
        const refreshed = await axios.get(`http://localhost:3001/user/refresh/${currentUser.id}`);
        localStorage.setItem("currentUser", JSON.stringify(refreshed.data));
        this.$router.push("/cart");
      }
    }
  }
};
</script>

<style scoped>
.button-like {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-like:hover {
  background-color: #45a049;
}

.button-like:active {
  background-color: #3e8e41;
}

.button-like:focus {
  outline: none;
  /* Add additional focus styles if desired */
}
</style>
