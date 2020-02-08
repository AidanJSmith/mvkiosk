<template>
  <div id="app">
    <TopNav msg="Time" style="z-index:99"/>
      <TileContainer :cards="currentCards"/>
    <BottomNav/>
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
  },
  data() {
        return {
            currentCards : [  {
              type:"photo",
              name: "HowlingDog",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-uwJjVacndos%2FUR_NavxE8_I%2FAAAAAAAAAFM%2Ff7qjarjdjrg%2Fs1600%2Fcool%2Bhd%2Bbackgrounds%2B28.jpg&f=1&nofb=1`,
              caption:`4 dead in horrid HTML debacle.`
            },{
              type:"photo",
              name: "HowlingDog1",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-uwJjVacndos%2FUR_NavxE8_I%2FAAAAAAAAAFM%2Ff7qjarjdjrg%2Fs1600%2Fcool%2Bhd%2Bbackgrounds%2B28.jpg&f=1&nofb=1`,
              caption:`Woof, he said... then fell.`
            },{
              type:"photo",
              name: "HowlingDog2",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-uwJjVacndos%2FUR_NavxE8_I%2FAAAAAAAAAFM%2Ff7qjarjdjrg%2Fs1600%2Fcool%2Bhd%2Bbackgrounds%2B28.jpg&f=1&nofb=1`,
              caption:`4 dead in horrid HTML debacle.`
            },{
              type:"photo",
              name: "HowlingDog3",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-uwJjVacndos%2FUR_NavxE8_I%2FAAAAAAAAAFM%2Ff7qjarjdjrg%2Fs1600%2Fcool%2Bhd%2Bbackgrounds%2B28.jpg&f=1&nofb=1`,
              caption:`Woof, he said... then fell.`
            },{
              type:"article",
              name: "UwU, says famous Box.",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A happy family of Boxes walk.`
            },{
              type:"article",
              name: "UwU, says famous Boxes.",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A happy family of Boxes walk.`
            },{
              type:"article",
              name: "UwU, says famous Boxer.",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A happy family of Boxes walk.`
            },{
              type:"article",
              name: "Ow0, says famous Box.",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A joyous family of Boxes walk... I hope.`
            },{
              type:"article",
              name: "OwO, says famous Box?",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A joyous family of Boxes walk... I hope.`
            },{
              type:"article",
              name: "OwO, says famous Box.!",
              imgurl:`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-wEikZinkD9k%2FTmfwwbp9rLI%2FAAAAAAAAA2A%2Ft7TnAsLZGeU%2Fs1600%2Fboxman_amazon_www.Vvallpaper.net.jpg&f=1&nofb=1`,
              body:`A joyous family of Boxes walk... I hope.`
            }]
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

</style>
