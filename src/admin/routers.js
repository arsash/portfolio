import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from './components/about/about';
import works from './components/works/works';

const routes = [
    { 
        path: '/',
        component: about
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/works',
        component: works
    }
]

export default new VueRouter({
    routes
});