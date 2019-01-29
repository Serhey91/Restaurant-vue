import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu';
import orders from './modules/orders';
import users from './modules/users';
Vue.use(Vuex);
import {firebaseMutations} from 'vuexfire'

// npm i --save vuesfire

export const store = new Vuex.Store({
    mutations: {
        ...firebaseMutations
    },
    modules: {
        menu, 
        orders,
        users
    }
})