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

$card-size: 110px;
$grid-gap: 130px;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-rows: repeat(4, $card-size);
  grid-template-columns: repeat(3, $card-size);
  row-gap: $grid-gap;
  column-gap: $grid-gap;
  margin-right: $grid-gap;
}
.card {
  background-color: #888;
  border-radius: 10px;
  min-width: $card-size;
  min-height: $card-size;
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


@media only screen and (max-width: 1250px) {
  /* tablets+: */
  .grid {
    margin-right:0;
    margin-top:10%;
  }
  #app {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
  }
}
@media only screen and (max-width: 768px) {
  /* phones: */
  $card-size: 50px;
  $grid-gap: 10px;

  .grid {
    row-gap: $grid-gap;
    column-gap: $grid-gap;
    margin-right:0;
    margin-top:10%;
  }
  .card {
    background-color: #888;
    border-radius: 10px;
    min-width: $card-size;
    min-height: $card-size;
  }
  #app {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
  }
}
</style>
