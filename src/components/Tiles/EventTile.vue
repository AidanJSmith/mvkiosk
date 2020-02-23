<template>
  <mdb-card color="amber darken-1" class="align-contents-center" > 
            <div :style="'font-size:' +getFont" >{{convertDay}}</div>
            <div :style="'font-size:' +getFont">{{description}}</div>
          <mdb-icon size="2x" far icon="calendar-check" :style="'font-size:' +getBigFont" />
            <div :style="'font-size:' +getFont">{{convertHour}}</div>
  </mdb-card>
</template>
<script>

export default {
    name : "EventTile",
    props : {
      date : String,
      description : String,
    },
    computed : {
        convertDay() {
            let tu= (new Date(this.date));
            tu=tu.toLocaleDateString(); //Takes an ISO string ,such as the one passed in the date object, and converts it into a standard m/d/y format.
            return tu;
        },
        convertHour() {
            let tu= (new Date(this.date))
            tu=tu.toLocaleTimeString().split(":")[0]+":"+tu.toLocaleTimeString().split(":")[1]+" "+ tu.toLocaleTimeString().slice(-2); //Takes the first 5 digits of the specific time at which the event occurs... i.e 10:30.
            return tu;
        },
        getFont() { //Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "3vw"
        } else if (screen.width>=700) {
          return "2.5vw"
        } else {
          return "4vw"
          }
        },
        getBigFont() {//Accounts for different screen sizes.
          if (screen.width>=1000) {
            return "10vw"
          } else if (screen.width>=700) {
            return "8vw"
          } else {
            return "20vw"
          }
        }
    }
}
</script>

<style scoped>

</style>