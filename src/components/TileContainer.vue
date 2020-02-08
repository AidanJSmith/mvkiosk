<template>
  <mdb-masonry  id="start" :numCols="2" :maxHeight="1000" style="translatex:18vmin;height: 14400vh;"  v-resize-text="{ratio:2,  maxFontSize: '5em', delay: 0}">
     <mdb-masonry-item :itemStyle="{'width':'18vw'}" v-for="event in events"  :key="event.name" ><EventTile :date="event.date" :description="event.description"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'18vw'}" v-for="photo in photos"  :key="photo.name" ><PhotoTile  :caption="photo.caption"  :image="photo.imgurl"/></mdb-masonry-item>
    <mdb-masonry-item :itemStyle="{'width':'18vw'}" v-for="article in articles"  :key="article.name"><ArticleTile :body="article.body" :title="article.name"  :image="article.imgurl"/></mdb-masonry-item>
    
  </mdb-masonry>
</template>

<script>
import ArticleTile from './Tiles/ArticleTile'
import PhotoTile from './Tiles/PhotoTile'
import EventTile from './Tiles/EventTile'
export default {
    name : "TileContainer",
    components : {
        ArticleTile,
        PhotoTile,
        EventTile,
    },
    props : {
        "cards" : Array,
    },
    data() {
        return {
            articles:[],
            photos:[],
            events:[]
        }
    },
    mounted() {
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
        }
    }
}
</script>

<style scoped>
#start {
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
    background: rgba(255, 211, 16, 0);
    color: white;
    font-weight: 900;
    margin: .18vw;
  }

</style>