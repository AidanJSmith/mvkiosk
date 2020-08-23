<template>
  <div>
    <div
      class="appContainer"
      :data-app-name="Name"
      @click="route()"
    >
      <div class="appCustomContent">
        <slot />
      </div>
    </div>
    <div class="name">
      {{ Name }}
    </div>
    <div
      ref="animation"
      class="launchAnimation"
      :style="{ transform: translate }"
      @click="route()"
    />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    Name: {
      type: String,
      default: "Kiosk"
    },
    Action: {
      type: String,
      default: "App"
    }
  },
  data: function() {
    return {
      translate: ""
    }
  },
  mounted: function() {
    // Transform the animation to center on the icon
    const thisRect = this.$el.getBoundingClientRect();
    const centerX = Math.floor(thisRect.top + thisRect.height / 2);
    const centerY = Math.floor(thisRect.left + thisRect.width / 2);
    this.translate = `translate(${centerY}px, ${centerX}px)`;
  },
  methods: {
    // Expands the animation
    route: function () {
      clearTimeout();
      if (this.Name=="Kiosk") {
        return;
      }
      this.$refs.animation.classList.toggle("expanded");
      setTimeout((()=>{this.$router.push({ path: this.Name })}).bind(),410);
    }
  }
};
</script>

<style lang="scss" scoped>
.appContainer {
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  align-items: center;
  height: 100%;
  text-align: center;
  border-radius: 18px;
  justify-content: center;

  .appCustomContent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    overflow: hidden;

    > * {
      height: 100%;
      width: 100%;
    }
  }
}

.name {
  text-align: center;
  margin-top:10px;
}

.launchAnimation {
  background-color: #0003;
  border-radius: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 0;
  height: 0;
  transition-duration: 0.4s;

  &.expanded {
    background-color: rgb(32, 32, 32);
    border-radius: 0;
    width: 100vmax;
    height: 100vmax;
    transform: none !important;
  }
}

</style>
