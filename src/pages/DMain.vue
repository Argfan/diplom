<template>
  <div class="mainPage">
    <MainHeader />
    <MainSide />
    

    
    <div class="page-container">
      <transition name="route">
        <router-view />
      </transition>

      <!-- Footer START -->
      <footer class="footer">
        <div class="footer-content">
          <p class="m-b-0 mx-auto">Информация© 2021 ОшГУ | Development © 2020 OshSU - IT Academy</p>
        </div>
      </footer>
      <!-- Footer END -->

    </div>

  
    <div class="modal fade" id="del_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Удаления</h5>
            <button type="button" class="close" data-dismiss="modal">
              <i class="anticon anticon-close"></i>
            </button>
          </div>
          <form action="#">
            <div class="modal-body">
              <span id="del_name">Tiger Nixon</span>
              <input type="hidden" id="del_id" name="id" value="">
            </div>
            <div class="modal-footer">
              <button type="button" data-dismiss="modal" class="btn btn-dark">Отмена</button>
              <button type="submit" class="btn btn-danger">Удалить</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>


<script>  
import MainHeader from '../components/MainHeader.vue'
import MainSide from '../components/MainSide.vue'

  
  export default {
    name: "DMain",
    components: {
      MainHeader,
      MainSide
    },
    
  }
</script>

<style lang="scss" scoped>

</style>