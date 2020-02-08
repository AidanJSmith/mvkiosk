<template>
  <div id="bottomNav" class=" position-fixed" fill d-flex>
        <mdb-navbar color="sunny-morning-gradient" class="d-flex justify-content-around" fill style="font-size:1.5vw;">
			<mdb-btn color="unique"  style="font-size:1.5vw;font-family:Lucida Sans Unicode" class="rounded" @click.native="toggleActiveState1" :active="active1">Articles</mdb-btn>
			<mdb-btn color="unique" style="font-size:1.5vw;font-family:Lucida Sans Unicode" class="rounded" @click.native="toggleActiveState2" :active="active2">Photos</mdb-btn>
			<mdb-btn color="unique" style="font-size:1.5vw;font-family:Lucida Sans Unicode" class="rounded" @click.native="toggleActiveState3" :active="active3">Events</mdb-btn>
			<mdb-btn color="unique" style="font-size:1.5vw;font-family:Lucida Sans Unicode" class="rounded" @click.native="toggleActiveState4" :active="active4">Quotes</mdb-btn>
			<mdb-btn color="unique" style="font-size:1.5vw;font-family:Lucida Sans Unicode" class="rounded" @click.native="toggleActiveState5" :active="active5">Announcements</mdb-btn>
        </mdb-navbar>
  </div>
</template>

<script>
export default {
    name:"BottomNav",
    props: { 
        "items":Array
	},
	data() {
            return {
				currentActive :[],
                active1: true,
                active2: false,
				active3: false,
				active4: false,
				active5:false,
            };
		},
		methods: {
			updateList() {
				this.currentActive=[];
				if(this.active1) {
					this.currentActive.push("1");
				}
				if(this.active2) {
					this.currentActive.push("2");
				}
				if(this.active3) {
					this.currentActive.push("3");
				}
				if(this.active4) {
					this.currentActive.push("4");
				}
				if(this.active5) {
					this.currentActive.push("5");
				}
				if (!this.currentActive.length) {
					this.currentActive=["1","2","3","4","5"];
				}
			},
            toggleActiveState1() {
				this.active1 =!this.active1;
            },
            toggleActiveState2() {
				this.active2 =!this.active2;
			},
			toggleActiveState3() {
				this.active3 =!this.active3;
			},
			toggleActiveState4() {
				this.active4 =!this.active4;
			},
			toggleActiveState5() {
				this.active5 =!this.active5;
            },
		},
		watch : {
			active1 : function() {
				this.updateList()
			},
			active2 : function() {
				this.updateList()
			},
			active3 : function() {
				this.updateList()
			},
			active4 : function() {
				this.updateList()
			},
			active5 : function() {
				this.updateList()
			},

		}
}
</script>

<style scoped>
    #bottomNav {
        bottom: 0;
        right: 0;
        left: 0;
		display: inline-block;
    }
	#rounded {
		display: inline-block;
	}

    
</style>