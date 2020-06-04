import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from './components/about/about';
import works from './components/works/works';
import reviews from './components/reviews/reviews';

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
    },
    {
        path: '/reviews',
        component: reviews
    }
]

export default new VueRouter({
    routes
});