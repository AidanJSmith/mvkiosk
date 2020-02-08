<template>
  <mdb-card color="amber darken-1" class="align-contents-center" style="margin:auto" v-resize-text="{ratio:.75,  maxFontSize: '.2em', delay: 0}">
            <div style="font-size:2vw" >{{convertDay}}</div>
            <div style="font-size:1vw">{{description}}</div>
          <mdb-icon size="2x" far icon="calendar-check" style="font-size:18vw" />
            <div>{{convertHour}}</div>
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
    }
}
</script>

<style scoped>

</style>