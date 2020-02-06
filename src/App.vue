<template>
  <div id="app">
    <TopNav msg="Time"/>
      <TileContainer/>
    <BottomNav :items="[]"/>
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


*/
import TopNav from './components/TopNav.vue'
import BottomNav from './components/BottomNav.vue'
import TileContainer from './components/TileContainer.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    BottomNav,
    TileContainer
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

</style>
