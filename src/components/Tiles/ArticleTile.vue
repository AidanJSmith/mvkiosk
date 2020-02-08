<template>
  <mdb-card color="blue">
    <mdb-card-image src="https://picsum.photos/600/300/?image=25" alt="Card image cap"></mdb-card-image>
    <mdb-card-body>
      <mdb-card-title>Article Title</mdb-card-title>
      <mdb-card-text>Some really great info about the article.</mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>
<script>

export default {
    name : "ArticleTile"
}
</script>

<style>
mdb-card {
    height:10vh;
    width:20vw;
}
</style>