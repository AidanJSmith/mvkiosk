<template>
 <mdb-masonry-item :order="0" :itemStyle="{'height': '{{height}}'}">         </mdb-masonry-item>
</template>
<script>

export default {
    name : "FillerTile",
    props : {
      height : String,
    }
}
</script>

<style scoped>
  .masonry-with-columns div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00997B;
    color: white;
    margin: 0.5rem;
    font-weight: 900;
    font-size: 2rem;
  }
</style>