

<template>
  <mdb-navbar color="sunny-morning-gradient" v-resize-text="{ratio:2,  maxFontSize: '40em', delay: 0}" class="">
    <mdb-navbar-nav nav fill class="d-flex">
        <mdb-col style="text-align:left">
             <mdb-row class="" v-resize-text="{ratio:2,  maxFontSize: '10em', delay: 0}">
              6:17 | Code by Aidan Smith.
             </mdb-row>
             <mdb-row>
             Welcome to MVHS | 87 degrees.
             </mdb-row>
        </mdb-col>
       </mdb-navbar-nav>
     <mdb-navbar-nav nav right class="d-flex">
        <mdb-icon icon="map" size="2x" />
     </mdb-navbar-nav>
  </mdb-navbar>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
