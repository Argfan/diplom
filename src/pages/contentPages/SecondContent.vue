<template>
  <div class="main-content">
    <div class="page-header">
      <h2 class="header-title p-l-25">Диаграмма</h2>

    </div>
    <!-- Content goes Here -->
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="ct-chart mb-3" id="donut-chart1"></div>
              </div>
              <div class="col-md-5">
                <ul class="char_list my-3">
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                </ul>
              </div>
            </div>

          </div>
          <div class="col-md-6 mb-4">
            <div class="row">
              <div class="col-md-7">
                <div class="ct-chart mb-3" id="donut-chart2"></div>
              </div>
              <div class="col-md-5">
                <ul class="char_list my-3">
                  <li><span></span> - Lorem, ipsum.</li>
                  <li><span></span> - Lorem, ipsum.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: 'SecondContent'
}
</script>
<style lang="">
  
</style>