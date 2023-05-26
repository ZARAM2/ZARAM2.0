<template>
  <div>
    <div class="offcanvas offcanvas-start" tabindex={-1} id="myOffcanvas" aria-labelledby="offcanvasLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div style="margin-left: 30px;">
        <div id="gender-container">
          <button class="search-gender" @click="setChosen('woman')">WOMAN</button>
          <button class="search-gender" @click="setChosen('man')">MAN</button>
          <button class="search-gender" @click="setChosen('kids')">KIDS</button>
        </div>
      </div>
      <div>
        <WomanItems v-if="chosen === 'woman'" />
        <ManItems v-if="chosen === 'man'" />
        <KidsItems v-if="chosen === 'kids'" />
      </div>
    </div>
  </div>
</template>

<script>
import WomanItems from "./WomanItems.vue";
import ManItems from "./ManItems.vue";
import KidsItems from "./KidsItems.vue";

export default {
  data() {
    return {
      chosen: "woman"
    };
  },
  methods: {
    setChosen(gender) {
      this.chosen = gender;
    }
  },
  components: {
    WomanItems,
    ManItems,
    KidsItems
  }
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
