import { createRouter, createWebHistory } from "vue-router";
//import the components he
import Home from "../components/Home.vue"
import HelloWorldVue from "../components/HelloWorld.vue";
import Login from "../components/Login.vue"
import Canvas from "../components/Offcanvas/Canvas.vue";
const routes=[    //call the components here
 {
    path: "/home",
     component: Home
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
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router