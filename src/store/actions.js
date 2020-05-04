import {
  ADD_COUNT,
  CUT_COUNT,
  ADD_TO_CART,
  CHANGE_CHECK,
  CHECKED_ALL
} from './mutations-type'

export default {
  addCart(context, payload){
    let oldProduct = context.state.products.find(product => product.iid === payload.iid);
    // 存在商品：数量加一
    if(oldProduct){
      context.commit(ADD_COUNT, oldProduct)
    }else{
      // 不存在：数量设置为1
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  },
  addCount(context, payload){
    context.commit(ADD_COUNT, payload)
  },
  cutCount(context, payload){
    context.commit(CUT_COUNT, payload)
  },
  // 切换选择状态
  changeChecked(context, payload){
    context.commit(CHANGE_CHECK, payload)
  },
  // 设置全选
  setCheckedAll(context, payload){
    context.commit(CHECKED_ALL, payload)
  }
}
