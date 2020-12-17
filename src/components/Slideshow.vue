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
  position: relative;
}
.header {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 2em;
  font-weight: 600;
}
.main {
  border-radius: 6px;
  box-shadow: #aaa 3px 3px 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card_info {
  display: grid;
  grid-template-columns: 100%;
  grid-area: "header" "controls";
  z-index: 1;
  position: relative;
  height: 100%;
}
.knobs {
  display: flex;
  align-self: flex-end;
  justify-content: center;
  margin-bottom: 4%;
}
.knob {
  display: inline-block;
  border-radius: 100%;
  background-color: $secondary_color;
  height: 1em;
  cursor: pointer;
  transition: all 0.4s;
  width: 1em;
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
  width: 100%;
  height: 100%;
}
</style>
