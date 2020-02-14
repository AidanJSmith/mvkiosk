<template>
    <div id="wrapper">
  <masonry
  :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
  :gutter="{default: '20px', 700: '10px'}"
  stamp=".stamp"
  id="wrapper"
  :style="'transform: translate(0px,'+getTranslateY+');'"
  >
    <SorterTile class="grid-item " :restricts="currentList" v-for="type in compcards" :key="compcards.indexOf(type)" :card="type"/>
    
    </masonry>
    </div>
</template>

<script>

import SorterTile from './Tiles/SorterTile'

 
// Usage:

export default {
    name : "TileContainer",
    components : {
        SorterTile,
    },
    props : {
        cards : Array,
        currentList : Array,
    },
    data() {
        return {
            masonsize:0,
            articles:[],
            photos:[],
            events:[],
            quotes:[],
            mounted:false,
        }
    },
    mounted() {
        this.masonsize=this.cards.length*50;
        console.log(this.masonsize);
        
    },
    watch : {
        currentList : function() {
            for(let i=0;i<this.cards.length;i++) {
                this.i+=1;
            }
            
        },
        mounted : function() {
            
        }
    },
    computed : {
        getTranslateY() {
            if (screen.width>1000) {
                if (screen.height>800) {
                    return "17vh"
                }
                return "15vh";
            } else if(screen.width>=700) {
                return "14vh";
            } else if(screen.width>=500) {
                return "10vh";
            } else if (screen.width>=350) {
                return "10.5vh";
            } else {
                return "3.9vh";
            }
        },
        compcards() {
            if (this.currentList.length==1) {
                return this.cards.slice().sort();
            }
            return this.cards;
        }            
    },
    methods : {
    }
}
</script>

<style scoped>

#wrapper {
    background-color: rgb(255, 219, 164);
    align-self:center;
    justify-content: center;
}
.grid-item {
    margin-bottom: 2vh;
    margin-top: 2vh;
}

</style>