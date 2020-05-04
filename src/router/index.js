import VueRouter from 'vue-router'
import Vue from  'vue'
const Home = () => import('views/home/HomeView')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
/**
 * 重写路由的replace方法
 */
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: "购物街",
            index: 1
        }
    },
    {
        path: '/category',
        component: Category,
      meta: {
        title: "分类",
        index: 2
      }
    },
    {
        path: '/cart',
        component: Cart,
      meta: {
        title: "购物车",
        index: 3
      }
    },
    {
        path: '/profile',
        component: Profile,
      meta: {
        title: "个人中心",
        index: 4
      }
    },
  {
    path: '/detail',
    component: Detail,
    meta: {
      title: "详情",
      index: 5
    }
  }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
    // mode: 'history'
})

router.afterEach((to, from) => {
  // document.title = to.matched[0].meta.title;
})
/*router.beforeEach(function (to, from, next) {
  this.$store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  this.$store.commit('updateLoadingStatus', {isLoading: false})
})*/
export default router
