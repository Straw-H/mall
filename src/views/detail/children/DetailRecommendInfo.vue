<template>
  <div class="detail-recommend">
    <div class="recommend-key">热门推荐</div>
    <goods-list :goods="detailRecommend"/>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: 'DetailRecommendInfo',
    props:{
      detailRecommend:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsList
    }
  }
</script>

<style scoped>
  .recommend-key{
    margin: 8px 0;
    padding: 6px 16px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
    border-left: 4px solid var(--color-high-text);
    box-shadow: 0 2px 2px rgba(236, 236, 236, 0.35);
  }
</style>
