<template>
  <div id="app" class="app is-primary">
    <!-- <DLogin /> -->
    <DMain />
  </div>
</template>

<script>
// import DLogin from './page/Login.vue'
import DMain from './page/DMain.vue'

export default {
  name: 'App',
  components: {
    // Login,
    DMain
  }
}
</script>

<style lang="scss">
  #app {

  }
</style>
