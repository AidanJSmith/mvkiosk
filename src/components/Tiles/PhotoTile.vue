<template>
    <div fill>  
      <mdb-card color="amber darken-1" class="" >
        <mdb-view alt="hoverable" class="zoom overlay">
           <img :src="image" class=" cover" alt=""/>
           <mdb-mask flex-center overlay="orange-strong" :style="'font-size:'+getBigFont" :text="caption"/>
        </mdb-view> 
      </mdb-card>
    </div>   
</template>
<script>

export default {
    name : "PhotoTile",
    props : {
      image : String,
      caption : String,
    },
    methods : {
    },
    computed : {
      getFont() {//Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "4vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "4vw"
        }
      },
     getBigFont() {//Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "3vw"
        } else if (screen.width>=700) {
          return "3vw"
        } else {
          return "4vw"
        }
      },
      bodyMath() {
      if (this.caption.length<50) {
        return this.caption;
      } else {
        return this.caption.substring(0,47)+"...";
      }
    }
    },
    data() {
      return {
      }
    }
}
</script>

<style scoped>

.cover {
  object-fit: cover !important;
  width: 100%  !important;
}

</style>