<template>
    <div id="category">
      <nav-bar><div slot="center">商品分类</div></nav-bar>

      <div class="content">
        <category-side class="side-content"
                       :category="category"
                       @sideCategory="sideCategory"/>

        <scroll class="subcategory-content"
                :probe-type="3"
                @currentIndex="currentPosition"
                ref="scroll" :data="[subcategory, categoryGoods]">
          <div>
            <category-item-info :subcategory="subcategory" @categoryImgLoad="categoryImgLoad"/>
            <category-goods :category-goods="categoryGoods"
                            ref="goods"/>
          </div>
        </scroll>

      </div>
      <!-- 回到顶部 -->
      <back-top @click.native="backTop" v-show="showBackTop"/>
    </div>
</template>

<script>
  import CategorySide from './children/CategorySide'
  import CategoryItemInfo from './children/CategoryItemInfo'
  import CategoryGoods from './children/CategoryGoods'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from "components/common/BScroll/BScroll"
  import BackTop from 'components/content/backTop/BackTop'

  import { backTopMixin, tabControllMixin } from  'common/mixin'

  import {
    getCategory,
    getSubCategory,
    getCategoryGoods
  } from 'network/category'
  import {goodsType} from "../../common/const";

    export default {
      name: 'Category',
      components: {
        CategorySide,
        CategoryItemInfo,
        CategoryGoods,
        NavBar,
        Scroll,
        BackTop
      },
      mixins: [backTopMixin, tabControllMixin],
      data(){
        return {
          // 分类列表
          category:[],
          // 子分类列表
          subcategory: [],
          // 分类中的商品列表
          categoryGoods: {
            "pop":[],
            "sell": [],
            "new":[]
          },
          currentCategory: 0,
          showTabControllTop: 0
        }
      },
      created() {
        this._getCategory()
      },
      methods:{
        // 获取tabControll的offsetTop
        categoryImgLoad(){
          this.showTabControllTop = this.$refs.goods.$el.offsetTop
          console.log(this.showTabControllTop)
        },
        // 当前位置
        currentPosition(index){
          let position = index.y;
          // 显示BackTop
          this.listenShowBackTop(position)

          // 显示tabControll
          this.isTabFixed = position < - this.tabControllTop
        },
        // 侧边分类数据
        sideCategory(index){
          if(this.currentCategory !== index){
            this.currentCategory = index;
            // 获取子分类数据
            this._getSubCategory();
            // 子类商品数据
            this._setCategoryGoods();
          }
        },
        _setCategoryGoods(){
          // 获取第一条记录的商品
          this._getCategoryGoods(goodsType.POP)
          this._getCategoryGoods(goodsType.SELL)
          this._getCategoryGoods(goodsType.NEW)
        },
        /**
         * 获取网络数据
         */
        // 获取分类数据
        _getCategory(){
          getCategory().then(res => {
            let data = res.data;
            this.category = data.category.list;

            // 默认请求第一条记录
            this._getSubCategory();
            this._setCategoryGoods();
          })
        },
        // 获取子分类数据
        _getSubCategory(){
          let maitKey = this.category[this.currentCategory].maitKey;
          getSubCategory(maitKey).then(res => {
            this.subcategory = res.data.list;
          })
        },
        // 获取子分类中的商品
        _getCategoryGoods(type){
          let miniWallkey = this.category[this.currentCategory].miniWallkey;
          getCategoryGoods(miniWallkey, type).then(res => {
            this.categoryGoods[type] = res
          })
        }
      }
    }
</script>

<style scoped>
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 46px;
    display: flex;
    background-color: #F2F2F2;
  }
  .side-content{
    background-color: #fff;
  }
  .subcategory-content{
    flex: 1;
    padding: 8px 4px;
    border-left: 4px solid #F2F2F2;
  }
  .tab-control{
    position: absolute;
    top: 0;
    flex: 1;
  }
</style>
