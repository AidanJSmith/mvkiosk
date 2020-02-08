<template>
  <div id="wrapper">
  <mdb-masonry flexbox  id="start" :numCols="4" :maxHeight="masonsize/24" :style="`height:`+masonsize/4+'vh'"  v-resize-text="{ratio:2,  maxFontSize: '5em', delay: 0}">
     <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="quote in quotes"  :key="quote.quote" ><QuoteTile :author="quote.speaker" :quote="quote.quote"/></mdb-masonry-item>
     <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="event in events"  :key="event.name" ><EventTile :date="event.date" :description="event.description"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="photo in photos"  :key="photo.name" ><PhotoTile  :caption="photo.caption"  :image="photo.imgurl"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="article in articles"  :key="article.name"><ArticleTile :body="article.body" :title="article.name"  :image="article.imgurl"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="quote in quotes"  :key="quote.quote" ><QuoteTile :author="quote.speaker" :quote="quote.quote"/></mdb-masonry-item>
     <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="event in events"  :key="event.name" ><EventTile :date="event.date" :description="event.description"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="photo in photos"  :key="photo.name" ><PhotoTile  :caption="photo.caption"  :image="photo.imgurl"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'24vw'}" v-for="article in articles"  :key="article.name"><ArticleTile :body="article.body" :title="article.name"  :image="article.imgurl"/></mdb-masonry-item>

  </mdb-masonry>
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
        "cards" : Array,
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
}
</script>

<style scoped>
#start {
    background-color: rgb(255, 219, 164);
    width:90vw;

    align-self:center;
    justify-content: center;
}
#wrapper {
    background-color: rgb(255, 219, 164);
    width:100vw;
    overflow: hidden;
    align-self:center;
    justify-content: center;
}
  .masonry-with-columns div {
    overflow: hidden;  
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 900;
    margin: 0.5rem;
  }

  .masonry-with-flex div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: white;
    margin: 0.5rem;
    font-weight: 900;
    font-size: 2rem;
  }

</style>