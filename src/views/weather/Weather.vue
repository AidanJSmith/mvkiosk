<template>
  <div class="container">
    <div class="content">
      Weather - Mountain View
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
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0px);
   }
}
.container {
   background-color: #fff;

   position: fixed;
   top: 0;
   left: 0;

   width: 90vw;
   height: 90vh;
   padding: 5vh 5vw;
}
.content {
   color:#555;
   font-size: 3em;
   animation: animateIn .3s ease-out forwards;
}
</style>