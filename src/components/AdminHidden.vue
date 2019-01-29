<template>
     <section class='border-top'>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <app-menu-item></app-menu-item>
      </div>

      <div class="col-lg-6 col-md-12">
        <h3>Current menu:</h3>
        <table class="table hover">
          <thead class="thead-light">
            <tr>
              <th>Item name</th>
              <th class="text-center">Remove from menu</th>
            </tr>
          </thead>
          <tbody v-for="(arrayOfDishes,typeOfDishes) in getMenuItems" :key="typeOfDishes['.key']">
            <tr class="bg-dark text-light text-center">
              <td colspan="2">
                <b>{{typeOfDishes}}</b>
              </td>
            </tr>
            <tr v-for="(dish, key) in arrayOfDishes" :key="key">
              <td>
                <b>{{dish.name}}</b>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-danger" @click="removeMenuItem(key, typeOfDishes)">x</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Current orders waiting: {{numberOfOrders}}</h3>     

        
        <table class="table table-sm table-hover" v-for='(order, index) of getAllOrders' :key='index'>
          <thead class="thead-light">
            <tr>
              <th>Item name</th>
              <th>Weight</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>   
           <tbody>
            <div>
              <b class='h4 mr-5'>Order # {{++index}}</b>
              <button class="btn btn-sm btn-outline-danger" @click='removeOrderItem(order[".key"])'>x</button>
            </div>           
              <tr v-for='(item, i) in order[".value"]' :key='i'>
              <td>{{item.name}}</td>    
              <td>{{item.weight}}</td>   
              <td>{{item.quantity}}</td>   
              <td>{{item.price | currency}}</td>             
              </tr>     
          </tbody>       
        </table>
   
      </div>
    </div>
    </section>
</template>
<script>
    import NewMenuItem from "./MenuItem.vue";
import { mapGetters } from "vuex";
import { allMenu,  dbOrdersRef } from '../firebaseConfig';
export default {
  components: {
    "app-menu-item": NewMenuItem,
    
  },
  data() {
    return {
      name: "Serhey"
    };
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("Have you remebred to log out?") === true) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    removeMenuItem(childId, parent) {    
      allMenu.child(parent).child(childId).remove();
    },
    removeOrderItem(childId) {
      dbOrdersRef.child(childId).remove()
    }
  },
  computed: {
    ...mapGetters(["numberOfOrders", "getMenuItems", 'getAllOrders' ])
  
  }

};
</script>