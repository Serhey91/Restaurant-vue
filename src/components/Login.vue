<style scoped>
  form {
    margin: 20px 0;
  }
  .height {
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
   border:2px solid gray
  }
</style>

<template>
  <div class="pt-2" :class='currentUser ? "" : "height" '>
    <div v-if="currentUser">
      <h3>Sign in as:
        <br>
        <b>{{currentUser}}</b>
      </h3>
    </div>
    <div v-else class="form-section">
      <form class="pt-2">
        <div class="form-group">
          <h3>Please sign in for admin panel</h3>
          <label for="weight">Email</label>
          <input
            type="email"
            id="email"
            autocomplete="off"
            class="form-control"
            placeholder="Enter your email"
            v-model="email"
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            autocomplete="off"
            class="form-control"
            placeholder="Enter your password"
            v-model="password"
          >
        </div>
      </form>
    </div>

    <div id="message"></div>
    <div class="form-group">
      <button
        type="button"
        v-if="!currentUser"
        class="btn btn-primary"
        @click.prevent="signIn"
      >Sign in</button>
      <button type="button" v-else class="btn btn-danger" @click.prevent="signOut">Sign out</button>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";
import { store } from "../store/store.js";
Firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("setUser", user);
  } else {
    store.dispatch("setUser", null);
  }
});
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      let messageDiv = document.querySelector("#message");
      // Авторизация пользователя
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => console.log(data))
        .catch(err => {
          let code = err.code;
          let message = err.message;
          if (code === "auth/wrong-password") {
            messageDiv.className = "alert alert-danger";
            messageDiv.innerHTML = "Wrong password";
            setTimeout(() => {
              messageDiv.classList = "";
              messageDiv.innerHTML = "";
            }, 2000);
          } else {
            messageDiv.className = "alert alert-danger";
            messageDiv.innerHTML = message;
            setTimeout(() => {
              messageDiv.classList = "";
              messageDiv.innerHTML = "";
            }, 2000);
          }
        });
    },
    signOut() {
      let messageDiv = document.querySelector("#message");

      Firebase.auth()
        .signOut()
        .then(() => {
          messageDiv.className = "alert alert-warning";
          messageDiv.innerHTML = "Logged out";
          setTimeout(() => {
            messageDiv.classList = "";
            messageDiv.innerHTML = "";
          }, 2000);
        })
        .catch(e => {
          messageDiv.className = "alert alert-danger";
          messageDiv.innerHTML = "Error";
          setTimeout(() => {
            messageDiv.classList = "";
            messageDiv.innerHTML = "";
          }, 2000);
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>