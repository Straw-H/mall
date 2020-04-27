<template>
  <div id="app">
<<<<<<< HEAD
    <router-view></router-view>
=======
      <router-view></router-view>
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
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
<<<<<<< HEAD

=======
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
</style>
