<template>
  <div id="app">
      <router-view></router-view>
    <man-tab-bar />
  </div>
</template>

<script>
import ManTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components:{
      ManTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
