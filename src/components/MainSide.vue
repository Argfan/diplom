<template>
  <div class="side-nav">
      <div class="side-nav-inner">
        <ul class="side-nav-menu scrollable">
          <li class="nav-item">
            <router-link :to="{name: 'FirstContent'}">
              <span class="icon-holder">
                <i class="anticon anticon-pie-chart"></i>
              </span>
              <span class="title">Список</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'SecondContent'}">
              <span class="icon-holder">
                <i class="anticon anticon-user"></i>
              </span>
              <span class="title">Пользователи</span>
            </router-link>
          </li>
  <!-- {{test[0].name}} -->

        </ul>
      </div>
    </div>
</template>
<script>

// import axios from 'axios'
export default {
  name: 'MainSide',
  data(){
    return{
      test: []
    }
  },
  async created(){
    // let tt = await axios.get("https://base.oshsu.kg/diplom_api/app.php")
    // this.test = tt.data
    // console.log(this.tes);
  }

}
</script>
<style lang="">
  
</style>