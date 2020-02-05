<template>
  <mdb-navbar color="sunny-morning-gradient" class=" py-4">
    <mdb-navbar-nav nav fill class="d-flex">
      <mdb-nav-item class="">
        <mdb-col>
             <mdb-row style="font-size:small">
              Time, eventually. Maybe other stuff. Code by Aidan Smith.
             </mdb-row>
             <mdb-row style="font-size:1.5em">
             Welcome to MVHS, it's X degrees out today.
             </mdb-row>
        </mdb-col>
        </mdb-nav-item>
       </mdb-navbar-nav>
     <mdb-navbar-nav nav right class="d-flex">
      <mdb-nav-item class="">
        <mdb-icon icon="map" size="3x" />
      </mdb-nav-item>
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
