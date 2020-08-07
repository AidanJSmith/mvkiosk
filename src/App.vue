<template>
  <div id="app">
    <div class="title"></div>
    <div class="slideshow"></div>
    <div class="apps"></div>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display:grid;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100vh;
  overflow: hidden;
  grid-template-rows: 30% 70%;
  grid-template-columns: 40% 60%;
  grid-template-areas:   "title apps"
                        "slideshow apps"
}

.title {
  background-color:#e0e0e0;
  grid-area:title;
}
.slideshow {
  background: rgb(148, 148, 148);
  grid-area:slideshow;
}
.apps {
  background: rgb(94, 94, 94);
  grid-area:apps;
}

// Media Queries
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #app {
    grid-template-rows: 10% 70% 100%;
    overflow: auto;
    grid-template-columns: 100%;
    grid-template-areas:   "title"
                          "slideshow"
                          "apps"
  }
}
</style>
