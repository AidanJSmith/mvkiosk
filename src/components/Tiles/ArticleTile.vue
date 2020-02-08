<template>
  <mdb-card color="amber darken-1" class="align-contents-center"  v-resize-text="{ratio:2,  maxFontSize: '5em', delay: 0}">
    <mdb-col>
      <mdb-row>
          <mdb-card-image :src="image" alt="Card image cap"></mdb-card-image>
      </mdb-row>
      <mdb-row>
        <mdb-card-body>
          <mdb-card-title>{{title}}</mdb-card-title>
          <mdb-card-text class="grey-text">{{body}}</mdb-card-text>
        </mdb-card-body>
        </mdb-row>
    </mdb-col>
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