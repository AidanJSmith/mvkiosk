<template>
  <div class="container">
    <div class="content">
      Never Gonna' Give you Up
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
   position: fixed;
   width:100vw;
   height: 100vh;
   top:0;
   left:0;
   background-color: rgb(32, 32, 32);
}
.content {
   color:white;
   font-size:10em;
   animation: animateIn .1s linear forwards;
}
</style>