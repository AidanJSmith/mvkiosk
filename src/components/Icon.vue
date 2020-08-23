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
      translate: "",
      undoRoute:false,
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
      this.undoRoute = !this.undoRoute;
      if (this.Name == "Kiosk") {
        return;
      }
      const thisRect = this.$el.getBoundingClientRect();
      console.log(thisRect);
      this.$refs.animation.classList.toggle("expanded");
      this.moveRoute = setTimeout((() => { 
        if (this.undoRoute)
          this.$router.push({ path: this.Name });
      }).bind(), 800);
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
  background-color: #eee;
  box-shadow: #0002 5px 5px 80px;
  border-radius: 200%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 0;
  height: 0;
  transition-duration: 0s;

  &.expanded {
    background-color: #fff;
    border-radius: 0;
    width: 100vmax;
    height: 100vmax;
    transform: none !important;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
}

</style>
