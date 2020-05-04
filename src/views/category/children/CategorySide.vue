<template>
  <scroll id="side-scroll">
    <div class="category-side-list">
      <div class="side-list-item"
           :class="{active: index === currentIndex}"
           v-for="(item, index) of category"
           @click="sideItemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "components/common/BScroll/BScroll";

    export default {
        name: "CategorySide",
      components:{
        Scroll
      },
      props:{
        category:{
          type: Array,
          default(){
            return []
          }
        }
      },
      data(){
          return {
            currentIndex: 0
          }
      },
      methods:{
        sideItemClick(index){
          this.currentIndex = index
          this.$emit("sideCategory", index)
        }
      }
    }
</script>

<style scoped>
  #side-scroll{
    overflow: hidden;
  }
  .category-side-list{
    width: 92px;
    height: 100%;
    background-color: #fff;
    text-align: center;
  }
  .side-list-item{
    height: 45px;
    line-height: 45px;
    font-size: 0.938rem;
  }
  .side-list-item.active{
    font-weight: 600;
    background-color: #F2F2F2;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-tint);
   }
</style>
