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
          // pullDownRefresh: this.pullDownRefresh,
          pullDownRefresh: {
            threshold: 50,
            stop: 20
          },
          // 开启动画
          bounce: {
            top: true,
            bottom: true,
            left: true,
            right: true
          },
          // 开启滚动条
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          },
          //  PC 端的鼠标滚轮
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          // 缩放比例
          zoom: {
            start: 1,
            min: 1,
            max: 1
          }
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
        },
        // 获取Y位置
        getScrollY(){
          return this.scroll ? this.scroll.y : 0;
        }
      }
    }

</script>

<style scoped>

</style>
