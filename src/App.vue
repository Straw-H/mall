<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
</style>
