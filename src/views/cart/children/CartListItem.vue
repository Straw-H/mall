<template>
  <div class="product-item" v-if="Object.keys(product).length !== 0">
    <div class="shopName">{{product.shopName}}</div>
    <div class="item-info" :class="{checked : product.check}">
      <div class="product-option" @click="selectChange">
        <input type="checkbox"
               :id="product.iid"
               class="checkProduct"
               :checked="product.check">
        <div class="label"></div>
      </div>
      <div class="product-img">
        <viewer :images="[product.image]">
          <img v-lazy="product.image" alt="" :key="product.iid">
        </viewer>
      </div>
      <div class="product-info">
        <div class="product-title" @click="toDetailClick">{{product.title}}</div>
        <div class="product-desc" @click="toDetailClick">{{product.desc}}</div>
        <div class="product-detail">
          <span class="price">{{product.price | setPrice}}</span>
          <span class="option">
            <span @click="cutProductClick">
              <img src="~assets/images/cart/cut.svg" alt="">
            </span>
            <span class="count">{{product.count}}</span>
            <span @click="addProductClick">
              <img src="~assets/images/cart/add.svg" alt="">
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
      name: "CartListItem",
      props:{
        product:{
          type: Object,
          default(){
            return {}
          }
        }
      },
      methods:{
        // 前往详情
        toDetailClick(){
          let id = this.product.iid;
          if(id == undefined){
            alert(this.product.title)
            return;
          }
          this.$router.push({
            path: "/detail",
            query: {
              id: id
            }
          })
        },
        selectChange(){
          this.$store.dispatch("changeChecked", this.product)
        },
        cutProductClick(){
          if(this.product.count - 1 < 1){
            alert("该宝贝不能减少了呦~")
            return;
          }
          this.$store.dispatch("cutCount", this.product)
        },
        addProductClick(){
          if(this.product.count + 1 > 10){
            alert("不能再多了")
            return;
          }
          this.$store.dispatch("addCount", this.product)
        }
      },
      filters:{
        setPrice(price){
          return "￥" + price;
        }
      }
    }
</script>

<style scoped>
.product-item{
  margin-top: 4px;
  background-color: #fff;
  padding: 6px 12px;
}
  .shopName{
    padding-left: 28px;
    line-height: 32px;
  }
  .item-info{
    display: flex;
    flex-wrap: wrap;
    padding-top: 6px;
  }
  .product-option{
    width: 28px;
    line-height: 112px;
    text-align: center;
  }
.product-option input{
  /*zoom: 124%;*/
  display: none;
}
  .product-img img{
    width: 76px;
    height: 112px;
    border-radius: 10px;
    vertical-align: bottom;
    margin-left: 2px;
  }
  .product-info{
    flex: 1;
    padding: 0 8px;
  }
  .product-title, .product-desc{
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
    line-height: 24px;
  }
.product-title{
  font-size: 14px;
}
.product-desc{
  background-color: #f2f2f2;
  border-radius: 10px;
  -webkit-line-clamp: 1;
  font-size: 12px;
  padding: 3px 12px;
  line-height: normal;
}
  .product-detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    line-height: 28px;
  }
  .price {
    color: var(--color-price);
    font-size: 18px;
  }
  .option{
    display: flex;
    flex-wrap: wrap;
    width: 92px;
    justify-content: space-between;
    font-size: 16px;
  }
.option img{
  vertical-align: middle;
}
  .option .count{
    display: inline-block;
  }

/*  修改checbox的样式*/
  .product-option{
    position: relative;
  }
  input.checkProduct + .label{
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    top: 40px;
    left: 2px;
    border-radius: 50%;
    background: url("~assets/images/cart/unchecked.svg");
    background-size: cover;
    background-color: #fff;

  }
input.checkProduct:checked + .label{
  background: url("~assets/images/cart/checked.svg");
  background-size: cover;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
  .checked{
    background-color: #f9f9f9;
    border-radius: 10px;
  }
</style>
