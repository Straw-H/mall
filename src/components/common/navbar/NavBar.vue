<template>
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center">标题</slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 10000;
    box-shadow: 0 2px 2px rgba(202, 208, 204, 0.35);
  }
  .nav-left, .nav-right{
    width:60px;
  }
  .nav-center{
    flex: 1;
  }

</style>
