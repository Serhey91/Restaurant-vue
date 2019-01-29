<template>
  <div>
    <form>
      <h3>Add new menu item</h3>

        <div class="form-group">
        <label for="menuType">Choose type of menu:</label>
        <select class="custom-select" id="menuType" v-model='menuTypeString'>
          <option disabled value="">Choose one of the variants</option>
          <option v-for="(item, index) in menuTypeArray" :value="item" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="form-group row">
        <label for="name" class="col-md-3">Name</label>
        <div class="col-md-9">
          <input type="text" id="name" autocomplete="off" class="form-control" v-model='newMenuItem.name'>
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-md-3">Description</label>
        <div class="col-md-9">
          <textarea id="description" autocomplete="off" class="form-control" rows="5" v-model='newMenuItem.description'></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="weight" class="col-md-3">Weight</label>
        <div class="col-md-9">
          <input type="number" id="weight" autocomplete="off" class="form-control" min="10" v-model='newMenuItem.weight'>
        </div>
      </div>
      <div class="form-group row">
        <label for="price" class="col-md-3">Price</label>
        <div class="col-md-9">
          <input type="number" id="price" autocomplete="off" class="form-control" min="1" v-model='newMenuItem.price'>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-block btn-success" type='button' @click='addMenuItem'>Add new item</button>
      </div>
    </form>
  </div>
</template>
<script>
import {dbMenuRefSalad} from '../firebaseConfig.js'
import {dbMenuRefSecondDishes} from '../firebaseConfig.js'
import {dbMenuRefDeserts} from '../firebaseConfig.js'
export default {
  data() {
    return {
      menuTypeString: '',
      menuTypeArray: ["Salads", "SecondDishes", "Deserts"],
      newMenuItem: {
        name: "Greek salad",
        description:
          "Green salad with onion, tomato, cucumber, blue cheese and pepper",
        price: 30,
        weight: 300
      }
    };
  },
  methods: {
    addMenuItem() {
      // Pushing new item in 
      switch (this.menuTypeString) {

        case 'Salads': {
          dbMenuRefSalad.push(this.newMenuItem);
          break;
        }
         case 'SecondDishes': {
          dbMenuRefSecondDishes.push(this.newMenuItem);
          break;
        }
         case 'Deserts': {
          dbMenuRefDeserts.push(this.newMenuItem);
          break;
        }
        default: {
          break
        }
      }
      
    }
  }
  
};
</script>


