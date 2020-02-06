<template>
  <div class="bottomNav position-fixed" fill d-flex>
        <mdb-navbar color="sunny-morning-gradient" style="font-family:" v-resize-text="{ratio:2,  maxFontSize: '40em', delay: 0}">
            <mdb-navbar-nav nav fill class="d-flex">
                <mdb-btn-group class="d-flex justify-content-around">

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
    }
}
</script>

<style scoped>
    .bottomNav {
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>