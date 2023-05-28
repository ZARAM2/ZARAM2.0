import { createRouter, createWebHistory } from "vue-router";
//import the components he
import Home from "../components/Home.vue"
// import HelloWorldVue from "../components/HelloWorld.vue";
import Login from "../components/Login.vue"

import Canvas from "../components/Offcanvas/Canvas.vue";

//for the components man 
import jackets from "../components/man/jackets/page.vue";
import trousers from "../components/man/trousers/page.vue"
import suits from "../components/man/suits/page.vue"
import shorts from "../components/man/shorts/page.vue"
import hoodies from "../components/man/hoodies/page.vue"
import shirts from "../components/man/shirts/page.vue"
import jeans from "../components/man/jeans/page.vue"
//for the components kids
import babyBoy from "../components/kids/babyBoy/page.vue"
import babyGirl from "../components/kids/babyGirl/page.vue"
import boy from "../components/kids/boy/page.vue"
import girl from "../components/kids/girl/page.vue"
//search
import search from "../components/search/page.vue"

import Cart from "../components/Card/Card.vue"
import SignUp from "../components/SignUp.vue";


//for the women $
import jackets from "../components/women/jackets/page.vue";
import dresses from "../components/women/dresses/page.vue";
import skirts from "../components/women/skirts/page.vue";
import tops from "../components/women/tops/page.vue";
import jeans from "../components/women/jeans/page.vue";
import waistcoats from "../components/women/waistcoats/page.vue";
import trousers from "../components/women/trousers/page.vue";
import help from"../components/help/help.vue"

const routes=[    //call the components here
 {
    path: "/",
     component: Home
 },

 {path:"/cart",
 component: Cart},

 {
    path: "/help",
     component: help
 },

 {path:"/h",
 component: HelloWorldVue},

 {
    path: "/login",
    component: Login
 },
 {

    path:"/c",
    component: Canvas
},
{

    path: "/jackets",
    component: jackets
  },
  {
    path: "/jeans",
    component: jeans
  },
  {
    path: "/shorts",
    component: shorts
  },
  {
    path: "/shirts",
    component: shirts
  },
  {
    path: "/hoodies",
    component: hoodies
  },
  {
    path: "/suits",
    component: suits
  },
  {
    path: "/trousers",
    component: trousers
  },
  {
    path: "/babyBoy",
    component: babyBoy
  },
  {
    path: "/boy",
    component: boy
  },
  {
    path: "/girl",
    component: girl
  },
  {
    path: "/babyGirl",
    component: babyGirl
  },
  {
    path: "/search",
    component: search
  },


    {path:"/signUp",

    component: SignUp
},

{
    path:"/women/trousers",
    component: trousers
},
{
    path:"/women/jeans",
    component: jeans
},
{
    path:"/women/waistcoats",
    component: waistcoats
},
{
    path:"/women/tops",
    component: tops
},
{
    path:"/women/skirts",
    component: skirts
},
{
    path:"/women/dresses",
    component: dresses
},
{
    path:"/women/jackets",
    component: jackets
},

]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router