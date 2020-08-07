<template>
  <div>
    <h1>Kiosk 2.0</h1>
    <h2><i>This is all just placeholder text</i></h2>
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
h1 {
  align-self: center;
  font-size: 2em;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  h2 {
    display: none;
  }
}
</style>
