<template>
    <div class="detail-goods">
      <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{goodsInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{goodsInfo.key}}</div>
      <div class="info-img">
<!--        <li v-for="(item, index) of goodsInfo.images">-->
        <viewer :images="goodsInfo.images">
          <img v-for="(item, index) in goodsInfo.images"
               :src="item"
               :key="index"
               @load="detailImgLoad">
        </viewer>
<!--        </li>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
      data(){
          return {
            currentCount: 0
          }
      },
      props: {
        goodsInfo:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      methods:{
        detailImgLoad(){
          if(++this.currentCount === this.goodsInfo.images.length){
            this.$emit("detailImgLoad");
          }
        }
      }
    }
</script>

<style scoped>
  .detail-goods{
    padding: 24px 0;
    border-bottom:5px solid #f2f5f8;
  }
  .info-desc{
    position: relative;
    padding: 0 18px;
  }
  .desc{
    font-size: 14px;
    line-height: 16px;
    line-height: 20px;
    padding: 12px 0;
  }
  .info-desc .start{
    position: relative;
    float: left;
    width: 120px;
    height: 1px;
    background-color: var(--color-text);
  }
  .info-desc .start::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -5px;
    background-color: var(--color-text);
  }
  .info-desc .end{
    position: relative;
    float: right;
    width: 120px;
    height: 1px;
    background-color: var(--color-text);
  }
  .info-desc .end::after{
    content: '';
    position: absolute;
    right: 0;
    width: 5px;
    height: 5px;
    top: -5px;
    background-color: var(--color-text);
  }
  .info-key{
    margin: 8px 0;
    padding: 6px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
    border-left: 4px solid var(--color-high-text);
    box-shadow: 0 2px 2px rgba(236, 236, 236, 0.35);
  }
  .info-img img{
    width: 100%;
    height: auto;
    vertical-align: bottom
  }
</style>
