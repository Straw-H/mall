<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" @click="backClick">
      <img src="~assets/images/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div class="title-item"
           v-for="(item, index) of titles"
           :class="{active: index === titleIndex}"
           @click="itemClick(index)">
        {{item}}
      </div>
    </div>
    <div slot="right" @click="collectClick">
      <img src="~assets/images/common/share.svg" alt="">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
    export default {
      name: "DetailNavBar",
      components: {
        NavBar
      },
      data(){
        return {
          titles: ["商品","评论","详情","参数","推荐"]
        }
      },
      props:{
        titleIndex:{
          type:Number,
          default:0
        }
      },
      methods: {
        itemClick(index){
          this.$emit("itemClick", index)
        },
        // 返回
        backClick(){
          this.$router.back()
        },
        // 收藏
        collectClick(){
          alert("分享宝贝")
        }
      }
    }
</script>

<style scoped>
  .detail-nav-bar{
    position: relative;
    z-index: 10;
    color: var(--color-text);
    background-color: #fff;
  }
  .detail-nav-bar img{
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    background-color: #fff;
  }
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
