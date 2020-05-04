<template>
    <div class="detail">
      <detail-nav-bar ref="detailNavBar"
                      @itemClick="itemClick"
                      :titleIndex="titleIndex"/>
      <scroll ref="scroll"
              class="detail-scroll"
              @currentIndex="currentPosition"
              :probe-type="3"
              :data="[topImages, goods, shop, userRate, goodsInfo, goodsSpecs, detailRecommend]">
        <detail-swiper :top-images="topImages"
                       ref="swiper"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-user-rate :user-rate="userRate"
                          ref="rate"/>
        <detail-goods-info :goods-info="goodsInfo"
                           @detailImgLoad="detailImgLoad"
                           ref="goodsInfo"/>
        <detail-shop-specs :goods-specs="goodsSpecs"
                           ref="specs"/>

        <detail-recommend-info :detail-recommend="detailRecommend"
                               ref="recommend"/>
      </scroll>
      <detail-tab-bar :shop-name="shop.name" @addCartClick="addCartClick"/>
      <!-- 回到顶部 -->
      <back-top @click.native="backTop"
                v-show="showBackTop"/>
    </div>
</template>

<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from './children/DetailSwiper'
  import DetailBaseInfo from './children/DetailBaseInfo'
  import DetailShopInfo from './children/DetailShopInfo'
  import DetailGoodsInfo from './children/DetailGoodsInfo'
  import DetailShopSpecs from './children/DetailShopSpecs'
  import DetailUserRate from './children/DetailUserRate'
  import DetailRecommendInfo from './children/DetailRecommendInfo'
  import DetailTabBar from './children/DetailTabBar'

  import Scroll from "components/common/BScroll/BScroll"
  import BackTop from 'components/content/backTop/BackTop'

  import { itemImgListerer, backTopMixin } from  'common/mixin'

  import {
    getHomeGoodsDetail,
    getDetailRecommend,
    Goods,
    Shop,
    ShopDetailInfo,
    ShopDetailSpecs,
    GoodsUserRate
  } from 'network/detail'

    export default {
        name: "Detail",
      components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailShopSpecs,
        DetailUserRate,
        DetailRecommendInfo,
        DetailTabBar,
        Scroll,
        BackTop
      },
      data(){
          return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            goodsInfo: {},
            goodsSpecs: {},
            userRate: {},
            detailRecommend: [],
            // 存储各组件的位置
            themeOpt: [],
            titleIndex: 0,
            rateY: 0
          }
      },
      created(){
        this.iid = this.$route.query.id

        // 商品详情数据
        this.getGoodDetail();

        // 推荐商品
        this.getRecommend();
      },
      destroyed() {
        // 取消全局事件的监听
        this.$bus.$off("itemImgLoad", this.itemImgListerer);
      },
      mixins: [itemImgListerer, backTopMixin],
      methods: {
        // 添加购物车
        addCartClick(){
          const product = {
            iid : this.iid,
            shopName : this.shop.name,
            title : this.goods.title,
            price : this.goods.eralPrice,
            image : this.topImages[0],
            desc : this.goods.desc,
            check : false
          }
          this.$store.dispatch("addCart", product)
          alert("添加购物车成功")
        },
        // 1、获取需要的五个offsetTop
        _getOffsetTop(){
          // 每次渲染完清空位置信息
          this.themeOpt = [];
          // 顶部
          this.themeOpt.push(0)
          // 用户评论
          this.themeOpt.push(this.$refs.rate.$el.offsetTop || 0);
          // 商品详情
          this.themeOpt.push(this.$refs.goodsInfo.$el.offsetTop || 0)
          // 参数
          this.themeOpt.push(this.$refs.specs.$el.offsetTop || 0)
          // 推荐
          this.themeOpt.push(this.$refs.recommend.$el.offsetTop || 0)
          // 填充最大值
          this.themeOpt.push(Number.MAX_VALUE)
        },
        // 2、监听滚动到哪一个主题
        _listenScrollTheme(currentY){
          /**
           * [0,687,902,6895,7776, 最大值]
           * 1、index=0：position >= 0 $$ position < 687
           * 2、index=1：position >= 687 $$ position < 902
           * 3、index=2：position >= 902 $$ position < 6895
           * 4、index=3：position >= 6895 $$ position < 7776
           * 5、index=4：position >= 7776 $$ position < 最大值
           */
          let opCount = this.themeOpt.length;
          // 1、
          /*for (let i in this.themeOpt){
            let index = parseInt(i);
            if((index < opCount && currentY >= this.themeOpt[index] && currentY < this.themeOpt[index + 1])
              || (this.titleIndex !== index && index === opCount - 1 && currentY >= this.themeOpt[index])){
              if(this.titleIndex !== index){
                this.titleIndex = index;
              }
              break;
            }
          }*/
          // 2、优化
          for (let i in this.themeOpt) {
            let index = parseInt(i);
            if(currentY >= this.themeOpt[index] && currentY < this.themeOpt[index + 1]){
              if(this.titleIndex !== index){
                this.titleIndex = index;
              }
              break;
            }
          }
        },
        // 点击NavBar时的位置
        itemClick(index){
          this.titleIndex = index;
          // 点击title滚动到对应的数据
          this.$refs.scroll.scrollTop(0, - this.themeOpt[index], 400)
        },
        // 详情图片加载完成
        detailImgLoad(){
          // 使用防抖
          // debounce(this._getOffsetTop(), 200)
          this._getOffsetTop()
          this.$refs.scroll.refresh();
        },
        // Better-Scroll当前位置
        currentPosition(position){
          // 显示BackTop
          this.listenShowBackTop(position.y)

          // 根据滚动位置设置navBar主题
          this._listenScrollTheme(-position.y);
        },
        // 商品详情数据
        getGoodDetail(){
            getHomeGoodsDetail(this.iid).then(result => {
              let data = result.result;
              // 商品轮播图
              this.topImages.push(...data.itemInfo.topImages)
              // 商品基本信息
              this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
              // 商家信息
              this.shop = new Shop(data.shopInfo);
              // 商品详情
              this.goodsInfo = new ShopDetailInfo(data.detailInfo)
              // 商品规格
              this.goodsSpecs = new ShopDetailSpecs(data.itemParams)
              // 用户评论
              if(data.rate.cRate > 0){
                this.userRate = new GoodsUserRate(data.rate)
              }
            }, error => {
              alert(error);
            })
          },
        // 推荐商品数据
        getRecommend(){
          getDetailRecommend().then((result, error) => {
            if(error) return;
            this.detailRecommend = result.data.list;
          })
        }
      }
    }
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
    z-index: 101;
    background-color: #fff;
  }
  .detail-scroll{
    /*height: calc(100% - 44px);*/
    position: absolute;
    top: 44px;
    bottom: 52px;
  }
</style>
