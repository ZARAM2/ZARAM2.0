import { createRouter, createWebHistory } from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import HelloWorldVue from "../components/HelloWorld.vue";
import Login from "../components/Login.vue"
import Canvas from "../components/Offcanvas/Canvas.vue";
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
    path: "/home",
     component: Home
 },
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