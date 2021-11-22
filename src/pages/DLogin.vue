<template>
  <div class="loginPage bg">
    <div class="container-fluid p-h-0 p-v-20 full-height d-flex">
      <div class="d-flex flex-column justify-content-between w-100">
        <div class="container d-flex h-100">
          <div class="row align-items-center w-100">
            <div class="col-md-7 col-lg-5 m-h-auto">
              <div class="card shadow-lg">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between m-b-30">
                    <img class="logo" alt="" src="../assets/images/logo/logo_s3.svg">
                    <h2 class="m-b-0">Авторизация</h2>
                  </div>
                  <form action="list.html">
                    <div class="form-group">
                      <label class="font-weight-semibold" for="userName">Имя пользователя:</label>
                      <div class="input-affix">
                        <i class="prefix-icon anticon anticon-user"></i>
                        <input type="text" class="form-control" id="userName" placeholder="Логин" v-model="user.login">
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="font-weight-semibold" for="password">Пароль:</label>
                      <!-- <a class="float-right font-size-13 text-muted" href="">Forget Password?</a> -->
                      <div class="input-affix m-b-10">
                        <i class="prefix-icon anticon anticon-lock"></i>
                        <input type="password" class="form-control" id="password" placeholder="*****" v-model="user.password">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="d-flex align-items-center justify-content-center">
                        <!-- <button type="submit" class="btn btn-primary">Вход</button> -->
                        <router-link type="submit" class="btn btn-primary" :to="{name: 'main'}">Вход</router-link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'DLogin',
    data(){
      return{
        user: {
          login: '',
          password: ''
        }
      }
    },
    comtuted: {
      ...mapGetters([
        'USER_GET'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  
</style>