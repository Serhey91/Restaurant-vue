<style scoped>
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
  color: white;
}
footer {
  font-size: 1.2em;
}
</style>
<template>
  <footer>
    <nav class="navbar navbar-expand-sm navbar-dark bg-secondary pt-5 pb-5">
      <div class="col-sm-3 col-md-2 col-lg-2">
      <ul class="navbar-nav">
        <router-link :to="{name: 'homeLink'}"  tag="li" exact active-class="active">
            <a class="nav-link text-center">Home</a>
          </router-link>
          <router-link :to="{name: 'aboutLink'}" tag="li" exact active-class="active">
            <a class="nav-link text-center">About</a>
          </router-link>
          <router-link :to="{name: 'adminLink'}" tag="li" exact active-class="active">
            <a class="nav-link text-center">Admin</a>
          </router-link>
      </ul>
      </div>
    </nav>
  </footer>
</template>
<script>
</script>
