<template>
  <mdb-card color="amber darken-1" class="" >
        <div :style="'font-size:'+getBigFont"> <i>"{{quote}}"</i></div>
        <div :style="'text-align:right;' + 'font-size:'+getFont" class="text-white">- {{author}}</div>

  </mdb-card>
</template>
<script>

export default {
    name : "QuoteTile",
    props : {
      quote : String,
      author : String,
    },
    computed : {
      getFont() {
        if (screen.width>=1000) {
          return "2.25vw"
        } else if (screen.width>=700) {
          return "2vw"
        } else {
          return "2.5vw"
        }
      },
     getBigFont() {
        if (screen.width>=1000) {
          return "2vw"
        } else if (screen.width>=700) {
          return "1vw"
        } else {
          return "3vw"
        }
      }
    }
}
</script>

<style scoped>
.mdb-card {
  margin-top: 2vh;
}
</style>