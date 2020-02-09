<template>
  <div id="app">
    <TopNav msg="Time" style="z-index:99"/>
      <TileContainer :cards="cards" :currentList="currentActive"/>
      <div :style="'width:100vw;height:'+getMargin"></div>
    <BottomNav @updateList="updateList"/>
  </div>
</template>

<script>
/*
To-Do:
TopNav: Fonts
BottomNav: Real Items.
Main: Tiles

Types of Tiles:
Video, Photo, Event, Quote, Announcement, Article (eventually)

Get the server running for calendar scraping... maybe sooner?
Get oracle scraper up and running.

*/
import TopNav from './components/TopNav.vue'
import BottomNav from './components/BottomNav.vue'
import TileContainer from './components/TileContainer.vue'
import Firebase from "firebase/app";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJOofls1e-ptS9DrDDj8PdzrU0z8SGK6E",
  authDomain: "mvhs-kiosk-1d7a4.firebaseapp.com",
  databaseURL: "https://mvhs-kiosk-1d7a4.firebaseio.com",
  projectId: "mvhs-kiosk-1d7a4",
  storageBucket: "mvhs-kiosk-1d7a4.appspot.com",
  messagingSenderId: "738629164734",
  appId: "1:738629164734:web:79378ad5b74e343ea808ef",
  measurementId: "G-1QC7ZVETN5"
};

let app = Firebase.initializeApp(firebaseConfig)
let db = app.database()

export default {
  name: 'app',
  components: {
    TopNav,
    BottomNav,
    TileContainer
  },
  firebase: {
    cards: db.ref("Cards")
  },
  data() {
        return {
            cards : [],
            currentActive : [],
        }
    },
  methods : {
    updateList(list) {
          this.currentActive = list;
        }
  },
  computed : {
      getMargin() {
        if (screen.width>=1000) {//Accounts for different screen sizes.
          return "15vw";
        } else if (screen.width>=700) {
          return "50vw";
        } else {
          return "30vw";
        }
      }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app {
  background-color:rgb(255, 219, 164);
}
</style>
