<template>
  <div id="app">
    <TopNav msg="Time"/>
      <div>
        Possimus quis id doloremque omnis ipsam magnam quaerat. Libero et molestias veritatis mollitia veritatis sit eum. Tempora temporibus nisi vitae. Recusandae blanditiis veritatis rerum eius vel libero omnis. Dolorem officiis aut eos cupiditate voluptatem vel fugiat doloremque. Dolorem eveniet nemo accusamus.

        Fugit reprehenderit blanditiis est. Temporibus aut sequi quaerat quos. Itaque ut eius velit. Repudiandae magnam quam perferendis soluta qui suscipit tempora. Quos fugiat vel corrupti eius expedita. Quas at eos ex.

        Itaque qui quis adipisci libero. Aut ducimus debitis ut optio quod illo dolores est. Sed ea ea et est non id vel tenetur.
      </div>
    <BottomNav/>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    BottomNav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
