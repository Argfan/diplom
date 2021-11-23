<template>
  <div class="header">
    <div class="logo logo-dark">
      <a href="index.html">
        <!-- <img src="assets/images/logo/logo.png" alt="Logo">
        <img class="logo-fold" src="assets/images/logo/logo-fold.png" alt="Logo"> -->
        <img src="../assets/images/logo/logo_s3.svg" alt="Logo">
        <img class="logo-fold" src="../assets/images/logo/logo_s3_fold.svg" alt="Logo">
      </a>
    </div>
    <div class="logo logo-white">
      <a href="index.html">
        <img src="../assets/images/logo/logo_s3_white.svg" alt="Logo">
        <img class="logo-fold" src="../assets/images/logo/logo_s3_fold_white.svg" alt="Logo">
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="nav-left">
        <li class="desktop-toggle">
          <a href="#" @click.prevent="isFoldOn">
            <i class="anticon"></i>
          </a>
        </li>
        <li class="mobile-toggle">
          <a href="#">
            <i class="anticon"></i>
          </a>
        </li>

      </ul>
      <ul class="nav-right">

        <li class="dropdown dropdown-animated scale-left" @click="showProfile">
          <div class="pointer" data-toggle="dropdown">
            <div class="avatar avatar-image bg-primary  m-h-10 m-r-15">
              <!-- <img src=""  alt=""> -->
              <i class="fas fa-user-alt"></i>
            </div>
          </div>
          <div class="p-b-15 p-t-20 dropdown-menu pop-profile" :class="{'show': isProfile}">
            <div class="p-h-20 p-b-15 m-b-10 border-bottom">
              <div class="d-flex m-r-50">
                <div class="avatar avatar-lg avatar-image bg-primary">
                  <!-- <img src="" alt=""> -->
                  <i class="fas fa-user-alt"></i>
                </div>
                <div class="m-l-10">
                  <p class="m-b-0 text-dark font-weight-semibold">Эшматов Ташмат</p>
                  <p class="m-b-0 opacity-07">Администратор</p>
                </div>
              </div>
            </div>

            <router-link to="/"  class="dropdown-item d-block p-h-15 p-v-10">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-logout"></i>
                  <span class="m-l-10">Выход</span>
                </div>
                <i class="anticon font-size-10 anticon-right"></i>
              </div>
            </router-link>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'MainHeader',
  data(){
    return{
      isFold: this.ISFOLDED || false,
      isProfile: false
    }
  },
  computed: {
    ...mapGetters([
      'ISFOLDED'
    ]),
  },
  methods: {
    ...mapActions([
      'ISFOLDED_CHANGE'
    ]),      
    isFoldOn(){
      this.isFold =!this.isFold
      this.ISFOLDED_CHANGE(this.isFold)
    },
    showProfile(){
      this.isProfile =!this.isProfile
    }
  },
}
</script>
<style lang="">
  
</style>