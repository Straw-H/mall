<template>
  <div class="goods-list-item" @click="goodsClick">
    <div class="item-img">
      <img v-lazy="showImage" class="burl">
      <img v-lazy="showImage" alt="" :key="imageKey" @load="itemImgLoad" class="show">
    </div>
    <div class="goods-info">
      <p>{{goodsData.title}}</p>
      <div class="goods-info-detal">
        <span class="price">{{goodsData.price | setPrice}}</span>
        <s class="orgPrice">{{goodsData.orgPrice}}</s>
<!--        <span class="cfav">{{goodsData.cfav}}</span>-->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
        goodsData: {
            type:Object,
            default(){
              return {}
            }
          }
      },
      computed:{
        showImage(){
          return this.goodsData.image || this.goodsData.img || this.goodsData.show.img
        },
        imageKey(){
          return this.goodsData.iid || this.goodsData.shop_id
        }
      },
      methods: {
        goodsClick(){
          let id = this.goodsData.iid;
          if(id == undefined){
            alert(this.goodsData.title)
            return;
          }
          this.$router.push({
            path: "/detail",
            query: {
              id: id
            }
          })

        },
        // 图片加载完成
        itemImgLoad(){
          // 通过事件总线发送事件
          this.$bus.$emit("itemImgLoad")
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
  .goods-list-item {
    width: 100%;
    height: auto;
    margin-bottom: 6px;
    padding: 0 4px;
  }
  .item-img{
    position: relative;
    height: calc(100% - 78px);
    border-radius: 4px;
    overflow: hidden;
  }
  .item-img img{
    width: 100%;
    vertical-align: top;
  }
  .item-img img.burl{
    height: 100%;
    filter: blur(6px);
  }
  .item-img img.show{
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .goods-info{
    padding: 12px 1px;
    font-size: 14px;
    height: 78px;
  }
  .goods-info p{
    width: 100%;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文字一行显示 */
    /*white-space: nowrap;*/
    /*设置成弹性盒子 */
    display: -webkit-box;
    /*显示的个数 */
    -webkit-line-clamp: 2;
    /* 属性规定框的子元素应该被水平或垂直排列。 */
    -webkit-box-orient: vertical;
  }
  .goods-info-detal{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
  }
  .goods-info span{
    /*flex: 1;*/
  }
  .price{
    font-size: 16px;
    color: var(--color-tint)
  }
  .orgPrice{
    color: #777777;
    display: table-cell;
    vertical-align: bottom;
  }
</style>
