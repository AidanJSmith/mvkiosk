<template>
  <div class="bottomNav position-fixed" fill>
        <mdb-navbar  color="sunny-morning-gradient" v-resize-text="{ratio:1,  maxFontSize: '30em', delay: 0}">
            <mdb-navbar-nav nav class="d-flex flex-fill justify-contents-around">
                <mdb-btn-group class="nowrap d-flex justify-contents-around flex-fill">

                </mdb-btn-group>
            </mdb-navbar-nav>
        </mdb-navbar>
  </div>
</template>

<script>
export default {
    name:"BottomNav",
    props: { 
        "items":Array
    },
}
</script>

<style scoped>
    .bottomNav {
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>