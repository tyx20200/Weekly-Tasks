<template>
<div>
   <div> <a href="">sign up</a> </div>
   <div class="bodybox">
     <div id="logbox">
        <div class="log">
            <div class="logtitle">LOGIN</div><p></p>
            <form class="logbody"  @submit.prevent="add">
                <input type="text" v-model="username" size="20" class="txt" placeholder="Username">
                <br>
                <input type="text" v-model="password" size="20" class="txt" placeholder="Password">
                <br>
                <button type="submit"  class="sub">Login</button>
               
                <a href="./Home.vue"><input type="button" value="Guest login"  class="guest"></a>
                

            </form>     
        </div>
    </div>
</div>
</div>

</template>

<script>
import {mix} from "../../public/JS/mixin"
export default {
    name:"Login",
    mixins:[mix],
methods:{
        add(){
                if(this.username===""){
                    alert("The username and password cannot be empty!")
                    return
                }
                if(this.password===""){
                    alert("The username and password cannot be empty")
                    return
                }
            }
       }

}


</script>

<style>
.bodybox{
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    color: rgb(44, 59, 59);
    overflow: hidden;
}
#logbox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    transform: scale(1.05);
}
#logbox::before{
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px); 
    position: fixed;
}
#logbox:hover::before{
    backdrop-filter: none;
}

.log{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 500px;
    min-height: 300px;
    background-color: rgba(50, 59, 88, 0.9);
    overflow: hidden;
    border-radius: 10px;
    box-shadow:0 0 10px rgba(50, 59, 88, 0.8);
    backdrop-filter: blur(5px);
}

.logtitle{
    font-size: 40px;
    font-weight: bolder;
    -webkit-background-clip: text;
    background-image: linear-gradient(90deg , rgba(98, 201, 248,0.6),rgba(243, 111, 255, 0.6),rgba(247, 129, 129, 0.6),rgba(241, 239, 104, 0.6),rgba(117, 226, 84, 0.6),rgba(98, 201, 248,0.6));
    background-size: 800%;
    animation: gradient 30s infinite linear;
    color: transparent;
    line-height: 100px;
}

.logbody .txt{
    border: none;
    border-bottom: 1px solid rgba(18, 21, 32, 0.7);
    background: transparent;
    transition: 0.3s;
    height: 30px;
    padding-top: 10px;
    padding-left: 35px;
}
.logbody .txt:hover{
    transform: scaleX(1.1);
}

.logbody .txt:focus{
    outline: none;
    border-bottom:  1px solid rgba(137, 160, 245, 0.7);
    color: rgba(137, 160, 245, 0.7);
}

.logbody .sub{
    width: 80%;
    height: 45px;
    margin-top: 10%;
    margin-left: 10%;
    border: none;
    border-radius: 10px;
    background-color: rgba(86, 116, 156,0.8);
    font-size: 16px;
    font-family:"YouYuan";
    color: rgb(180, 216, 233);
}
.logbody .sub:hover{
    background-color: rgba(118, 155, 202, 0.8);
    box-shadow: 0 0 10px rgba(118, 155, 202, 0.8);
}


.guest{
    
    margin-left: 100%;
    border: none;
    background-color: transparent;
    font-size: 15px;
}
.guest:hover{
    color: rgb(64, 160, 216);
    
}



@keyframes gradient{
    100%{
        background-position: -800% 0%;
    }
}

</style>