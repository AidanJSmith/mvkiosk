<template>
  <div class="bottomNav">
  </div>
</template>

<script>
export default {
    name:"BottomNav",
    props: {
        items : []
    }
}
</script>

<style scoped>
    .bottomNav {
        position: absolute;
        bottom: 0;
    }
</style>