<template>
  <mdb-card color="amber darken-1" class="align-contents-center" style="margin:auto" v-resize-text="{ratio:2,  maxFontSize: '2vw', delay: 0}">
        <mdb-view alt="hoverable" class="zoom overlay">
          <mdb-card-image :src="image" class="img-fluid" alt="Card image cap" ></mdb-card-image>
          <mdb-mask flex-center overlay="orange-strong" :style="'font-size:' + getBigFont" :text="title"/>
        </mdb-view>
        <mdb-card-body>
          <mdb-card-text :style="'font-size' +getFont" class="white-text">{{body}}</mdb-card-text>
        </mdb-card-body>
  </mdb-card>
</template>
<script>

export default {
    name : "ArticleTile",
    props : {
      image : String,
      title : String,
      body : String,
    },
    computed : {
      getFont() {
        if (screen.width>=1000) {
          return "4vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "2vw"
        }
      },
     getBigFont() {
        if (screen.width>=1000) {
          return "4vw"
        } else if (screen.width>=700) {
          return "3.5vw"
        } else {
          return "2vw"
        }
      }
    }
}
</script>

<style scoped>

</style>