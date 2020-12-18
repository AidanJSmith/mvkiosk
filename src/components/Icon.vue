<template>
  <div>
    <div class="appContainer" :data-app-name="name" @click="route()">
      <div class="appCustomContent">
        <slot />
      </div>
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div ref="animation" class="animationContainer" @click="route()">
      <div class="animation"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      default: "Kiosk",
    },
    action: {
      type: String,
      default: "App",
    },
  },
  data: function () {
    return {
      undoRoute: false,
    };
  },
  methods: {
    // Expands the animation
    route: function () {
      this.undoRoute = !this.undoRoute;
      if (this.Name == "Kiosk")
        return;
        
      this.$refs.animation.classList.toggle("expanded");
      this.moveRoute = setTimeout((() => {
        if (this.undoRoute) this.$router.push({ path: this.name });
      }).bind(), 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.appContainer {
  border-radius: 6px;
  box-shadow: #aaa 3px 3px 10px;
  cursor: pointer;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;

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
  margin-top: 10px;
}

.animationContainer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition-duration: 0.5s;
  overflow: hidden;

  .animation {
    background-color: #aaa;
    border-radius: 300%;
    display: block;
    width: 0px;
    height: 0px;
    transition-duration: 0.5s;
  }

  &.expanded {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    bottom: 0;

    .animation {
      background-color: #fff;
      border-radius: 0;
      width: 100vmax;
      height: 100vmax;
    }
  }
}
</style>
