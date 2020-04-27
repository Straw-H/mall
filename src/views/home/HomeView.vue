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
<<<<<<< HEAD
      <h1>1</h1>
      <h1>1</h1>


=======
      <goods-list :goods="showGoodsList" />
      <h1>1</h1>
      <h1>1</h1>
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
    </div>
</template>

<script>
  import HomeSwiper from 'views/home/children/HomeSwiper'
  import RecommendView from 'views/home/children/RecommendView'
  import FeatureView from 'views/home/children/FeatureView'
<<<<<<< HEAD
=======
  import GoodsList from 'views/home/children/GoodsList'
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

<<<<<<< HEAD
  import {getHomeMasterData} from 'network/home'
=======

  import { getHomeMasterData, getHomeGoodsData } from 'network/home'
  import { goodsType } from 'common/const'
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de

    export default {
      name: 'HomeView',
      data(){
        return {
          // 保存相应的数据
          banners: [],
<<<<<<< HEAD
          recommends: []
=======
          recommends: [],
          goodsList: {
            pop:{ page: 0, list:[] },
            sell:{ page: 0, list:[] },
            new:{ page: 0, list:[] }
          }
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
        }
      },
      components:{
        HomeSwiper,
        RecommendView,
        FeatureView,
<<<<<<< HEAD
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
=======
        GoodsList,
        NavBar,
        TabControl
      },
      computed:{
        showGoodsList(){
          return this.goodsList[goodsType.POP].list;
        }
      },
      created(){
        // 1、获取首页相关的数据
        this.getHomeMasterData();

        // 2、获取商品数据
        // --流行
        this.getHomeGoodData(goodsType.POP);
        // --热销
        this.getHomeGoodData(goodsType.SELL);
        // --上新
        this.getHomeGoodData(goodsType.NEW);
      },
      methods:{
        // 轮播图数据
        getHomeMasterData(){
          getHomeMasterData()
            .then(result => {
              // 轮播图
              this.banners = result.data.banner.list;
              // 推荐
              this.recommends = result.data.recommend.list;
            })
        },
        // 商品数据
        getHomeGoodData(type){
          getHomeGoodsData(type,1)
            .then( result => {
              let goods = result.data.list;
              this.goodsList[type].list.push(...goods);
              this.goodsList[type].page += 1;
            })
        }
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
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
