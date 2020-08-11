<template>
  <div>
    <div class="appContainer" :data-app-name="name">
      <slot></slot>
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
  overflow: hidden;
  justify-content: center;
}
.name {
  text-align: center;
  margin-top:10px;
}
img {
  object-fit: cover;
}
slot {
  width: 100%;
  height: 100%;
}
</style>
