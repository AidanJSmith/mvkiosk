

<template>
  <mdb-navbar color="sunny-morning-gradient" style="position:fixed;right:0;left:0;" v-resize-text="{ratio:2,  maxFontSize: '40em', delay: 0}" class="">
    <mdb-navbar-nav nav fill class="d-flex">
        <mdb-col style="text-align:left">
             <mdb-row class="" v-resize-text="{ratio:2,  maxFontSize: '10em', delay: 0}">
              {{time}} | Code by Aidan Smith
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
  },
  data()  {
    return {
      time : "123",
    }
  },
  mounted() {
      this.time= new Date().toLocaleTimeString().slice(0,-6);
     fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=2c7a2dff5dba8638f6700dc8c15cab25', {
       method : "GET",
     })
      .then(response => response)
      .then(data => {
        console.log(data) // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error))
  },
  created () {
    setInterval(() => this.time =  new Date().toLocaleTimeString().slice(0,-6), 1000*30)     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
