<template>
  <div id="app">
    <!-- exclude:排除多个用逗号分离   -->
    <transition :name="transitionName">
      <keep-alive exclude="Detail" mode="out-in">
        <router-view class="position-div"></router-view>
      </keep-alive>
    </transition>

<!--    <loading v-model="isLoading"></loading>-->
    <man-tab-bar />
  </div>
</template>

<script>
import ManTabBar from 'components/content/mainTabBar/MainTabBar.vue'

/*import { Loading } from 'vux'
import { mapState } from 'vuex'*/

export default {
  name: 'App',
  components:{
      ManTabBar,
    // Loading
  },
  data() {
    return {
      transitionName: null
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.index !== undefined && from.meta.index !== undefined) {
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-right'
        } else if (to.meta.index < from.meta.index) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = ''
        }
      }
    }
  }
  /*computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }*/
}
</script>

<style>
  @import 'assets/css/base.css';

  .position-div{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
</style>
