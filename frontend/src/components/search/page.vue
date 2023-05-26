<template>
    <div>
      <Navbar v-show="false" />
      <div id="search-gender-container">
        <div id="gender-container">
          <button class="search-gender" @click="handleGenderClick('woman')">WOMAN</button>
          <button class="search-gender" @click="handleGenderClick('man')">MAN</button>
          <button class="search-gender" @click="handleGenderClick('kids')">KIDS</button>
        </div>
        <input type="text" ref="searchInputRef" v-model="queries" @input="query(queries)" placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..." />
      </div>
      <div id="items-container">
        <OneItem v-for="(item, index) in items" :key="index" :id="item._id" :name="item.name" :price="item.price" :image="item.image" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Navbar from "../NavBar.vue";
import OneItem from '../oneItem/OneItem.vue'
  
  export default {
    name: "Page",
    components: {
      Navbar,
      OneItem
    },
    data() {
      return {
        queries: "",
        items: [],
        gender: "woman"
      };
    },
    methods: {
      handleGenderClick(selectedGender) {
        this.gender = selectedGender;
        if (this.$refs.searchInputRef) {
          this.$refs.searchInputRef.value = "";
        }
      },
      query(newQuery) {
        console.log(this.query,2)
        if (newQuery.length) {
          let endpoint;
          if (this.gender === "woman") {
            endpoint = `http://localhost:3001/items/searchWoman?query=${newQuery}`;
          } else if (this.gender === "man") {
            endpoint = `http://localhost:3001/items/searchMan?query=${newQuery}`;
          } else {
            endpoint = `http://localhost:3001/items/searchKids?query=${newQuery}`;
          }
          axios.get(endpoint)
            .then((response) => {
              this.items = response.data;
            });
        }
      },
    },

      
      gender(newGender) {
        if (this.query.length) {
          let endpoint;
          if (newGender === "woman") {
            endpoint = `http://localhost:3001/items/searchWoman?query=${this.query}`;
          } else if (newGender === "man") {
            endpoint = `http://localhost:3001/items/searchMan?query=${this.query}`;
          } else {
            endpoint = `http://localhost:3001/items/searchKids?query=${this.query}`;
          }
          axios.get(endpoint)
            .then((response) => {
              this.items = response.data;
            });
        }
      }
    }
  
  </script>
  
  <style>
@font-face {
  font-family: "default";
  src: url("../../Fonts/Helvetica\ Neue\ UltraLight.ttf");
}

@font-face {
  font-family: "medium";
  src: url("../../Fonts/Helvetica\ Neue\ W01\ 66\ Medium\ It.ttf");
}

#search-gender-container{
  margin: 20px;
}

#search-gender-container input{
  margin-top: 40px;
  width: 1250px;
  border: none; 
  border-bottom: 1px solid rgb(0, 0, 0);
  font-family: "default";
  outline: none;
}
  </style>
  