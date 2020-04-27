<template>
  <swiper>
<<<<<<< HEAD
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" :title="item.title">
      </a>
=======
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item.image" :alt="item.title" :title="item.title">
>>>>>>> 2fa94f5705d0299da9d144bacb0e40f29efae2de
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
