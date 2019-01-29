import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import {router} from './routing'
import {store} from './store/store.js'
// Using filer library for vue.js
import Accounting from 'accounting-js'
// Creating own filter
Vue.filter('currency', (value) => {
  return Accounting.formatMoney(value)
})
// Global registration of component
//Vue.component('global-component', () => import('./components/Menu.vue'))
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // хранилище данных
  store
})
