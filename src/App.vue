<template>
<navigation> </navigation>
   <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  
  <Footer /> 

</template>

<script>
import Home from './components/Home.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navigation,
    Footer
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  /* background-image:url('/static/img/background.jpg');*/ 
  background-color: #fff;
}

</style>
