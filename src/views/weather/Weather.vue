<template>
  <div class="container">
    <div class="content">
      Never Gonna' Let You Down
    </div>
  </div>
</template>

<script>
   export default {
      name: 'Oracle'
   }
</script>

<style scoped lang="scss">
@keyframes animateIn {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}
.container {
   background-color: #fff;
   position: fixed;
   width:100vw;
   height: 100vh;
   top:0;
   left:0;
}
.content {
   color:#555;
   font-size:10em;
   animation: animateIn .3s linear forwards;
}
</style>