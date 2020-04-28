<template>
    <div id="home">
      <!-- 标题 -->
        <nav-bar class="nav-bar">
          <div slot="center">购物街</div>
        </nav-bar>
      <scroll class="scroll">
        <!-- 轮播图 -->
        <HomeSwiper :banners="banners"/>
        <!-- 推荐 -->
        <recommend-view :recommends="recommends"/>
        <!-- 本周流行 -->
        <feature-view/>
        <!-- 商品分类 -->
        <tab-control class="tab-control"
                     :titles="['流行','新款','精选']"
                     @tabClick="tabliClick"></tab-control>
        <goods-list :goods="showGoodsList" />
      </scroll>
    </div>
</template>

<script>
  import HomeSwiper from 'views/home/children/HomeSwiper'
  import RecommendView from 'views/home/children/RecommendView'
  import FeatureView from 'views/home/children/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from "components/common/BScroll/BScroll";

  import { getHomeMasterData, getHomeGoodsData } from 'network/home'
  import { goodsType } from 'common/const'

    export default {
      name: 'HomeView',
      data(){
        return {
          // 保存相应的数据
          banners: [],
          recommends: [],
          goodsList: {
            pop:{ page: 0, list:[] },
            sell:{ page: 0, list:[] },
            new:{ page: 0, list:[] }
          },
          currentType: goodsType.POP
        }
      },
      components:{
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroll
      },
      computed:{
        showGoodsList(){
          return this.goodsList[this.currentType].list;
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
              console.log(result);
              let goods = result.data.list;
              this.goodsList[type].list.push(...goods);
              this.goodsList[type].page += 1;
            })
        },
        // 切换商品类型
        tabliClick(index){
          switch (index) {
            case 0:
              this.currentType = goodsType.POP;
              break;
            case 1:
              this.currentType = goodsType.NEW;
              break;
            case 2:
              this.currentType = goodsType.SELL;
          }
        }
      }

    }
</script>

<style scoped>
  #home{
    position: relative;
    /*padding-top: 44px;*/
    /*视口*/
    height: 100vh;
    background-color: #fff;
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
  .scroll{
    /*height: calc(100% - 100px);*/
    position: absolute;
    top: 44px;
    bottom: 46px;
    left: 0;
    right: 0;
    /*overflow: hidden;*/
  }

</style>
