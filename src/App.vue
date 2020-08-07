<template>
  <div id="app">
    <Title class="title"></Title>
    <Slideshow class="slideshow" :images="slideshowObject"></Slideshow>
    <AppContainer class="apps"></AppContainer>
  </div>
</template>
<script>
import Title from "@/components/Title";
import Slideshow from "@/components/Slideshow";
import AppContainer from "@/components/AppContainer";

const slideShowData = [
  { image: "surf-avatar-01.png", header: "Dolphins are cool" },
  { image: "surf-avatar-02.png", header: "I do love dolphins" },
  { image: "surf-avatar-03.png", header: "Whoah, a walrus" }
];

export default {
  name: "App",
  components: {
    Title,
    Slideshow,
    AppContainer
  },
  data() {
    return {
      slideshowObject: slideShowData
    };
  }
};
</script>
>

<style lang="scss">
@import "./scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  grid-template-rows: 30% 70%;
  grid-template-columns: 40% 60%;
  grid-template-areas:
    "title apps"
    "slideshow apps";
}

.title {
  background-color: $primary_color;
  grid-area: title;
}
.slideshow {
  background: $secondary_color;
  grid-area: slideshow;
}
.apps {
  background: $tertiary_color;
  grid-area: apps;
}

// Media Queries
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #app {
    grid-template-rows: 10% 70% 100%;
    overflow: auto;
    grid-template-columns: 100%;
    grid-template-areas:
      "title"
      "slideshow"
      "apps";
  }
}
</style>
