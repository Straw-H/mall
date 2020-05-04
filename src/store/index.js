import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import vux from './modules/moduleA'

Vue.use(Vuex)

const state = {
  // 购物车
  products: [
    // {"iid":"1lyp2vg","shopName":"棉之语精品服饰","title":"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤","price":"39.00","image":"//s11.mogucdn.com/mlcdn/c45406/180423_0h6j2abd17hka9d4j7dlk710d3af9_640x960.jpg","desc":"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤","count":1,check: false},
    // {"iid":"1m7dvsq","shopName":"优米女孩","title":"2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣","price":"39.00","image":"//s11.mogucdn.com/mlcdn/c45406/180818_8fid15g78c3i80854aa6j855hbbcj_640x960.jpg","desc":"2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣","count":1,check: false},
    // {"iid":"1m8jzwo","shopName":"卓尔千衣","title":"chic港味秋装女套装新款2018韩版格子西装外套+显瘦高腰破洞小脚裤学院风时尚套装两件套","price":"55.00","image":"//s11.mogucdn.com/mlcdn/c45406/180914_4k0k14g1608gc04k3jh1c6jac47fi_640x960.jpg","desc":"新品","count":1,check: false}
  ]
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        vux
    }

})

export default store
