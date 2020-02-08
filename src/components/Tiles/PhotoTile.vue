<template>
  <mdb-card color="amber darken-1" class="align-contents-center"  v-resize-text="{ratio:2,  maxFontSize: '5em', delay: 0}">
    <mdb-col>
      <mdb-row>
          <mdb-card-image :src="image" alt="Card image cap"></mdb-card-image>
      </mdb-row>
         <mdb-row>
          <i v-resize-text="{ratio:2,  maxFontSize: '2em', delay: 0}">Caption: {{caption}}</i>
        </mdb-row>
    </mdb-col>
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