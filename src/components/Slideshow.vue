<template>
  <div class="container">
    <div class="card">
      <section class="card_info">
        <div class="header">{{ images[index].header }}</div>
        <div class="knobs">
          <span
            v-for="tag in images.length"
            :key="tag"
            :class="['knob', tag == index + 1 ? 'active' : '']"
            @click="setSlide(tag - 1)"
          ></span>
        </div>
      </section>
      <img class="main" :src="require(`@/assets/img/${images[index].image}`)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      index: 0,
      clicked: false
    };
  },
  mounted() {
    setInterval(() => {
      if (!this.clicked) {
        this.index += 1;
        if (this.index == this.images.length) {
          this.index = 0;
        }
      } else {
        this.clicked = false;
      }
    }, 4000);
  },
  methods: {
    setSlide(slide) {
      this.clicked = true;
      this.index = slide;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header {
  position: relative;
  font-size: 5em;
  align-self: center;

  font-weight: 600;
}
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 19px;
  object-fit: cover;
  filter: blur(2px);
}
.card_info {
  display: grid;
  grid-template-rows: 90% 10%;
  grid-template-columns: 100%;
  grid-area: "header" "controls";
  z-index: 1;
  position: relative;
  height: 100%;
}
.knobs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}
.knob {
  display: inline-block;
  border-radius: 100%;
  background-color: $secondary_color;
  height: 2em;
  cursor: pointer;
  transition: all 0.4s;
  width: 2em;
  &:not(:first-child) {
    margin-left: 0.5em;
  }
  &.active {
    background-color: $tertiary_color;
  }
}
.card {
  position: relative;
  background: $primary_color;
  width: 90%;
  border-radius: 19px;
  height: 90%;
}
</style>
