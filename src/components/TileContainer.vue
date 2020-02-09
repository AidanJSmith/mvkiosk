<template>
    <div id="wrapper">
  <masonry
  :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
  :gutter="{default: '20px', 700: '10px'}"
  id="wrapper"
  :style="'transform: translate(0px,'+getTranslateY+')'"
  >
     <EventTile class="grid-item" v-for="event in events"  :key="event.name"  :date="event.date" :description="event.name"/>
    <PhotoTile class="grid-item" v-for="photo in photos"  :key="photo.key" :caption="photo.caption"  :image="photo.imgurl"/>
    <ArticleTile class="grid-item" v-for="article in articles"  :key="article.name" :body="article.body" :title="article.name"  :image="article.imgurl"/>
     <QuoteTile class="grid-item" v-for="quote in quotes"  :key="quote.quote" :author="quote.speaker" :quote="quote.quote"/>
     <EventTile class="grid-item" v-for="event in events"  :key="event.name"  :date="event.date" :description="event.name"/>
    <PhotoTile class="grid-item" v-for="photo in photos"  :key="photo.key" :caption="photo.caption"  :image="photo.imgurl"/>
    <ArticleTile class="grid-item" v-for="article in articles"  :key="article.name" :body="article.body" :title="article.name"  :image="article.imgurl"/>
     <QuoteTile class="grid-item" v-for="quote in quotes"  :key="quote.quote" :author="quote.speaker" :quote="quote.quote"/>
     

  </masonry>
    </div>
</template>

<script>
import ArticleTile from './Tiles/ArticleTile'
import PhotoTile from './Tiles/PhotoTile'
import EventTile from './Tiles/EventTile'
import QuoteTile from './Tiles/QuoteTile'

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
            this.masonsize=this.cards.length*50;
            for (let i=0;i<this.cards.length;i++) {
                console.log(this.cards[i].type)
                if (this.cards[i].type=="article") {
                    this.articles.push(this.cards[i]);
                }
                if (this.cards[i].type=="photo") {
                    this.photos.push(this.cards[i]);
                }
                if (this.cards[i].type=="event") {
                    this.events.push(this.cards[i]);
                }
                if (this.cards[i].type=="quote") {
                    this.quotes.push(this.cards[i]);
                }
            }
        }
    },
    computed : {
        getTranslateY() {
            console.log(screen.width);
            return "15vh";
        }            
    }
}
</script>

<style scoped>

#wrapper {
    background-color: rgb(255, 219, 164);
    overflow: hidden;
    align-self:center;
    justify-content: center;
}
.grid-item {
    margin-bottom: 2vh;
    margin-top: 2vh;
}

</style>