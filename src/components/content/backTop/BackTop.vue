<template>
    <div class="back-top">
      <img src="~assets/images/common/top.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 58px;
    right: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 10px;
    width: 36px;
    height: 36px;
  }
  .back-top img{
    width: 36px;
    height: 36px;
  }

</style>
