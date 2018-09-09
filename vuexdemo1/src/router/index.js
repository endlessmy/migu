import Vue from 'vue'
import Router from 'vue-router'
import LearnClick from '@/components/learnClick'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'LearnClick',
        component: LearnClick
    }]
})