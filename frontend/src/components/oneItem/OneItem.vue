<template>
  <div>
    <div class="item-container">
      <img :src="image" alt="image" width="206" height="309" />
      <div class="details-container">
        <p class="detail-text">{{ name }}</p>
        <p class="detail-text" style="position: absolute; transform: translateX(165px)">{{ price }} TND</p>
      </div>
      <!-- <h1>hhhhhhhhhhhhhhhhh</h1>
      <AddToCart v-if="showAdd !== false" :id="id" /> -->
    </div>
  </div>
</template>

<script>

// import AddToCart from "../AddToCart/page.vue";

export default {
  name: 'OneItem',
  components: {
   
  },
  props: {
    id: {
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
    image: {
      type: String,
      default: '',
    },
    showAdd: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>

.item-container{
  margin: 20px;
}

.details-container{
  display: flex;
  flex-direction: row;
}

.detail-text{
  font-family: "zara";
  font-size: 13px;
}
</style>
