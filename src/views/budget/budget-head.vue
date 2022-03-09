<template>
  <h2 class="intro-y text-lg font-medium mt-10">Manage Budget Category</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
     <Filter filterModel="salesReportFilter" />
      <button data-tw-toggle="modal" data-tw-target="#newBudgetHeadModal"  class="btn btn-primary shadow-md mr-2">Add Budget Category</button>
    </div>
    <!-- BEGIN: Budget Category Layout -->
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="">ID</th>
            <th class="">Budget Category</th>
            <th class="text-left ">Account Code</th>
            <th class="text-left ">Fund Code</th>
            <th class="text-center ">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(category, fakerKey) in $_.take($f()[0].budgetCategory, 40)"
            :key="fakerKey"
            class="intro-x"
          >
            <td>{{ fakerKey + 1 }}</td>
            <td>
              <p class="font-medium whitespace-nowrap">{{
                category
              }}</p>
            </td>
            <td >
              {{ generateRandomNumber(8) }}
            </td>
            <td >
              {{ generateRandomNumber(5) }}
            </td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">
                <a
                  class="flex items-center mr-3"
                  href="javascript:;"
                  data-tw-toggle="modal"
                  data-tw-target="#edit-confirmation-modal"
                >
                  <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                </a>
                <a
                  class="flex items-center text-danger"
                  href="javascript:;"
                  data-tw-toggle="modal"
                  data-tw-target="#delete-confirmation-modal"
                >
                  <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- END: Budget Category Layout -->
  </div>
  <!-- MODAL -->
    <div
        id="newBudgetHeadModal"
        class="modal"
        tabindex="-1"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!-- BEGIN: Modal Header -->
            <div class="modal-header">
                <h2 class="font-medium text-base mr-auto">
                    Create New Budget Category
                </h2>

            </div>
            <!-- END: Modal Header -->
            <!-- BEGIN: Modal Body -->
            <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                <div class="col-span-12 sm:col-span-12">
                    <label for="modal-form-1" class="form-label">Title</label>
                    <input
                        id="modal-form-1"
                        type="text"
                        class="form-control"
                        placeholder="Title of budget category"
                    />
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label for="modal-form-1" class="form-label">Account Code</label>
                    <input
                        id="modal-form-1"
                        type="text"
                        class="form-control"
                        placeholder="account code"
                    />
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label for="modal-form-1" class="form-label">Fund Code</label>
                    <input
                        id="modal-form-1"
                        type="text"
                        class="form-control"
                        placeholder="fund code"
                    />
                </div>

                <div id="multiple-select" class="col-span-12 sm:col-span-12" >
                  <label for="input-wizard-2" class="form-label">Departments</label>
                    <TomSelect
                      :options="{
                        placeholder: 'Select department',
                      }"
                      class="w-full"
                    >
                      <option value="Finance">Finance</option>
                      <option value="Policy Research / Analysis Advocacy">Policy Research / Analysis Advocacy</option>
                      <option value="Free Trade Agreements">Free Trade Agreements</option>
                      <option value="Trade in Goods">Trade in Goods</option>
                      <option value="Trade in Services">Trade in Services</option>
                      <option value="Adminstrative Department">Adminstrative Department</option>

                    </TomSelect>
                </div>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    data-tw-dismiss="modal"
                    class="btn btn-outline-secondary w-20 mr-1"
                >
                    Cancel
                </button>
                <button @click="createdBudgetHead" type="button" class="btn btn-primary w-20">
                    Create
                </button>
            </div>
        </div>
        </div>
    </div>

    <div
    id="budgetHeadCreated"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <CheckCircleIcon
              class="w-16 h-16 text-success mx-auto mt-3"
            />
            <div class="text-xl mt-5">Budget Category succesfully created</div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button
              type="button"
              data-tw-dismiss="modal"
              class="btn btn-primary w-24"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: 'App',
    methods: {
      moneyFormat(x) {
        return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      },
      createdBudgetHead(){
        const newBudgetHead = document.querySelector("#newBudgetHeadModal");
        tailwind.Modal.getOrCreateInstance(newBudgetHead).hide();

        const budgetHeadCreated = document.querySelector("#budgetHeadCreated");
        tailwind.Modal.getOrCreateInstance(budgetHeadCreated).show();
      },
      generateRandomNumber(lenght) {
        return Math.random().toString().substr(2, lenght)
      }
    }
}


</script>
