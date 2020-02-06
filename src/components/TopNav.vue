

<template>
  <mdb-navbar color="sunny-morning-gradient" style="position:fixed;right:0;left:0;" v-resize-text="{ratio:2,  maxFontSize: '40em', delay: 0}" class="">
    <mdb-navbar-nav nav fill class="d-flex">
        <mdb-col style="text-align:left">
             <mdb-row class="" v-resize-text="{ratio:2,  maxFontSize: '10em', delay: 0}">
              {{time}} | Code by Aidan Smith
             </mdb-row>
             <mdb-row>
             Welcome to MVHS|{{temp}}
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
      temp : "0F",
    }
  },
  methods : {
    getWeather : function() {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.386051&lon=-122.083855&APPID=2c7a2dff5dba8638f6700dc8c15cab25', {
        method : "GET",
      })
        .then(response => response.json())
        .then(data => {
          this.temp=Math.round(data["main"]["temp"]*1.8 - 459.67,2) + "°F"
        })
        .catch(error => console.error(error))
    }
  },
  mounted() {
      this.time= new Date().toLocaleTimeString().slice(0,-6);
      this.getWeather();
  },
  created () {
    setInterval(() => this.time =  new Date().toLocaleTimeString().slice(0,-6), 1000*(61-new Date().getSeconds()))
    setInterval(() => this.getWeather(), 1000*360)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
