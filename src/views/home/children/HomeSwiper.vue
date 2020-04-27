<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item.image" :alt="item.title" :title="item.title">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

    export default {
        name: 'HomeSwiper',
      props: {
          banners: {
            type: Array,
            default(){
              return []
            }
          }

      },
      components:{
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>

</style>
