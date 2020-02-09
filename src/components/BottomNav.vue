<template>
  <div id="bottomNav" class=" position-fixed"  d-flex>
        <mdb-navbar color="sunny-morning-gradient" class="d-flex justify-content-center	" >
				<mdb-btn-group class="btn-group" style="width:100%;text-align:center">
				<mdb-btn color="unique"  :style="'font-family:Lucida Sans Unicode;width:20%;font-size:'+getFont" class="rounded" @click.native.prevent="toggleActiveState1" :active="active1"><mdb-icon size="2x" icon="newspaper" /></mdb-btn>
				<mdb-btn color="unique" :style="'font-family:Lucida Sans Unicode;width:20%;font-size:'+getFont" class="rounded" @click.native.prevent="toggleActiveState2" :active="active2"><mdb-icon size="2x" icon="camera" /></mdb-btn>
				<mdb-btn color="unique" :style="'font-family:Lucida Sans Unicode;width:20%;font-size:'+getFont" class="rounded" @click.native.prevent="toggleActiveState3" :active="active3"><mdb-icon  size="2x" far icon="calendar-alt" /></mdb-btn>
				<mdb-btn color="unique" :style="'font-family:Lucida Sans Unicode;width:20%;font-size:'+getFont" class="rounded" @click.native.prevent="toggleActiveState4" :active="active4"><mdb-icon size="2x" icon="quote-right" /></mdb-btn>
				<mdb-btn color="unique" :style="'font-family:Lucida Sans Unicode;width:20%;font-size:'+getFont" class="rounded" @click.native.prevent="toggleActiveState5" :active="active5"><mdb-icon size="2x" icon="microphone" /></mdb-btn>
			</mdb-btn-group>
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
                active1: false,
                active2: false,
				active3: false,
				active4: false,
				active5:false,
            };
		},
		methods: {
			updateList() {
				//See how many buttons are pressed.
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
				this.$emit("updateList", this.currentActive);
			},
			//If a button is pressed, flip its active state.
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
			//Whenever any of the buttons change, modify the list of current active states. This is taken by the vuex router and used to filter the current cards shown.
			active1 : function() {
				this.updateList();
			},
			active2 : function() {
				this.updateList();
			},
			active3 : function() {
				this.updateList();
			},
			active4 : function() {
				this.updateList();
			},
			active5 : function() {
				this.updateList();
			},

		},
	computed : {
        getFont() {//Accounts for different screen sizes.
        if (screen.width>=1000) {
          return "2.5vw";
        } else if (screen.width>=700) {
          return "2.5vw";
        } else {
			return "1.3vw";
          }
        },
	},
	mounted() {
		this.updateList();
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
	}
	@media (max-width: 400px){
    .mdb-btn-group {
		width: auto !important;
		display:none !important;
	}
    .mdb-btn {
		width: auto !important;
		display:none !important;
		visibility: hidden;
		}
	}

    
</style>