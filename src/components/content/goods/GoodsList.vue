<template>
  <div class="goods-list">
    <goods-list-item v-for="(good, index) in goods " :goodsData="good"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

    export default {
        name: "GoodsList",
      components: {
        GoodsListItem
      },
      props: {
        goods: {
          type: Array,
          default(){
            return []
          }
        }
      },
      comments: {
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
</style>
