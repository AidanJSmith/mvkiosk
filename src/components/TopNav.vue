

<template>
  <mdb-navbar color="amber darken-3" style="position:fixed;right:0;left:0;" v-resize-text="{ratio:2,  maxFontSize: '40em', delay: 0}" class="">
    <mdb-navbar-nav nav fill class="d-flex">
        <mdb-col style="text-align:left">
             <mdb-row class="" :style="'font-size:'+getFont">
              {{time}} | {{getDate}}   | Code by Aidan Smith
             </mdb-row>
             <mdb-row>
             MVHS Kiosk |{{temp}}
             </mdb-row>
        </mdb-col>
       </mdb-navbar-nav>
      <mdb-navbar-nav nav right class="d-flex">
        <mdb-icon @click.native="modal = true" icon="map" style="cursor:pointer" size="2x" />
        <mdb-modal :show="modal" class="p-0"  size="fluid" @close="modal = false">
          <mdb-modal-header>
            <mdb-modal-title>School Map</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
              <mdb-row class="align-items-center justify-content-center">
                <img class="align-self-center" style="fill" src="../assets/map.png">
              </mdb-row>
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="amber" @click.native="modal = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
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
      modal : false,
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
        .catch(error => console.error(error));
    }
  },
  mounted() {
      this.time= new Date().toLocaleTimeString().slice(0,-6);
      this.getWeather();
  },
  created () {
    setInterval(() => this.time =  new Date().toLocaleTimeString().slice(0,-6), 2000);
    setInterval(() => this.getWeather(), 1000*360);
  }, 
  computed : {
    getDate() {
      return new Date().toString().slice(0,11);
    },
    getFont() {//Accounts for different screen sizes.
      if (screen.width>=1000) {
        return "1.25vw";
      } else if (screen.width>=500) {
        return "3vw";
      } else if (screen.width>=300) {
        return "3vw";
      } else {
        return "2vw";
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
