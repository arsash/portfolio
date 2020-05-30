import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from './components/about/about';
import works from './components/works/works';

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/about', component: about },
        { path: '/works', component: works }
    ]
});