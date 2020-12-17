<template>
  <div id="app">
    <div class="grid-left">
      <Title class="title" />
      <Slideshow class="slideshow" :images="slideshowObject" />
    </div>
    <div class="grid-right">
      <Icon name="Oracle" action="Oracle">
        <img class="main" :src="require(`@/assets/img/surf-avatar-01.png`)" />
      </Icon>
      <Icon name="pupper" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-10.png`)"
        />
      </Icon>
      <Icon class="x2x2">
        <img class="main" :src="require(`@/assets/img/surf-avatar-04.png`)" />
      </Icon>
      <Icon>
        <div
          style="
            display: grid;
            grid-template-rows: 1fr 4fr 1fr;
            grid-template-columns: 100%;
            width: 100%;
          "
        >
          <div style="background-color: Aquamarine">Header</div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: DarkSeaGreen;
            "
          >
            Body
          </div>
          <div style="background-color: ForestGreen">Footer</div>
        </div>
      </Icon>
      <Icon name="literal seagull" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-09.png`)"
        />
      </Icon>
      <WeatherIcon></WeatherIcon>
      <Icon name="nya" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-08.png`)"
        />
      </Icon>
      <Icon name="uwo" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-03.png`)"
        />
      </Icon>
      <Icon name="uwu" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-06.png`)"
        />
      </Icon>
      <Icon name="owo" class="x1">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-07.png`)"
        />
      </Icon>
      <Icon name="owu" class="x1x2">
        <img
          class="main"
          style="object-fit: cover"
          :src="require(`@/assets/img/surf-avatar-05.png`)"
        />
      </Icon>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Slideshow from "@/components/Slideshow";
import Icon from "@/components/Icon";
import WeatherIcon from "@/views/weather/Weather.icon";

const slideShowData = [
  { image: "surf-avatar-01.png", header: "Dolphins are cool" },
  { image: "surf-avatar-02.png", header: "I do love dolphins" },
  { image: "surf-avatar-03.png", header: "Woah, a walrus" },
];

export default {
  name: "Home",
  components: {
    Title,
    Slideshow,
    Icon,
    WeatherIcon,
  },
  data() {
    return {
      slideshowObject: slideShowData,
    };
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

$card-size: 110px;
$grid-gap: 90px;

.grid-left, .grid-right {
  display: grid;
  grid-template-rows: repeat(4, $card-size);
  grid-template-columns: repeat(4, $card-size);
  row-gap: $grid-gap;
  column-gap: $grid-gap;
  &:not(:last-of-type) {
    margin-right: $grid-gap;
  }
}

.grid-left {
  grid-template-columns: repeat(3, $card-size);
}

.card {
  background-color: #888;
  border-radius: 10px;
  min-width: $card-size;
  min-height: $card-size;
}
.x2x2 {
  grid-column-end: span 2;
  grid-row-end: span 2;
}
.x2x1 {
  grid-column-end: span 1;
  grid-row-end: span 2;
}
.x1x2 {
  grid-column-end: span 2;
  grid-row-end: span 1;
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

@media only screen and (max-width: 1360px) {
  /* tablets+ */
  .grid {
    margin-right: 0;
    margin-top: 10%;
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
    margin-right: 0;
    margin-top: 10%;
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
