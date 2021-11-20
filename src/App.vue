<template>
  <div id="app" class="app is-primary" :class="{ 'is-folded':  isfolded}">
    <!-- <DLogin /> -->
    <DMain 
      @isFoldOn="isFoldOn"
    />
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
  },
  data(){
    return{
      isfolded: false
    }    
  },
  methods: {
    isFoldOn(f){
      this.isfolded = f 
      console.log(f);
    }
  }
}
</script>

<style lang="scss">
  #app {

  }
</style>
