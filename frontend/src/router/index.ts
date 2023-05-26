import { createRouter, createWebHistory } from "vue-router";
//import the components he
import Home from "../components/Home.vue"
// import HelloWorldVue from "../components/HelloWorld.vue";
import Login from "../components/Login.vue"
import Cart from "../components/Card/Card.vue"
import SignUp from "../components/SignUp.vue";
const routes=[    //call the components here
 {
    path: "/",
     component: Home
 },
 {path:"/cart",
 component: Cart},
 {
    path: "/login",
    component: Login
 },
 {
    path:"/signUp",
    component: SignUp
},
]  


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router