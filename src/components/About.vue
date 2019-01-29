<style scoped>
    a {
        color: rgb(165, 73, 73);
        padding: 5px 10px;
        background-color: #ddd;
        margin: 1% 5% 2%;
        transition: all 0.5s ease;
    }
    a:hover {
        text-decoration: none;
        background: rgb(199, 123, 123);
        color: rgb(255, 251, 251);
    }
    .active {
      color: rgb(255, 251, 251);
      background-color: rgb(211, 35, 35);
    }
    .height {
      height:73vh;
    }
</style>
<template>
  <div class="card">
    <h2 class="card-title text-center">Click on the links below for more info</h2>   
      <div class="d-flex justify-content-center">
        <router-link :to="{name: 'historyLink'}" tag="a" exact active-class="active">
          Our history
        </router-link>
        <router-link :to="{name: 'contactsLink'}" tag="a" exact active-class="active">
         Our contacts
        </router-link>
        <router-link :to="{name: 'orderingLink'}" tag="a" exact active-class="active">
          How to order
        </router-link>
      </div>
 <div class="d-flex mb-5 justify-content-center align-items-center height">
    <router-view></router-view>
 </div>
  </div>
</template>
