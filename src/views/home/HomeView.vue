<template>
    <div id="home" class="minirefresh-wrap">
      <!-- 标题 -->
        <nav-bar class="nav-bar">
          <div slot="center">购物街</div>
        </nav-bar>
      <tab-control class="tab-control-out"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabliClick"
                   @click.native="syncTabIndex"
                   ref="tabControlOut"
                   v-show="isTabFixed"></tab-control>
      <scroll class="scroll"
              ref="scroll"
              @currentIndex="currentPosition"
              :probe-type="3"
              :pull-up-load="true"
              @pullingUp="pullingUp">
        <!-- 轮播图 -->
        <HomeSwiper :banners="banners"
                    @swiperImgLoad="swiperImgLoad" />
        <!-- 推荐 -->
        <recommend-view :recommends="recommends"/>
        <!-- 本周流行 -->
        <feature-view/>
        <!-- 商品分类 -->
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabliClick"
                     @click.native="syncTabIndex"
                     ref="tabControlIn"></tab-control>
        <goods-list :goods="showGoodsList" />
      </scroll>
      <!-- 回到顶部 -->
      <back-top @click.native="backTop" v-show="showBackTop"/>
    </div>
</template>

<script>
  import HomeSwiper from 'views/home/children/HomeSwiper'
  import RecommendView from 'views/home/children/RecommendView'
  import FeatureView from 'views/home/children/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from "components/common/BScroll/BScroll"
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMasterData, getHomeGoodsData } from 'network/home'
  import { goodsType } from 'common/const'
  import { itemImgListerer, backTopMixin, tabControllMixin } from  'common/mixin'

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
          // 顶部距离
          tabControllTop: 0,
          isTabFixed: false,
          saveY: 0,
          itemImgListerer: null
        }
      },
      components:{
        HomeSwiper,
        RecommendView,
        FeatureView,
        NavBar,
        Scroll,
        TabControl,
        GoodsList,
        BackTop
      },
      computed:{
        showGoodsList(){
          return this.goodsList[this.currentType].list;
        }
      },
      mixins: [itemImgListerer, backTopMixin, tabControllMixin],
      methods:{
        syncTabIndex(){
          // 同步两个tab的位置
          this.$refs.tabControlOut.currentIndex = this.currentTabIndex;
          this.$refs.tabControlIn.currentIndex = this.currentTabIndex;
        },
        swiperImgLoad(){
          /**
           * 获取tab controll的offsetTop
           * 使用$el获取子元素
           */
          this.tabControllTop = this.$refs.tabControlIn.$el.offsetTop;
        },
        // 当前位置
        currentPosition(index){
          let position = index.y;
          // 显示BackTop
          this.listenShowBackTop(position)

          // 显示tabControll
          this.isTabFixed = position < - this.tabControllTop
        },
        // 上拉加载商品数据
        pullingUp(){
          this.getHomeGoodData(this.currentType)
          this.$refs.scroll && this.$refs.scroll.finishPullUp();
        },
        /**
         * 网络请求相关
         */
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
          let page = this.goodsList[type].page +1;
          // 网络请求
          getHomeGoodsData(type, page)
            .then( result => {
              let goods = result.data.list;
              this.goodsList[type].list.push(...goods);
              this.goodsList[type].page += 1;
            })
        }
      },
      activated() {
        this.$refs.scroll.scrollTop(0, this.saveY, 0);
        this.$refs.scroll.refresh();
      },
      deactivated() {
        // 保存当前Scroll的位置
        this.saveY = this.$refs.scroll.getScrollY();

        // 取消全局事件的监听
        this.$bus.$off("itemImgLoad", this.itemImgListerer);
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
      }
    }

</script>

<style scoped>
  #home{
    position: relative;
    /*视口*/
    height: 100vh;
    background-color: #fff;
  }
  .nav-bar{
    position: relative;
    z-index: 10;
    background-color: var(--color-high-text);
    color: #fff;
    font-weight: 700;
    letter-spacing:3px;
  }
  .tab-control-out{
    position: relative;
    /*top: 44px;*/
    z-index: 1110;
  }
  .scroll{
    position: absolute;
    top: 44px;
    bottom: 46px;
    left: 0;
    right: 0;
  }

</style>
