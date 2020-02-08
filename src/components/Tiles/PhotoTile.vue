<template>
  <mdb-card color="amber darken-1" class="" >
        <mdb-view alt="hoverable" class="zoom overlay">
          <mdb-card-image :src="image" class="img-fluid" alt="Card image cap"></mdb-card-image>
          <mdb-mask flex-center overlay="orange-strong" style="font-size:1vw" :text="caption"/>
        </mdb-view>
  </mdb-card>
</template>
<script>

export default {
    name : "PhotoTile",
    props : {
      image : String,
      caption : String,
    }
}
</script>

<style scoped>

</style>