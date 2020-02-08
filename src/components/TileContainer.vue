<template>
    <div id="start" class="d-flex container-fluid">
            <ArticleTile/>

    </div>  
</template>

<script>
import ArticleTile from './Tiles/ArticleTile'
export default {
    name : "TileContainer",
    components : {
        ArticleTile
    },
    props : {
        "cards" : Array,
    }
}
</script>

<style scoped>
#start {
    background-color: rgb(255, 219, 164);
    height:100vh;
    padding-top:15vh;
    width:100vw;
    overflow: hidden;
}
</style>