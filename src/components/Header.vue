<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary pt-5 pb-5">
      <a class="navbar-brand col-sm-8 col-md-9 col-lg-9" href="#">VUE-RESTAURANT</a>

      <div class="col-sm-3 col-md-2 col-lg-2">
        <ul class="navbar-nav">
          <router-link :to="{name: 'homeLink'}" tag="li" exact active-class="active">
            <a class="nav-link text-center">Home</a>
          </router-link>
          <router-link :to="{name: 'menuLink'}" tag="li" exact active-class="active">
            <a class="nav-link text-center">Menu</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
     
    };
  }
};
</script>
<style scoped>
header {
 
  font-size: 1.2em;

}
.navbar-brand {
  font-size: 2.5rem;
}
.active {
  background: rgb(149, 6, 6);
  border-radius: 8px;
}
li {
   transition: all 0.5s ease;
   border-radius: 8px;
   margin:1.5% 4%;
}
li:hover {
  background-color: rgb(160, 39, 39);
}
</style>