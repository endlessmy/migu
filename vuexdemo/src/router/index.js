import Vue from 'vue';
import Router from 'vue-router';
import Product from '@/components/product';
import Cart from '@/components/cart';
import Info from '@/components/info';
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Product',
            component: Product
        },
        {
            path: '/',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/',
            name: 'Info',
            component: Info
        }
    ]
});