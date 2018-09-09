import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1,
};

const mutations = {
    ADD() {
        state.count++;
    },
    REDUCE() {
        state.count--;
    },
};

const actions = {
    add({ commit }) {
        commit('ADD');
    },
    reduce({ commit }) {
        commit('REDUCE');
    },
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
});