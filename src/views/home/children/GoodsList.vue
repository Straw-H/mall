<template>
  <div class="goods-list">

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
          default:[]
        }
      },
      comments: {
        GoodsListItem
      }
    }
</script>

<style scoped>

</style>
