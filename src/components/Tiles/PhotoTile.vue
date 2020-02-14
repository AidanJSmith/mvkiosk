<template>
  <mdb-card color="amber darken-1" class="" >
        <mdb-view alt="hoverable" class="zoom overlay">
          <mdb-card-image :src="image" class="img-fluid" alt="Card image cap"></mdb-card-image>
          <mdb-mask flex-center overlay="orange-strong" :style="'font-size:'+getBigFont" :text="caption"/>
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
    methods : {
    },
    computed : {
      getFont() {//Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "4vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "4vw"
        }
      },
     getBigFont() {//Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "3vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "4vw"
        }
      }
    },
    data() {
      return {
      }
    }
}
</script>

<style scoped>

</style>