<template>
  <div id="app">
    <TopNav msg="Time" style="z-index:99"/>

    <TileContainer :cards="cards"  :currentList="currentActive"/>
    <div :style="'width:100vw;height:'+getMargin"></div>
    <BottomNav @updateList="updateList"/>
  </div>
</template>

<script>
/*
To-Do:
Article Popouts with VueX Router
Admin Backpanel
Server that actively updates with oracle articles + Gcalendar events + Maintains Database
Database Permissions

*/
import TopNav from '../src/components/TopNav'
import BottomNav from '../src/components/BottomNav.vue'
import TileContainer from '../src/components/TileContainer.vue'
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
!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : ''
let db = Firebase.database()

export default {
  name: 'index',
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
            modal:false,
            modalProps:{},
            firstTime:true,
        }
    },
  methods : {
    updateList(list) {
          this.currentActive = list;
          this.cards=this.cards.sort( () => Math.random() - 0.5);

    },
  },
  watch : {
    cards : function() {
      if (this.firstTime) {
          this.cards=this.cards.sort( () => Math.random() - 0.5);
          this.firstTime=false;
      }
    }
  },
  computed : {
      getMargin() {
        if (screen.width>=1000) {//Accounts for different screen sizes.
          return "20vw";
        } else if (screen.width>=800) {
          return "30vw";
        } else  if (screen.width>=450) {
            return "50vw";
          } else  if (screen.width>=430) {
            return "42vw";
          }{
          return "60vw";
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
