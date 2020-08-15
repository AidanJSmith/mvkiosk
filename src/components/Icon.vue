<template>
  <div>
    <div class="appContainer" :data-app-name="name">
      <div class="appCustomContent">
        <slot></slot>
      </div>
      <div class="appRouterAnimation collapsed"></div>
    </div>
    <div class="name">
      {{ Name }}
    </div>
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

  .appRouterAnimation {
    background-color: #000;
    position: absolute;
    top: -100vmax;
    bottom: -100vmax;
    left: -100vmax;
    right: -100vmax;
    z-index: 10;
    width: 300vmax;
    height: 300vmax;
    margin: auto;
    transform-origin: center;
    transition-duration: 1s;

    &.collapsed {
      border-radius: 300%;
      width: 0;
      height: 0;
    }
  }
}

.name {
  text-align: center;
  margin-top:10px;
}
</style>
