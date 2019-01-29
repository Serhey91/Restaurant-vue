<style scoped>

</style>
<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>

    <div class="container">

      <router-view></router-view>
    </div>

    <div class="container">
     <div class="row">
       <div class="col-md-12 col-lg-6">
         <router-view name='history'></router-view>
       </div>
       <div class="col-md-12 col-lg-6">
           <router-view name='ordering-guide'></router-view>
       </div>
  
     </div>

    </div>
    <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import {allMenu, dbOrdersRef} from './firebaseConfig.js';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  created() {   
    this.$store.dispatch('setMenuRef', allMenu);
    this.$store.dispatch('setOrdersRef', dbOrdersRef);
  },
};
</script>


