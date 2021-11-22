<template>
  <div class="main-content">
    <div class="page-header">
      <h2 class="header-title p-l-25">Диаграмма</h2>

    </div>
    <!-- Content goes Here -->
    <div class="card">
      <div class="card-body">
        <form action="">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Lorem, ipsum dolor</label>
                <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Lorem, ipsum dolor">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Lorem, ipsum dolor</label>
                <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Lorem, ipsum dolor">
              </div>
            </div>
          </div>
         
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </form>
        

      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div id="invoice" class="">
          <div class="m-t-15 lh-2">
            <h4>Информация</h4>
          </div>
          <p>DataTables is a plug-in for the jQuery Javascript library. It is a highly flexible tool, built upon the foundations of progressive enhancement, that adds all of these advanced features to any HTML table. Below is an example of zero configuration.</p>
          <div class="d-flex justify-content-end m-b-30">
            <a href="add_edit_company.html" class="btn btn-primary">
              <i class="anticon anticon-plus-circle m-r-5"></i>
              <span>Добавить</span>
            </a>
          </div>
          <div class="m-t-25">
            <table id="data-table" class="table table table-striped table-responsive-md clientList">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr data-name="Tiger Nixon" data-id="101">
                  <td onclick="window.open('single_page.html' , '_self')">Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Garrett Winters" data-id="102">
                  <td onclick="window.open('single_page.html' , '_self')">Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Ashton Cox" data-id="103">
                  <td onclick="window.open('single_page.html' , '_self')">Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Cedric Kelly" data-id="104">
                  <td onclick="window.open('single_page.html' , '_self')">Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Airi Satou" data-id="105">
                  <td onclick="window.open('single_page.html' , '_self')">Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Brielle Williamson" data-id="106">
                  <td onclick="window.open('single_page.html' , '_self')">Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Herrod Chandler" data-id="107">
                  <td onclick="window.open('single_page.html' , '_self')">Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Rhona Davidson" data-id="108">
                  <td onclick="window.open('single_page.html' , '_self')">Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010/10/14</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Colleen Hurst" data-id="109">
                  <td onclick="window.open('single_page.html' , '_self')">Colleen Hurst</td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>39</td>
                  <td>2009/09/15</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Sonya Frost" data-id="110">
                  <td onclick="window.open('single_page.html' , '_self')">Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Jena Gaines" data-id="111">
                  <td onclick="window.open('single_page.html' , '_self')">Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Quinn Flynn" data-id="112">
                  <td onclick="window.open('single_page.html' , '_self')">Quinn Flynn</td>
                  <td>Support Lead</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2013/03/03</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Charde Marshall" data-id="113">
                  <td onclick="window.open('single_page.html' , '_self')">Charde Marshall</td>
                  <td>Regional Director</td>
                  <td>San Francisco</td>
                  <td>36</td>
                  <td>2008/10/16</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Haley Kennedy" data-id="114">
                  <td onclick="window.open('single_page.html' , '_self')">Haley Kennedy</td>
                  <td>Senior Marketing Designer</td>
                  <td>London</td>
                  <td>43</td>
                  <td>2012/12/18</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Tatyana Fitzpatrick" data-id="115">
                  <td onclick="window.open('single_page.html' , '_self')">Tatyana Fitzpatrick</td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>19</td>
                  <td>2010/03/17</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Michael Silva" data-id="116">
                  <td onclick="window.open('single_page.html' , '_self')">Michael Silva</td>
                  <td>Marketing Designer</td>
                  <td>London</td>
                  <td>66</td>
                  <td>2012/11/27</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Paul Byrd" data-id="117">
                  <td onclick="window.open('single_page.html' , '_self')">Paul Byrd</td>
                  <td>Chief Financial Officer (CFO)</td>
                  <td>New York</td>
                  <td>64</td>
                  <td>2010/06/09</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>
                <tr data-name="Gloria Little" data-id="118">
                  <td onclick="window.open('single_page.html' , '_self')">Gloria Little</td>
                  <td>Systems Administrator</td>
                  <td>New York</td>
                  <td>59</td>
                  <td>2009/04/10</td>
                  <td class="text-right">
                    <a href="add_edit_company.html" class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                      <i class="anticon anticon-edit"></i>
                    </a>
                    <a href="#" class="btn btn-icon btn-hover btn-sm btn-rounded del_btn" data-toggle="modal" data-target="#del_modal">
                      <i class="anticon anticon-delete"></i>
                    </a>
                  </td>
                </tr>

              </tbody>
              <tfoot>
                <tr data-name="" data-id="1">
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'FirstContent'
}
</script>
<style lang="">
  
</style>