<template>
  <div id="app">
    <div class="grid">
      <Title class="title"></Title>
      <Slideshow class="slideshow" :images="slideshowObject"></Slideshow>
    </div>
    <div class="grid">
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
      <div class="card x1"></div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Slideshow from "@/components/Slideshow";

const slideShowData = [
  { image: "surf-avatar-01.png", header: "Dolphins are cool" },
  { image: "surf-avatar-02.png", header: "I do love dolphins" },
  { image: "surf-avatar-03.png", header: "Whoah, a walrus" }
];

export default {
  name: "App",
  components: {
    Title,
    Slideshow
  },
  data() {
    return {
      slideshowObject: slideShowData
    };
  }
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";

:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-rows: repeat(4, 60px);
  grid-template-columns: repeat(3, 60px);
  row-gap: 60px;
  column-gap: 60px;
  margin-right: 60px;
}
.card {
  background-color: #888;
  border-radius: 3px;
  min-width: 60px;
  min-height: 60px;
}

.title {
  margin: 0;
  grid-column: 1 / span 3;
}
.slideshow {
  grid-column: 1 / span 3;
  grid-row: 2 / span 3;
  
}
.apps {
  background: $tertiary_color;
}
</style>
