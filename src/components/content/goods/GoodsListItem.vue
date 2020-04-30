<template>
  <div class="goods-list-item" @click="goodsClick(goodsData.title)">
    <img :src="goodsData.show.img" alt="" :key="goodsData.shopId" @load="itemImgLoad">
    <div class="goods-info">
      <p>{{goodsData.title}}</p>
      <div class="goods-info-detal">
        <span class="price">{{goodsData.price}}</span>
        <s class="orgPrice">{{goodsData.orgPrice}}</s>
        <span class="cfav">{{goodsData.cfav}}</span>
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
      methods: {
        goodsClick(data){
          alert(data);
        },
        // 图片加载完成
        itemImgLoad(){
          // 通过事件总线发送事件
          this.$bus.$emit("itemImgLoad")
        }
      }
    }
</script>

<style scoped>
  .goods-list-item {
    width: 46%;
    margin-bottom: 6px;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .goods-info{
    padding: 4px 1px;
    font-size: 14px;
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
