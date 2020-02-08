<template>
  <mdb-card color="amber darken-1" class="align-contents-center" style="margin:auto" v-resize-text="{ratio:2,  maxFontSize: '2vw', delay: 0}">
        <mdb-card-image :src="image" class="img-fluid" alt="Card image cap" ></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title style="font-size:4vw">{{title}}</mdb-card-title>
          <mdb-card-text style="font-size:2vw" class="white-text">{{body}}</mdb-card-text>
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
    }
}
</script>

<style scoped>

</style>