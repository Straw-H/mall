<template>
  <scroll class="scroll" ref="scroll">
    <div class="cart-content">
      <cart-list-item v-for="product of cartList"
                      :product="product"/>
    </div>
  </scroll>
</template>

<script>
  import CartListItem from './CartListItem'

  import Scroll from "components/common/BScroll/BScroll"

  export default {
      name: "CartList",
      props:{
          cartList:{
            type: Array,
            default(){
              return []
            }
          }
        },
      components:{
        CartListItem,
        Scroll
      },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 98px;
  }
  .cart-content{
    overflow: hidden;
    background-color: #f2f2f2;
  }
</style>
