<template>
    <div id="wrapper">
  <masonry
  :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
  :gutter="{default: '20px', 700: '10px'}"
  stamp=".stamp"
  id="wrapper"
  :style="'transform: translate(0px,'+getTranslateY+');'"
  >
     <EventTile class="grid-item animated fadeInDown"  v-for="event in events"  :key="event.name"  :date="event.date" :description="event.name"/>
    <PhotoTile class="grid-item animated fadeInDown" v-for="photo in photos"  :key="photo.key" :caption="photo.caption"  :image="photo.imgurl"/>
    <ArticleTile class="grid-item animated fadeInDown" v-for="article in articles"  :key="article.name" :body="article.body" :title="article.name"  :image="article.imgurl"/>
     <QuoteTile class="grid-item animated fadeInDown" v-for="quote in quotes"  :key="quote.quote" :author="quote.speaker" :quote="quote.quote"/>
    </masonry>
    </div>
</template>

<script>
import ArticleTile from './Tiles/ArticleTile'
import PhotoTile from './Tiles/PhotoTile'
import EventTile from './Tiles/EventTile'
import QuoteTile from './Tiles/QuoteTile'


 
// Usage:

export default {
    name : "TileContainer",
    components : {
        ArticleTile,
        PhotoTile,
        EventTile,
        QuoteTile,
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
        }
    },
    mounted() {
        this.masonsize=this.cards.length*50;
        console.log(this.masonsize);
        
    },
    watch : {
        cards: function() {
            this.modCards();
        },
        currentList : function() {
            this.modCards();
            
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
                return "13vh";
            } else if (screen.width>=350) {
                return "10.5vh";
            } else {
                return "3.9vh";
            }
        }            
    },
    methods : {
        modCards() {
            this.articles=[];
            this.events=[];
            this.photos=[];
            this.quotes=[];
            this.masonsize=this.cards.length*50;
            for (let i=0;i<this.cards.length;i++) {

                if (this.cards[i].type=="article"&&this.numInArray("1")) {
                    this.articles.push(this.cards[i]);
                }
                if (this.cards[i].type=="photo"&&this.numInArray("2")) {
                    this.photos.push(this.cards[i]);
                }
                if (this.cards[i].type=="event"&&this.numInArray("3")) {
                    this.events.push(this.cards[i]);
                }
                if (this.cards[i].type=="quote"&&this.numInArray("4")) {
                    this.quotes.push(this.cards[i]);
                }
                
            }
            
        },
        numInArray(num) {
            for (let i=0;i<this.currentList.length;i++) {
                if (this.currentList[i]==num) {
                    return true;
                }
            }
            return false;
        }
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