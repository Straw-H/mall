<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#409EFF">
            <img slot="tab-icon" src="~assets/images/tabbar/home.svg" alt="">
            <img slot="tab-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
            <div slot="tab-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#409EFF">
            <img slot="tab-icon" src="~assets/images/tabbar/category.svg" alt="">
            <img slot="tab-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
            <div slot="tab-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="#409EFF">
            <img slot="tab-icon" src="~assets/images/tabbar/cart.svg" alt="">
            <img slot="tab-icon-active" src="~assets/images/tabbar/cart_active.svg" alt="">
            <div slot="tab-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#409EFF">
            <img slot="tab-icon" src="~assets/images/tabbar/profile.svg" alt="">
            <img slot="tab-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
            <div slot="tab-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar.vue'
    import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

    export default {
        name: 'ManTabBar',
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
