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
      props: {
        probeType:{
          type: Number,
          default: 0
        },
        pullUpLoad:{
          type: Boolean,
          default: false
        },
        pullDownRefresh:{
          type: Boolean,
          default: false
        }
      },
      comments:{
        BetterScroll
      },
      mounted() {
        // 挂载完后获取元素
        this.scroll = new BetterScroll(this.$refs.scrollRange, {
          // 开启事件
          click: true,
          // 监听滑动位置：记录每次
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          pullDownRefresh: this.pullDownRefresh
        });

        this.currentIndex();

        // 上拉加载
        this.pullingUp();

        // 下拉刷新
        this.scroll.on('pullingDown', () => {
          setTimeout(() => {
            console.log("下拉刷新");
          }, 3000)
          this.scroll && this.scroll.finishPullDown();
        })
      },
      methods: {
        scrollTop(x, y, time = 400){
          this.scroll && this.scroll.scrollTo(x, y, time);
        },
        currentIndex(){
          // 监听滑动位置
          this.scroll.on('scroll',index => {
            this.$emit("currentIndex", index);
          })
        },
        // 重新计算better-scroll的高度
        refresh(){
          this.scroll && this.scroll.refresh()
        },
        // 上拉加载
        pullingUp(){
          this.scroll.on('pullingUp', () => {
            this.$emit("pullingUp")
          })
        },
        // 通知数据加载完毕
        finishPullUp(){
          this.scroll && this.scroll.finishPullUp();
        }
      }
    }

</script>

<style scoped>

</style>
