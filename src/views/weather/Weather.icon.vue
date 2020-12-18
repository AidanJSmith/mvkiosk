<template>
  <Icon :name="'Weather'" class="x1x2">
    <div :class="['screen', 'screen1', before == 1 ? 'before' : 'after']">
      <div
        style="
          margin-left: 2rem;
          background-color: lightyellow;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
          flex-shrink: 0;
          margin-right: 1rem;
        "
      />
      <div>Sunny</div>
      <div
        style="margin-right: 2rem; font-size: 2em; font-weight: bold; margin-left: auto"
      >
        <span>{{ weather.weather }} °C</span>
      </div>
    </div>
    <div :class="['screen', 'screen2', before == 2 ? 'before' : 'after']">
      <div
        style="
          margin-left: 2rem;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
          flex-shrink: 0;
          margin-right: 1rem;
        "
      />
      <div>Smokey</div>
      <div
        style="margin-right: 2rem; font-size: 2em; font-weight: bold; margin-left: auto"
      >
        {{ 20 }}
      </div>
    </div>
    <div :class="['screen', 'screen3', before == 3 ? 'before' : 'after']">
      <div
        style="
          margin-left: 2rem;
          background-color: white;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
          flex-shrink: 0;
          margin-right: 1rem;
        "
      />
      <div>Cloudy</div>
      <div
        style="margin-right: 2rem; font-size: 2em; font-weight: bold; margin-left: auto"
      >
        {{ -50 }}
      </div>
    </div>
  </Icon>
</template>

<script>
import Icon from "@/components/Icon";
import WeatherService from "@/views/weather/Weather.service.js";

export default {
  name: "WeatherIcon",
  components: {
    Icon,
  },
  data() {
    return {
      weather: new WeatherService(),
      before: 1,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.before == 3) {
        this.before = 0;
      }
      this.before += 1;
    }, 6000);
  },
};
</script>

<style lang="scss" scoped>

.x1x2 {
  background-color: gold;
  border-radius: 6px;
}

.screen {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;

  transition: 3s all;
  transition-timing-function: cubic-bezier(0.83, 0, 0.17, 1);
}

.screen1 {
  background-color: darkorange;
  &.before {
    left: 0%;
  }
  &.after {
    left: 100%;
  }
}

.screen2 {
  background-color: skyblue;
  &.before {
    top: 0;
  }
  &.after {
    top: -100%;
  }
}

.screen3 {
  background-color: turquoise;
  &.before {
    left: 0;
  }
  &.after {
    left: -100%;
  }
}
</style>
