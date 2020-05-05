<template>
    <div class="detail-bar">
      <div class="bar-item">
        <div @click="shopClick">
          <img src="~assets/images/common/shop.svg" alt="">
          <div class="text">店铺</div>
        </div>
        <div @click="customerClick">
          <img src="~assets/images/common/customer.svg" alt="">
          <div class="text">客服</div>
        </div>
        <div @click="collectClick">
          <img :src="collectImg" alt="">
          <div class="text">{{this.isCollect ? "收藏" : "已收藏"}}</div>
        </div>
      </div>
      <div class="bar-item option">
        <div class="cart" @click="addCartClick">加入购物车</div>
        <div class="buy" @click="buyClick">立即购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailTabBar",
      props:{
        shopName:{
          type:String,
          default:"Straw-H"
        }
      },
      data(){
        return {
          isCollect: true
        }
      },
      computed: {
        collectImg(){
          return require(this.isCollect ? "assets/images/common/collect.svg": "assets/images/common/collect_active.svg")
        }
      },
      methods:{
        // 商家
        shopClick(){
          alert(this.shopName)
        },
        // 客服
        customerClick(){
          alert("联系商家")
        },
        // 收藏
        collectClick(){
          this.isCollect = !this.isCollect
          if(this.isCollect){
            alert("取消收藏成功")
          }
        },
        addCartClick(){
          this.$emit("addCartClick")
        },
        buyClick(){
          this.$emit("buyClick")
        }
      }

    }
</script>

<style scoped>
  .detail-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    text-align: center;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 2px rgba(202, 208, 204, 0.35);
    display: flex;
    z-index: 1000;
  }
  .bar-item{
    display: flex;
    flex: 1;
    padding: 6px 0 2px;
    font-size: 12px;
  }
  .bar-item > div{
    flex: 1;
  }
  .bar-item img{
    width: 24px;
  }
  .detail-bar .option{
    font-size: 14px;
    padding: 10px 4px;
    color:#fff;
    line-height: 32px;
  }
  .option .cart{
    background-color: #fff;
    border-radius: 18px 0 0 18px;
    background-color: #b157ff;
  }
  .option .buy{
    background-color: #fff;
    border-radius: 0 18px 18px 0;
    background-color: var(--color-high-text);
  }

</style>
