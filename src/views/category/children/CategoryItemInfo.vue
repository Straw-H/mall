<template>
    <div class="category-item-info">
        <div v-for="item of getSubcategory" class="subcategory-item" @click="itemClick(item)">
          <img v-lazy="item.image" alt="" :key="item.acm" @load="categoryImgLoad">
          <div class="item-text">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CategoryItemInfo",
      props:{
        subcategory:{
          type: Array,
          default(){
            return []
          }
        }
      },
      computed:{
        getSubcategory(){
          this.currentCount = 0
          return this.subcategory;
        }
      },
      data(){
        return {
          currentCount: 0
        }
      },
      methods:{
        itemClick(item){
          this.$toast.show(item.title)
        },
        categoryImgLoad(){
          if(++this.currentCount === this.subcategory.length) {
            this.$emit("categoryImgLoad")
          }
        }
      }
    }
</script>

<style scoped>
  .category-item-info{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 16px 8px 4px;
    background-color: #fff;
    overflow: hidden;
  }
  .subcategory-item{
    padding: 6px;
    text-align: center;
  }
  .category-item-info:after {
     content: "";
     flex: 3;
   }
  .subcategory-item img{
    width: 78%;
    vertical-align: middle;
  }
  .subcategory-item .item-text{
    padding: 12px 0;
    font-size: 14px;
  }

</style>
