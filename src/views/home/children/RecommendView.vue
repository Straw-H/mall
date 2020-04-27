<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <div :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'RecommendView',
      props:{
          recommends:{
            type: Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    border-bottom:6px solid #eee;
  }
  .recommend-item{
    flex: 1;
    width:100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 32px;
  }
  .recommend-item img{
    width: 80px;
    margin-bottom: 5px;
  }

</style>
