<template>
    <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
      <p class="title">{{goods.title}}</p>
      <div class="goods-price">
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="olderPrice">{{goods.oldPrice}}</span>
        <span v-if="goods.discount !== ''" class="discount">{{goods.discount}}</span>
      </div>
      <div class="other-info">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length - 1].name}}</span>
      </div>
      <div class="service-info">
        <span class="service-item" v-for="index of goods.services.length - 1">
          <img :src="goods.services[index -1].icon" alt="">
          <span>{{goods.services[index - 1].name}}</span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
      props: {
          goods: {
            type: Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .detail-base-info{
    padding: 14px 12px 0 12px;
    font-size: 16px;
    border-bottom:5px solid #f2f5f8;
  }
  .goods-price{
    margin: 16px 0;
  }
  .newPrice{
    font-size: 26px;
    color: var(--color-price);
  }
  .olderPrice{
    margin-left: 8px;
    font-size: 14px;
    text-decoration: line-through;
  }
  .discount{
    margin-left: 8px;
    color:#fff;
    background-color: var(--color-price);
    padding: 4px 6px;
    border-radius: 10px;
    font-size: 12px;
  }
  .other-info{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .service-info{
    display: flex;
    justify-content: space-between;
    -webkit-box-pack: justify;
    font-size: 12px;
    padding: 16px 0;
  }
  .service-item img{
    width: 16px;
    height: 16px;
    position: relative;
    vertical-align: middle;
  }
  .service-item span{
    padding-left: 6px;
    vertical-align: middle;
  }
</style>
