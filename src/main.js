import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 事件总线-全局
Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
  loading: require('assets/images/common/load.gif')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
