// import {
//   ADD_CART,
//   REDUCE_CART
// } from './mutation-type';

import * as C from './mutation-type';

const mutations = {
  [C.ADD_CART](state, id) {
    state.goods[id].num++
    state.totalNum++
    state.totalPrice += state.goods[id].price
  },
  [C.REDUCE_CART](state, id) {
    state.goods[id].num--
    state.totalNum--
    state.totalPrice -= state.goods[id].price
  }
}

export default mutations
