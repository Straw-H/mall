import { debounce } from  'common/util'
import { goodsType, BACK_POSITION } from 'common/const'

/**
 * 混入-组件中使用相同的代码进行整合
 * @type {{data(): {}, mounted(): void}}
 */

/**
 * 监听事件总线事件：itemImgLoad，刷新Scroll
 * @type {{data(): {itemImgListerer: null}, mounted(): void}}
 */
export const itemImgListerer = {
  data(){
    return {
      itemImgListerer: null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh, 70);

    this.itemImgListerer = ()=>{
      // 防抖动刷新
      refresh();
    }
    // 监听事件总线事件
    this.$bus.$on("itemImgLoad", this.itemImgListerer)
  }
}

/**
 * 回到顶部
 * @type {{}}
 */
export const backTopMixin = {
  data(){
    return {
      // 控制回到顶部
      showBackTop: false
    }
  },
  methods:{
    // 回到顶部
    backTop(){
      this.$refs.scroll && this.$refs.scroll.scrollTop(0, 0, 600);
    },
    listenShowBackTop(position){
      // 显示回到顶部
      this.showBackTop = position < BACK_POSITION
    }
  }

}

export const tabControllMixin = {
  data(){
    return {
      // 当前展示数据的类型
      currentType: goodsType.POP,
      currentTabIndex: 0
    }
  },
  methods:{
  // 切换商品类型
  tabliClick(index){
    switch (index) {
      case 0:
        this.currentType = goodsType.POP;
        break;
      case 1:
        this.currentType = goodsType.NEW;
        break;
      case 2:
        this.currentType = goodsType.SELL;
    }
    this.currentTabIndex = index;
  }
  }
}
