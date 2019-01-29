<template>
  <div id="home" class="col-sm-12 text-center">
    <div class="background">
      <h1>Welcome to Vue-Restaurant</h1>
      <h2>Want to book a table?</h2>
      <button class="btn btn-primary btn-block" @click='goToMenu'>Order</button>
    </div>
  </div>
</template>
<style scoped>
#home {
  background-image: url("../assets/restaurants.jpg");
  background-size: 100% 100%;
  height: 87vh;
  padding: 7%;

}
h1,
h2 {
  margin: 3%;
}
.background {
  background: rgba(238, 238, 238, 0.7);
  max-width: 60%;
  margin: 0 auto;
  padding: 10px 20px;
}
</style>
<script>
  export default {
    methods: {
      goToMenu() {
        // Земена маршрута
        // this.$router.replace({name: 'menuLink'})
        // Добавление (протаклвивание) массива
        this.$router.push({name: 'menuLink'})
      }
    },
    data() {
      return {

      }
    }
  }
</script>