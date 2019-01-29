// base rouning

import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'
import Admin from './components/Admin.vue'


// lazy loding for routing
// const Menu = () => import('./components/Menu.vue');
// // grouping relating components
// const About = () => import(/*webpackChunkName: "footer-group"*/'./components/About.vue');
// const Admin = () => import(/*webpackChunkName: "footer-group"*/'./components/Admin.vue');


const routes = [
    {
        path: '/',
        components: {
            default: Home,
            'ordering-guide': OrderingGuide,
            'history': History
        },
        name: 'homeLink'
    },
    {
        path: '/menu', component: Menu, name: 'menuLink'
    },
    {
        path: '/admin', component: Admin, name: 'adminLink', beforeEnter: (to, from, next) => {
            alert("For authorisez users only, please login");
            next()
        }
    },
    {
        path: '/about', component: About, name: 'aboutLink', children: [
            { path: '/', redirect: '/about/contacts', name: 'aboutLink' },
            { path: '/about/contacts', component: Contacts, name: 'contactsLink' },
            { path: '/about/history', component: History, name: 'historyLink' },
            { path: '/about/ordering-guide', component: OrderingGuide, name: 'orderingLink' }]
    },
    { path: '*', redirect: '/' }
]


export const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // Сохранение положения, если перешли с маршрута - на маршрут- возвращаться к предыдущему положению - а не начинать с начала
            return {
                selector: to.hash
            }
        }
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return {x: 0, y:0}

        // }
    }
})


