<template>
  <NavBar/>
 
  
  
  
  <div class='container-login'>
    <Navbar/>
    <div class='Left-login-form'>
    <h6 class='login-heading'>LOG IN TO YOUR ACCOUNT</h6>
  
   <div class='form-input-label'>
        <input  class='form-input-label' placeholder='E-MAIL' v-model="email"/>
    </div>
    <div class='form-input-label'>
        <input  class='form-input-label' type="password" placeholder='PASSWORD' v-model="pass"  />
    </div>
  
    <button @click="log"  class="login-btn" >LOGIN </button> 
    
    <a class="forgotpassword">HAVE YOU FORGOTTEN YOUR PASSWORD?</a>
  
    </div>
   
  
  <div class='right-login-form'>
  <h4  id="need">NEED ACCOUNT ?</h4>
  <button id="signup" @click="$router.push('/signup')"  class="login-btn" >SIGN UP </button> 
    </div>
  
  </div>
  </template>
  
  
  
  <script lang="ts">
  // const currentUser=JSON.parse(localStorage.getItem("currentUser") as any)
  import axios from "axios"
 import NavBar from "./NavBar.vue"
  
  export default {
  
     result:{"email":""},
  
    name: 'Login',
    components: {
      NavBar
    },
    data() {
      
      return { 
        email:'',
        pass:"",
        res:{
          email:'',
          token:''
        }
      }
    },
    methods:{
      log(){
        
          axios.post("http://localhost:3001/user/login",{
              pass:this.pass,
              email:this.email
          })
          .then((res)=>{
            if(res.data==="Email Doesn't Exist"){
              console.log(res.data)
            }
            if(res.data==="Password Incorrect"){
              console.log("no")
            }
            else{
              // localStorage.removeItem("currentUser")
              localStorage.setItem("currentUser", JSON.stringify(res.data))
            this.$router.push('/') 
            this.res=res.data
            console.log(JSON.parse(localStorage.getItem("currentUser") as string))}})
          
          .catch((err)=>console.log(err))
      }
    }
  
  }
  </script>
  
  <style>
  body{
    background-color: white;
  }
  .container-login{
    width: 60%;
        display: flex;
        color: gray;
    font-size: 90%;
    margin:14%;
    justify-content: space-between;
    margin: 2%;
    margin-top: 9%;
    }
    .right-p{
    margin-top: 2%;
  
    }
    .right-login-form{
        width: 50%;
        margin-top: 8%;
    }
    .forgotpassword{
        color: black;
        font-size: 70%;
  
    }
    .Left-login-form{
        width: 40%;
    }
    .login-heading{
        margin: 4%;
        color: black;
        font-size: small;
        
    }
    .create-btn{
        background-color: rgba(0, 0, 0, 0.985);
        border: solid;
        text-align: center;
        font-size: 90%;
        color: rgb(255, 255, 255);
        text-decoration: none;
        padding:2% 32% 3% 10%;
        transform: translate(76px, -81px);
  }
    .create-btn:hover{
        color: rgb(255, 255, 255);
    }
    .login-btn{
        background-color: black;
        width: 10%;
        height: 5*0%;
        text-align: center;
        font-size: 90%;
        color: white;
        text-decoration: none;
        margin-top: 6%;
    }
    .login-btn:hover{
    color: rgb(255, 255, 255);
    }
    #need{
          margin-left: 150px;
      font-size: small;
      color: black;
      margin-bottom: 100px;
    }
    #signup{
      width:350px;
      
      position: absolute;
      
    }
  
  </style>