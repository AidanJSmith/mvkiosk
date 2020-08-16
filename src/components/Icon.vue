<template>
  <div>
    <div class="appContainer" :data-app-name="name" v-on:click="route()">
      <div class="appCustomContent">
        <slot></slot>
      </div>
    </div>
    <div class="name">
      {{ Name }}
    </div>
    <div ref="animation" class="launchAnimation" v-bind:style="{ transform: translate }" v-on:click="route()"></div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  data: function() {
    return {
      translate: ""
    }
  },
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
      this.$refs.animation.classList.toggle("expanded");
    }
  }
};
</script>

<style lang="scss" scoped>
.appContainer {
  display: flex;
  position: relative;
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
    border-radius: 0;
    width: 100vmax;
    height: 100vmax;
    transform: none !important;
  }
}

</style>
