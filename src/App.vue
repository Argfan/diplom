<template>
  <div id="app" 
    class="app is-primary" 
    :class="{ 'is-folded':  ISFOLDED}"
  >
    <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App', 
  computed: {
    ...mapGetters([
      'ISFOLDED'
    ])    
  }
}
</script>

<style lang="scss">

</style>
