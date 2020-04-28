<template>
  <div class="wrapper">
    <div class="content" ref="scrollRange">
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
