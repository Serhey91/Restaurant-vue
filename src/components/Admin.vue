
<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <app-login></app-login>
      </div>
    </div>
    <app-admin-hidden v-if="currentUser"></app-admin-hidden>
  </div>
</template>
<script>
import Login from "./Login.vue";
import { mapGetters } from "vuex";

// dynamic import
const AdminHidden = () => import("./AdminHidden.vue");

export default {
  components: {
    "app-login": Login,
    "app-admin-hidden": AdminHidden
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["currentUser"])
    // getMenuItems() {
    //     // return this.$store.state.menuItems
    //     return this.$store.getters.getMenuItems
    // },
    // numberOfOrders() {
    //   return this.$store.getters.numberOfOrders
    // }
  }
  // beforeRouteEnter: (to, from, next) => {
  //   // alert('Hi'+ this.name);
  //   // При переходе на маршрут - компонент еще не сформирован, и не видит данные из объекта данных
  //   next((vm => {
  //     alert('hi'+vm.name)
  //   }))
  // }
};
</script>