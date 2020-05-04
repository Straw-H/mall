import {
  ADD_COUNT,
  CUT_COUNT,
  ADD_TO_CART,
  CHANGE_CHECK,
  CHECKED_ALL
} from './mutations-type'

export default {
  [ADD_COUNT](state, payload){
    payload.count += 1
  },
  [CUT_COUNT](state, payload){
    payload.count -= 1
  },
  [ADD_TO_CART](state, payload){
    state.products.push(payload)
  },
  [CHANGE_CHECK](state, payload){
    payload.check = !payload.check
  },
  [CHECKED_ALL](state, payload){
    Object.keys(state.products).forEach(product => {
      state.products[product].check = payload
    })
  }

}
