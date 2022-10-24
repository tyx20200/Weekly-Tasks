<template>
  <div>
   <nav class="homenav">
        <div class="navtitle"><strong>Genshin Impact</strong></div>
        <router-link to="/home">HOME</router-link>
         <router-link to="/character">CHARACTER</router-link>
        <router-link to="/region">REGION</router-link>
       <router-link to="/login">LOGIN</router-link>
         <router-link to="/signup">SIGNUP</router-link>
        <router-link to="/join">JOIN</router-link>
        <div class="navanim home"></div>
        <div class="none"></div>
    </nav>
    <div>
    <router-view></router-view>
   </div>
   <footer class="foot">
        <p>@2022-2023  |  BY:Xinpu Wang</p>
        
    </footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

