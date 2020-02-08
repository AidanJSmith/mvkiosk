<template>
  <mdb-card color="amber darken-1" class="align-contents-center"  v-resize-text="{ratio:2,  maxFontSize: '2vw', delay: 0}">
        <mdb-card-image :src="image" class="img-fluid" alt="Card image cap"></mdb-card-image>
        <i style="font-size:1.5vw;text-align:start"><div>Caption: {{caption}}</div></i>
  </mdb-card>
</template>
<script>

export default {
    name : "ArticleTile",
    props : {
      image : String,
      caption : String,
    }
}
</script>

<style scoped>

</style>