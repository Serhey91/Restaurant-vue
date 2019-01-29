import firebase  from 'firebase'

var config = {
    apiKey: "AIzaSyAri5fKcB8YAtWz0edJBYkhKU4TJMJ6myg",
    authDomain: "vue-restaurant.firebaseapp.com",
    databaseURL: "https://vue-restaurant.firebaseio.com",
    projectId: "vue-restaurant",
    storageBucket: "",
    messagingSenderId: "275814998335"
  };

  // initialise app with config file
  const App = firebase.initializeApp(config);
  // opening database
  const db = App.database();
  //create new reference with mew dataobject in FIREBASE
  export const dbMenuRefSalad = db.ref('menu/salads');
  export const dbMenuRefSecondDishes = db.ref('menu/secondDishes');
  export const dbMenuRefDeserts = db.ref('menu/deserts');
  export const allMenu = db.ref('menu');
  export const dbOrdersRef = db.ref('orders');

 
  