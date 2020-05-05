<template>
    <div class="count-price">
      <div class="select-all">
        <input type="checkbox" id="selectAll" @change="checkedAll" :checked="isCheckedAll">
        <label class="label" for="selectAll"></label>
        <label class="select-text" for="selectAll">全选</label>
      </div>
      <span class="total">合计：<span class="price">{{currentPrice | getFinalPrice}}</span></span>
      <div class="pay" @click="toPayClick">
        结算<span v-show="currentLength">({{currentLength}})</span>
      </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

    export default {
        name: "CartBottomBar",
      computed:{
          ...mapGetters({
            currentPrice : 'getCurrentPrice',
            currentLength : 'getCurrentLength',
            isCheckedAll : 'getIsCheckedAll'
          })
      },
      // 过滤器
      filters: {
        getFinalPrice(price) {
          return "￥" + price.toFixed(2);
        }
      },
      methods:{
        toPayClick(){
          this.$toast.show("请支付：" + this.currentPrice + "元")
        },
        checkedAll(event){
          let status = event.target.checked
          this.$store.dispatch("setCheckedAll", status)
        },
        checkedAllLabel(event){
          this.checkedAll(event)
        }
      }
    }
</script>

<style scoped>
  .count-price{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 46px;
    height: 52px;
    background-color: #fff;
    border-top: 1px solid rgba(100,100,100,.1);
    display: flex;
    flex-wrap: wrap;
    padding: 4px 12px;
    line-height: 44px;
  }
  .select-all .select-text{
    padding: 0 12px;
    font-size: 14px;
  }
  .select-all input{
    zoom: 80%;
    margin-right: 10px;
    position: relative;
    top: 3px;
    left: 10px;
  }
  .total{
    flex: 2;
  }
  .total .price{
    color: var(--color-price);
    font-size: 18px;
  }
  .pay{
    background-color: var(--color-high-text);
    color: #fff;
    text-align: center;
    border-radius: 18px;
    height: 32px;
    line-height: 32px;
    margin-top: 5px;
    flex: 1;
    font-size: 14px;
  }
  /*  修改checbox的样式*/
  .select-all{
    position: relative;
  }
  #selectAll + .label{
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    top: 10px;
    left: 0;
    border-radius: 50%;
    background: url("~assets/images/cart/unchecked.svg");
    background-size: cover;
    background-color: #fff;
  }
  #selectAll:checked + .label{
    background: url("~assets/images/cart/checked_all.svg");
    background-size: cover;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
</style>
