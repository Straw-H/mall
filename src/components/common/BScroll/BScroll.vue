<template>
  <div class="wrapper" ref="scrollRange">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BetterScroll from 'better-scroll'
    export default {
      name: "BScroll",
      data(){
        return {
          scroll: null
        }
      },
      comments:{
        BetterScroll
      },
      mounted() {
        this.scroll = new BetterScroll(this.$refs.scrollRange, {});
      }
    }

</script>

<style scoped>

</style>
