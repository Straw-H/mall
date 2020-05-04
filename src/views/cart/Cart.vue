<template>
    <div id="cart">
      <nav-bar>
        <div slot="left" class="title-count">全部({{cartLength}})</div>
        <div slot="center">购物车</div>
        <div slot="right">
          <img src="~assets/images/common/message.svg" alt="" @click="messageClick">
        </div>
      </nav-bar>
      <cart-list :cart-list="cartList"/>
      <div v-show="Object.keys(cartList).length === 0" class="empty_cart">
        <div class="empty_content">
          <img src="~assets/images/cart/empty_cart.svg" alt="">
          <div class="text">购物车是空的</div>
          <div class="tips">买，不要犹豫！</div>
        </div>
      </div>
      <cart-bottom-bar v-show="Object.keys(cartList).length !== 0"/>
    </div>
</template>

<script>
  import CartList from './children/CartList'
  import CartBottomBar from './children/CartBottomBar'

  import NavBar from 'components/common/navbar/NavBar'

  import BackTop from 'components/content/backTop/BackTop'

  import { mapGetters } from 'vuex'

    export default {
        name: 'Cart',
      components: {
        CartList,
        CartBottomBar,
        NavBar,
        BackTop
      },
      computed:{
        // 将getters的方式映射为计算属性
        ...mapGetters({
          cartLength: 'getCartLength',
          cartList: 'getCartList'
        })
      },
      methods:{
        messageClick(){
          alert("消息中心")
        }
      }
    }
</script>

<style scoped>
  #cart{
    background-color: #fff;
  }
  .nav-bar img{
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
  }
.title-count{
  position: absolute;
  font-size: 12px;
  letter-spacing: 1px;
  padding-left: 12px;
}
  .empty_cart{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
  }
  .empty_cart .empty_content{
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 3px;
    color: var(--color-high-text);
    font-size: 18px;
  }
  .empty_content .text{
    padding: 12px 0;
  }
  .empty_content .tips{
    font-size: 12px;
    color: #a3a1b3;
  }
</style>
