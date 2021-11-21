<template>
  <div id="app" class="app is-primary" :class="{ 'is-folded':  ISFOLDED}">
    <!-- <DLogin /> -->
    <DMain 
      
    />
  </div>
</template>

<script>
// import DLogin from './page/Login.vue'
import DMain from './page/DMain.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    // Login,
    DMain
  },
  data(){
    return{
     
    }    
  },
 
  computed: {
      ...mapGetters([
        'ISFOLDED'
      ])
      
    }
}
</script>

<style lang="scss">
  #app {

  }
</style>
