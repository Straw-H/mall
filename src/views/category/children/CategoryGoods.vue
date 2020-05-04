<template>
    <div class="category-goods">
      <!-- 商品分类 -->
      <tab-control :titles="['综合','新品','销量']"
                   @tabClick="tabliClick"
                   ref="tabControlIn"></tab-control>
      <goods-list :goods="getCategoryGoods" />
    </div>
</template>

<script>
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import { tabControllMixin } from  'common/mixin'

  export default {
        name: "CategoryGoods",
    props:{
      categoryGoods:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    components:{
      TabControl,
      GoodsList,
      BackTop
    },
    mixins: [tabControllMixin],
    computed:{
      getCategoryGoods(){
        return this.categoryGoods[this.currentType]
      }
    }
    }
</script>

<style scoped>

</style>
