<template>
<NavBar/>
<div class='container-login'>
    <Navbar/>
    <div class='Left-login-form'>
    <h6 class='login-heading'>CREATE AN ACCOUNT</h6>
  
   <div class='form-input-label'>
        <input  class='form-input-label' type="email" placeholder='E-MAIL'  v-model="email"/>
    </div>
    <div class='form-input-label'>
        <input  class='form-input-label' type="password" placeholder='PASSWORD'  v-model="pass"/>
    </div>
  <div class='form-input-label'>
        <input  class='form-input-label' type="email" placeholder='First' v-model="first"/>
    </div>
  <div class='form-input-label'>
        <input  class='form-input-label' type="email" placeholder='Last' v-model="last"/>
    </div>
    <button   @click="sign">CREATE ACCOUNT</button> 
    
  
    </div>
   </div>
</template>

<script>
 import axios from "axios"
 import NavBar from "./NavBar.vue"
 export default {
  
  

 name: 'SignUp',
 components: {
   NavBar
 },
 data() {
   
   return { 
     email:'',
     pass:'',
     first:'',
     last:''
   }
 },
 methods:{
     
    sign(){
        console.log({
      email:this.email,
      pass:this.pass,
      fName:this.first,
      lName:this.last,
      isAdmin:false,
      cart: []
    })
    axios.post("http://localhost:3001/user/signup",{
        email:this.email,
      pass:this.pass,
      fName:this.first,
      lName:this.last,
      isAdmin:false,
      cart: []
    })
    .then(user=>{
      if(user.data==="Email Already Exists"){
        alert("Email Already Exists")
      }
      else{
        alert("welcome to ZARA")
      }
    })
    .catch((err)=>console.log(err))

  },
 },
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
      width: 80%;
      height: 13%;
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

  input{
  
  border: none; 
  border-bottom: 1px solid rgb(0, 0, 0);
  font-family: "default";
  outline: none;
  }
</style>