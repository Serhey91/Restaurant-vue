import { firebaseAction } from 'vuexfire'
const state = {
    orders: [

    ]
}
const getters = {
    numberOfOrders: state =>  state.orders.length,
    // adding methods for showing orders in admin panel
    getAllOrders: state =>  {
        console.log(state.orders)
       return state.orders}
}
const mutations = {
    addOrder(state, orders)  { state.orders.push(orders); }
}
const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('orders', ref)       
      })
}
export default {
    actions, mutations, getters, state
}