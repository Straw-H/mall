import VueRouter from 'vue-router'
import Vue from  'vue'
const Home = () => import('views/home/HomeView')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
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
            title: "购物街"
        }
    },
    {
        path: '/category',
        component: Category,
      meta: {
        title: "分类"
      }
    },
    {
        path: '/cart',
        component: Cart,
      meta: {
        title: "购物车"
      }
    },
    {
        path: '/profile',
        component: Profile,
      meta: {
        title: "个人中心"
      }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.afterEach((to, from) => {
  document.title = to.matched[0].meta.title;
})

export default router
