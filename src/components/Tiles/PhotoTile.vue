<template>
  <mdb-card color="amber darken-1" class="" >
        <mdb-view alt="hoverable" class="zoom overlay">
          <mdb-card-image :src="image" class="img-fluid" alt="Card image cap"></mdb-card-image>
          <mdb-mask flex-center overlay="orange-strong" :style="'font-size:' +getBigFont" :text="caption"/>
        </mdb-view>
  </mdb-card>
</template>
<script>

export default {
    name : "PhotoTile",
    props : {
      image : String,
      caption : String,
    },
    computed : {
      getFont() {
        if (screen.width>=1000) {
          return "4vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "4vw"
        }
      },
     getBigFont() {
          console.log(screen.width)
        if (screen.width>=1000) {
          return "3vw"
        } else if (screen.width>=700) {
          return "2.5vw"
        } else {
          return "2vw"
        }
      }
    }
}
</script>

<style scoped>

</style>