<template>
  <mdb-card color="amber darken-1" class="" >
        <div style="font-size:2vw"> <i>"{{quote}}"</i></div>
        <div style="font-size:1vw;text-align:right" class="text-white">- {{author}}</div>

  </mdb-card>
</template>
<script>

export default {
    name : "QuoteTile",
    props : {
      quote : String,
      author : String,
    }
}
</script>

<style scoped>

</style>