import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

//存储状态值
const state = {
  count: 1
};

//在store中定义getters

//变更状态
const mutations = {
  //加
  ADD(state) {
    state.count++;
  },
  //减
  REDUCE(state) {
    state.count--;
  }
};
//异步方法
const actions = {
  add({ commit }) {
    commit('ADD');
  },
  reduce({ commit }) {
    commit('REDUCE');
  }
};

//创建store实例
export default new Vuex.Store({
  state,
  mutations,
  actions
});
