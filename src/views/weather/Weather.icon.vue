<template>
  <Icon name="Weather" class="x1x2">
    <div style="display:flex;width:100%;height:100%;align-items:center;justify-content:space-between;background-color:lightblue;">
      <div style="margin-left:2rem;background-color:lightyellow;height:4rem;width:4rem;border-radius:50%;flex-shrink:0;margin-right:1rem;" />
      <div>
        Sunny.
      </div>
      <div style="margin-right:2rem;font-size:2em;font-weight:bold;margin-left:auto;">
        102°
      </div>
    </div>
  </Icon>
</template>

<script>
  import Icon from "@/components/Icon";

  export default {
    name: 'WeatherIcon',
    components: {
      Icon
    }
  }
</script>

<style lang="scss" scoped>

</style>