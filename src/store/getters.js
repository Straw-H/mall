export default {
  getCartLength(state){
    return state.products.length
  },
  getCartList(state){
    return state.products
  },
  // 获取当前选中的价格
  getCurrentPrice(state){
    return state.products.reduce(function(total, product){
      if(product.check){
        return total + product.count * product.price;
      }
      return total;
    }, 0)
  },
  // 获取当前选中的商品数量
  getCurrentLength(state){
    return state.products.reduce(function(total, product){
      if(product.check){
        return total + 1;
      }
      return total;
    }, 0)
  },
  // 判断当前是否全部中
  getIsCheckedAll(state){
    return state.products.find(item => item.check === false) === undefined;
  }
}
