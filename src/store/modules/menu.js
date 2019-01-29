import { firebaseAction } from 'vuexfire'



const state = {
    menuItems: {}

}
const getters = {
 getMenuItems:state => {    
     delete state.menuItems['.key'];    
     return state.menuItems}
}
const mutations = {
    
}
const actions = {
    setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
        bindFirebaseRef('menuItems', ref)       
      })
}

export default {
    actions, mutations, getters, state
}