<template>
 <div class="bodysignup">
   
      <div id="signpage">
       
    <div class="contain">
        <div class="tyg-div-denglv">
        <div class="tyg-div-form">
		 <font size="6" color="black"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to register</strong></font>
				
        <form class="form" @submit.prevent="add">
			<div class="col">
				<span><strong>Username</strong></span>&nbsp;&nbsp;
					<input type="text" v-model="username" class="input" placeholder="Please set the username ">

					</div>
					<div class="col">
						<span><strong>E-mail</strong></span>&nbsp;&nbsp;
						<input type="text" class="input" v-model="email" placeholder="Used for login and password retrieval">
					</div>
					<div class="col">
						<span><strong>Password</strong></span>&nbsp;&nbsp;
						<input type="text" class="input" v-model="password" placeholder="Please set the password">
					</div>
					<div class="col3 col">
						<span><strong>Verification</strong></span>&nbsp;&nbsp;&nbsp;&nbsp;
						<input type="text" class="input" v-model="safecode" placeholder="Please enter the verification code">
						<input type="button" value="Get Code" class="button" >
					</div>

					<div>
						<button type="submit" class="submitbtn">Sign Up</button>
					</div>
					
				</form>
			</div>
        </div>
    </div>
	
</div> 
</div>
  
</template>

<script>
import {mix} from "../../public/JS/mixin"
export default {
    name:"Signup",
    mixins:[mix],
    data(){
        return{
           
            safecode:"",
            email:""

        }
    },
    methods:{ add(){ if(this.username===""){
                    alert("Please fill in all the information!")
                    return
                }
                if(this.password===""){
                    alert("Please fill in all the information!")
                    return
                }

                if(this.safecode===""){
                    alert("Please fill in all the information!")
                    return
                }
                if(this.email===""){
                    alert("Please fill in all the information!")
                    return
                }
            }
      }
}
</script>

       
       
<style>
     .input{
            padding: 5px;
            height: 38px;
            box-sizing: border-box;
            width: 360px;
            margin: 2px;
        }

        span{
            display:inline-block;
            height:35px;
            width: 70px;
            text-align:right;
        }

        input[type="button"]{
            height: 35px;
            width: 100px;
            padding: 2px 5px;  
            box-sizing: border-box;     
        }

        .col{
            margin: 20px;
        }

   

        .col3>input[type="text"]{
            width: 255px;

        }

        .submitbtn{
            height:55px;
            width: 400px;
            color:white;
            background:rgb(91, 113, 241,0.4);
            font-family: "SimHei";
            font-size: 18px;
            margin-left:60px;
            border-radius: 20px;
        }

        a{
            text-decoration: none;
        }


    .tyg-div-form{
        background-color:rgba(50,59,88,0.7);
        border-radius: 10px;
        width:510px;
        height:450px;
        margin:170px auto 0 auto;
        padding: 80px 0px 0px 0px;

        }
        .textTitle{
            font-size: 54px;
            letter-spacing: 0px;
            font-weight: 700;
        }
        .textKing{
            font-size: 32px;
            letter-spacing: 3.81px;
            font-weight: 300;
        }
	
</style>