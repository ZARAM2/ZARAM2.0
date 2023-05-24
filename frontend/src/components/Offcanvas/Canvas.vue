<template>
    <div>
      <h3></h3>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="myOffcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="gender-container" style="margin-left: 30px;">
          
          <button class="search-gender" @click="setChosen('woman')">WOMAN</button>
          <button class="search-gender" @click="setChosen('man')">MAN</button>
          <button class="search-gender" @click="setChosen('kids')">KIDS</button>
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
  import { ref } from "vue";
  // import WomanItems from "./WomanItems.vue"
  // import ManItems from "./ManItems.vue";
  // import KidsItems from "./KidsItems.vue";
  import { defineComponent } from "vue";

export default defineComponent({
    name:"Canvas",
    components: {
      // WomanItems,
      // ManItems,
      // KidsItems,
    },
    setup() {
      const chosen = ref("woman");
  
      function setChosen(gender) {
        chosen.value = gender;
      }
  
      return {
        chosen,
        setChosen,
      };
    },
  });
  </script>
  
  <style scoped>
  .offcanvas-content {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }
  
  .offcanvas-body {
    text-decoration: none;
    color: black;
  }
  
  .search-gender {
    background-color: inherit;
    border: none;
  }
  </style>
  