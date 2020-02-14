<template>
<div>
     <EventTile class="grid-item animated fadeInDown"  v-if="card.type=='event'&&numInArray('1')"  :date="card.date" :description="card.name"/>
    <PhotoTile class="grid-item animated fadeInDown" v-if="card.type=='photo'&&numInArray('2')"  :caption="card.caption"  :image="card.imgurl"/>
    <ArticleTile class="grid-item animated fadeInDown"  v-if="card.type=='article'&&numInArray('3')" :body="card.body" :title="card.name"  :image="card.imgurl"/>
     <QuoteTile class="grid-item animated fadeInDown"  v-if="card.type=='quote'&&numInArray('4')"   :author="card.speaker" :quote="card.quote"/>
  </div>
</template>
<script>
import ArticleTile from '../Tiles/ArticleTile'
import PhotoTile from '../Tiles/PhotoTile'
import EventTile from '../Tiles/EventTile'
import QuoteTile from '../Tiles/QuoteTile'

export default {
    name : "SorterTile",
    components : {
        ArticleTile,
        PhotoTile,
        EventTile,
        QuoteTile,
    },
    props : {
      card : Object,
      restricts : Array,
    
    },
    watch : {
    },
    methods : {
         numInArray(num) {
            for (let i=0;i<this.restricts.length;i++) {
                if (this.restricts[i]==num) {
                    return true;
                }
            }
            return false;
        },
    }
}
</script>

<style scoped>
</style>