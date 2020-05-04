<template>
    <div class="detail-shop">
      <div class="shop-top">
        <img :src="shop.logo" alt="">
        <span>{{shop.name}}</span>
      </div>
      <div class="shop-middle">
        <div class="shop-middle-item middle-left">
          <div class="info-sell">
            <div class="sell-count">{{shop.sells}}</div>
            <div class="sell-text">总销量</div>
          </div>
          <div class="info-sell">
            <div class="sell-count">{{shop.goods}}</div>
            <div class="sell-text">全部宝贝</div>
          </div>
        </div>
        <div class="shop-middle-item middle-right">
          <ul class="shop-score">
            <li v-for="item of shop.score">
              <span class="item-name">{{item.name}}</span>
              <span class="item-score" :class="{unScore: !item.isBetter}">{{item.score}}</span>
              <span class="item-better" :class="{unBetter: !item.isBetter}">{{item.isBetter ? "高" : "低"}}</span>
            </li>
          </ul>
          <div class="score-item"></div>
          <div class="score-item"></div>
        </div>
      </div>
      <div class="shop-bottom">
        <div @click="goShop">进店逛逛</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
      data(){
        return {
          scoreStatus: true
        }
      },
      props:{
          shop:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      methods: {
        goShop(){
          alert("进来玩呀")
        }
      }
    }
</script>

<style scoped>
  .detail-shop{
    padding: 18px 12px;
    border-bottom:5px solid #f2f5f8;
  }
  .shop-top{
    line-height: 54px;
  }
  .shop-top img{
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border:2px solid #eee;
    vertical-align: middle;
  }
  .shop-top span{
    margin-left: 18px;
    font-size: 18px;
  }
  .shop-middle{
    padding: 18px 0;
    display: flex;
  }
  .shop-bottom{
    margin-top: 18px;
  }
  .shop-middle .middle-left{
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .shop-middle-item{
    display: flex;
    flex: 1;
    justify-content: space-around;
    text-align: center;
  }
  .shop-middle-item .info-sell{
    align-items: center;
    padding-top: 14px;
  }
  .info-sell .sell-count{
    font-size: 18px;
    color: #333333;
  }
  .info-sell .sell-text{
    margin-top: 6px;
    font-size: 12px;
  }
  .shop-bottom div{
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
    margin: 0 auto;
    font-size: 14px;
    background-color: #f2f5f8;
    color: var(--color-text)
  }
  ul.shop-score{
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
  }
  .shop-score li{
    display: flex;
    padding: 2px 0;
  }
  .shop-score li span{
    flex: 3;
  }
  .shop-score .item-score, .shop-score .item-better{
    text-align: left;
    flex: 1;
    color: #69d423;
  }
  .shop-score .item-better{
    text-align: center;
    color:#f2f2f2;
    background-color: #69d423;
    padding: 1px 0;
    font-size: 14px;
    border-radius: 10px;
  }
  .shop-score .unScore{
    color:var(--color-price);
  }
  .shop-score .unBetter{
    background-color: var(--color-price);
  }
</style>
