<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TabControl',
      props: {
          titles: {
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
      methods: {
        itemClick(index){
          this.currentIndex = index;

          // 发生点击事件
          this.$emit("tabClick",index);
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height:42px;
    line-height:42px;
    font-size: 14px;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1;
  }
  .active{
    color: var(--color-tint)
  }
  .active span{
     border-bottom: 3px solid var(--color-tint);
    padding:8px;
   }

</style>
