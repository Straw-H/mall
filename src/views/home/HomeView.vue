<template>
    <div id="home">
      <!-- 标题 -->
        <nav-bar class="nav-bar">
          <div slot="center">购物街</div>
        </nav-bar>
      <!-- 轮播图 -->
      <HomeSwiper :banners="banners"/>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"/>
      <!-- 本周流行 -->
      <feature-view/>
      <!-- 商品分类 -->
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"></tab-control>
      <h1>1</h1>
      <h1>1</h1>


    </div>
</template>

<script>
  import HomeSwiper from 'views/home/children/HomeSwiper'
  import RecommendView from 'views/home/children/RecommendView'
  import FeatureView from 'views/home/children/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMasterData} from 'network/home'

    export default {
      name: 'HomeView',
      data(){
        return {
          // 保存相应的数据
          banners: [],
          recommends: []
        }
      },
      components:{
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl
      },
      created(){
        // 获取首页相关的数据
        getHomeMasterData()
          .then(result => {
            console.log(result)
            this.banners = result.data.data.banner.list;
            this.recommends = result.data.data.recommend.list;
          })
      }

    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .nav-bar{
    background-color: var(--color-high-text);
    color: #fff;
    font-weight: 700;
    letter-spacing:3px;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }

</style>
