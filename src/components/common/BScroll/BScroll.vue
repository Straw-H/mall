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
        this.scroll = new BetterScroll(this.$refs.scrollRange, {
          click: true,
          probeType: 3
        });

        // 监听滑动位置
        this.scroll.on('scroll',index => {
          console.log(index);
        })
      }
    }

</script>

<style scoped>

</style>
