<template>
  <viewer :images="topImages">
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages">
        <img :src="item" :key="index">
      </swiper-item>
    </swiper>
  </viewer>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

    export default {
        name: "DetailSwiper",
      data(){
          return {
            isImgLoad: false
          }
      },
      props: {
          topImages: {
            type: Array,
            default(){
              return []
            }
          }
      },
      components: {
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>
  .detail-swiper{
    height: 240px;
  }
</style>
