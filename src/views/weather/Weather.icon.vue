<template>
  <Icon
    :name="'Weather'"
    class="x1x2"
  >
    <div :class="['screen', 'screen1',before==1 ? 'before' : 'after']">
      <div style="margin-left:2rem;background-color:lightyellow;height:4rem;width:4rem;border-radius:50%;flex-shrink:0;margin-right:1rem;" />
      <div>
        Sunny
      </div>
      <div style="margin-right:2rem;font-size:2em;font-weight:bold;margin-left:auto;">
        {{ weather.weather }}
      </div>
    </div>
    <div :class="['screen', 'screen2',before==2 ? 'before' : 'after']">
      <div style="margin-left:2rem;background-color:lightyellow;height:4rem;width:4rem;border-radius:50%;flex-shrink:0;margin-right:1rem;" />
      <div>
        Smokey
      </div>
      <div style="margin-right:2rem;font-size:2em;font-weight:bold;margin-left:auto;">
        {{ 20 }}
      </div>
    </div>
    <div :class="['screen', 'screen3',before==3 ? 'before' : 'after']">
      <div style="margin-left:2rem;background-color:lightyellow;height:4rem;width:4rem;border-radius:50%;flex-shrink:0;margin-right:1rem;" />
      <div>
        Cloudy
      </div>
      <div style="margin-right:2rem;font-size:2em;font-weight:bold;margin-left:auto;">
        {{ 20 }}
      </div>
    </div>
  </Icon>
</template>

<script>
  import Icon from "@/components/Icon";
  import WeatherService from "@/views/weather/Weather.service.js"
  
  export default {
    name: 'WeatherIcon',
    components: {
      Icon
    },data() {
      return {
        weather: new WeatherService(),
        before: 1,
      }
    },
    mounted () {
      setInterval(()=>{
        if (this.before==3) {
          this.before=0;
        }
        this.before+=1;
        
        },4000);
    },
  }
</script>

<style lang="scss" scoped>

.x1x2 {
  border-radius: 20px;
}

.screen {
  position: absolute;
  display:flex;
  width:100%;
  height:100%;
  align-items:center;
  justify-content:space-between;
  transition: 2s all;
  transition-timing-function: ease-in-out;
  border-radius:20px;
}

.screen1 {
  background-color:darkcyan;
  &.before {
    left: 0%;
  }
  &.after {
    left: 100%;
  }
}

.screen2 {
  background-color:lightblue;
  &.before {
    top:0;
  }
  &.after {
    top: -100%;
  }
}

.screen3 {
  background-color:turquoise;
  &.before {
    left:0;
  }
  &.after {
    left:-100%;
  }
}
</style>