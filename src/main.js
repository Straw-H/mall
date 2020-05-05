import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueLazyLoad from 'vue-lazyload'
import Viewer from "v-viewer";
import 'viewerjs/dist/viewer.css'
import store from 'store/index'
// import  { LoadingPlugin } from 'vux'
import FastClick from 'fastclick'
import Toast from "components/common/toast"

Vue.config.productionTip = false

// 事件总线-全局
Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
  loading: require('assets/images/common/load.jpg')
})
// 图片预览
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

// Vue.use(LoadingPlugin)

// 解决移动端300ms延迟
FastClick.attach(document.body)
// toast
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
