<template>
  <mdb-card color="amber darken-1" class="align-contents-center" style="margin:auto" >
            <div :style="'font-size:' +getFont" >{{convertDay}}</div>
            <div :style="'font-size:' +getFont">{{description}}</div>
          <mdb-icon size="2x" far icon="calendar-check" :style="'font-size:' +getBigFont" />
            <div style="'font-size:' +getFont">{{convertHour}}</div>
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
            tu=tu.toISOString().split('.')[0].split('T')[0]
            return tu;
        },
        convertHour() {
            let tu= (new Date(this.date))
            tu=tu.toISOString().split('.')[0].split('T')[1].slice(0,5)
            return tu;
        },
        getFont() {
        if (screen.width>=1000) {
          return "3vw"
        } else if (screen.width>=700) {
          return "2.5vw"
        } else {
          return "4vw"
          }
        },
        getBigFont() {
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