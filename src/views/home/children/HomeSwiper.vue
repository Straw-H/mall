<template>
  <viewer :images="banners">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
          <img :src="item.image" :alt="item.title" :title="item.title" @load="swiperImgLoad">
      </swiper-item>
    </swiper>
  </viewer>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

    export default {
      name: 'HomeSwiper',
      data(){
        return{
          isImgLoad : false
        }
      },
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
      },
      methods: {
        swiperImgLoad(){
          if(!this.isImgLoad){
            this.$emit("swiperImgLoad");
            this.isImgLoad = true;
          }
        }
      }
    }
</script>

<style scoped>

</style>
