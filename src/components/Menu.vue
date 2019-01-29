<template>
<div>
      <h2>Choose our dishes</h2>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <table class="table table-hover">
        <thead class="thead-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th class="text-center">Add to cart</th>
          </tr>
        </thead>
        <tbody v-for="(arrayOfDishes, typeDishes) in getMenuItems" :key="typeDishes">
          <tr class="bg-info text-center">
            <td class='text-light' colspan="3">
              <b>{{typeDishes}}</b>
            </td>
          </tr>
          <tr v-for="dish in arrayOfDishes" :key="dish.name">
            <td>
              <b>{{dish.name}}</b>
            </td>
            <td>{{dish.price | currency}}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-success" @click="addToCart(dish)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-6 col-md-12">
      <!-- Shopping cart -->
      <div v-if="cart.length > 0">
        <table class="table table-stripped">
          <thead class="thead-light">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in cart" :key="index++">
            <tr>
              <td>
                <button class="btn btn-sm btn-warning" @click="decrease(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm btn-primary" @click="increase(item)">+</button>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.price * item.quantity | currency}}</td>
            </tr>
          </tbody>
        </table>
        <h3>Order total: <span class='badge badge-primary float-right p-2 w-25'>{{totalPrice | currency}}</span></h3>
        <button class="btn btn-success btn-block" @click='addNewOrder'>Order a table</button>
      </div>
      <div v-else>
        <p class='alert' :class="cartText === 'Your cart is empty' ? 'alert-warning' : 'alert-success'">{{cartText}}</p>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import {dbOrdersRef} from '../firebaseConfig.js'
export default {
  data() {
    return {
      cart: [],
      cartText: "Your cart is empty"
    };
  },
  methods: {
    addToCart(dish) {
      const menu = {
        name: dish.name,
        price: +dish.price,
        quantity: 1,
        weight: dish.weight
      };
      console.log(menu)
      this.cart.push(menu);
    },
    decrease(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromCart(item);
      }
    },
    increase(item) {
      item.quantity++;
    },
    removeFromCart(item) {
      this.cart.splice(this.cart.indexOf(item), 1);
      // console.log(this.cart);
    },
    addNewOrder() {
        // this.$store.commit('addOrder', this.cart);
        dbOrdersRef.push(this.cart);
        this.cart = [];
        this.cartText='Thank you. Your order has been placed';    
    }
  },
  computed: {
    getMenuItems() {
      
      return this.$store.getters.getMenuItems;
      
    },
    totalPrice() {
      let totalCost = 0;
      for(var menuItem in this.cart) {
        var item = this.cart[menuItem];
        totalCost += item.quantity * item.price
      }
      return totalCost.toFixed(2)
    }
  }
};
</script>