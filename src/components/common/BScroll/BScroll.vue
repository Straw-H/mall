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
        this.scroll.on('pullingUp', () => {
          setTimeout(() => {
            console.log("上拉加载");
          }, 3000)
          this.scroll.finishPullUp();
        })

        // 下拉刷新
        this.scroll.on('pullingDown', () => {
          setTimeout(() => {
            console.log("下拉刷新");
          }, 3000)
          this.scroll.finishPullDown();
        })
      },
      methods: {
        scrollTop(x, y, time = 400){
          this.scroll.scrollTo(x, y, time);
        },
        currentIndex(){
          // 监听滑动位置
          this.scroll.on('scroll',index => {
            this.$emit("currentIndex", index);
          })
        }
      }
    }

</script>

<style scoped>

</style>
