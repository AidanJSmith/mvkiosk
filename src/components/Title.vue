<template>
  <div>
    <h1>Mountain View High School</h1>
    <h2>Home of the Spartans</h2>
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style lang="scss" scoped>
div {
  background-color: gold;
  border-radius: 2px;
  box-shadow: #aaa 3px 3px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  padding: 0 30px;
}

h1, h2 {
  margin: 0;
}
</style>
