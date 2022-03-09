<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Budget Approval Request</h2>

  </div>
  <!-- BEGIN: HTML Table Data -->
  <div class="intro-y box p-5 mt-5">
    <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
      <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">

        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <input
            id="tabulator-html-filter-value"
            type="text"
            class="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0"
            placeholder="Search..."
          />
        </div>
        <div class="mt-2 xl:mt-0">
          <button
            id="tabulator-html-filter-go"
            type="button"
            class="btn btn-primary w-full sm:w-16"
          >
            Go
          </button>
          <button
            id="tabulator-html-filter-reset"
            type="button"
            class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
          >
            Reset
          </button>
        </div>
      </form>
      
    </div>
    <div class>
      <div class="overflow-x-auto">
        <table class="table sm:items-end xl:items-start" aria-describedby="budget list">
          <thead>
            <tr>
              <th class="whitespace-nowrap">#</th>
              <th class="whitespace-nowrap">Year</th>
              <th class="whitespace-nowrap">Department</th>
              <th class="whitespace-nowrap">Budget category</th>
              <th class="whitespace-nowrap">Budget Amount</th>
              <th class="whitespace-nowrap">Budget Balance</th>
              <th class="whitespace-nowrap">Status</th>
              <th class="whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(budget, index) in ($f()[0].budgetTable)" :key="index"  v-show="budget.status == 'pending'">
              <td>{{ index + 1 }}</td>
              <td>{{ budget.year }}</td>
              <td>{{ budget.department }}</td>
              <td>{{ budget.budget_category }}</td>
              <td>{{ moneyFormat(budget.budget_amount) }}</td>
              <td>{{ moneyFormat(budget.budget_balance) }}</td>
              <td>
                <a href class="font-medium whitespace-nowrap">
                   <p
                  class="text-sm inline-block font-bold"
                  :class="(budget.status == 'approved') ?
                  `text-primary` :
                  (budget.status == 'rejected') ? `text-danger` : `text-warning`"
                >{{ capitalizeFirstLetter(budget.status) }}</p>
                </a>
                <div v-if="budget.status != 'approved'" class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    <div v-for="(level, levelKey) in budget.approved_level" :key="levelKey" v-show="levelKey == budget.approved_level.length - 1">
                        <span>{{ level.role }}</span>
                    </div>
                    
                </div>

              </td>
              <td>
                <div class="flex lg:justify-center items-center">
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#approveBudgetModal"  
                    class="btn btn-success text-white w-24 inline-block mr-1" 
                    href="javascript:;">
                     Approve
                  </a>
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#rejctBudgetModal" 
                    class="btn btn-danger w-24 inline-block mr-1" 
                    href="javascript:;">
                     Reject
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- END: HTML Table Data -->

<!-- MODAL -->
    <div
      id="rejctBudgetModal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Are you sure?</div>
              <div class="text-slate-500 mt-2">
                Do you really want to reject this budget?.
              </div>
            </div>
            <!-- Form -->
            <div class="grid grid-cols-12 gap-4 p-4">
              <div class="col-span-12 sm:col-span-12">
                  <label for="modal-form-4" class="form-label">Reason for Rejection</label>
                  <textarea
                      id="modal-form-4"
                      type="text"
                      class="form-control"
                  ></textarea>
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-tw-dismiss="modal"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button @click="rejectSuccess" type="button" class="btn btn-danger w-24">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="approveBudgetModal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <div class="text-xl mt-5">Are you sure you want to approve this budget?</div>
            </div>
            <!-- Form -->
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-tw-dismiss="modal"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button @click="approvedSuccess" type="button" class="btn btn-primary w-24">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
    id="approvedSuccessModal"
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
            <div class="text-3xl mt-5">Budget succesfully {{ actionType }}</div>
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

<script setup>
import { ref, onMounted } from "vue";
import feather from "feather-icons";

let actionType = ref();

const rejectSuccess = () => {
  actionType.value = 'rejected';
  const rejectBudgetModal = document.querySelector("#rejctBudgetModal");
  tailwind.Modal.getOrCreateInstance(rejectBudgetModal).hide();

  const approvedSuccessModal = document.querySelector("#approvedSuccessModal");
  tailwind.Modal.getOrCreateInstance(approvedSuccessModal).show();
};

const moneyFormat = (x) => {
    return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const approvedSuccess = () => {
    actionType.value = 'approved';
  const approveBudgetModal = document.querySelector("#approveBudgetModal");
  tailwind.Modal.getOrCreateInstance(approveBudgetModal).hide();

  const approvedSuccessModal = document.querySelector("#approvedSuccessModal");
  tailwind.Modal.getOrCreateInstance(approvedSuccessModal).show();
};

onMounted(() => {
  feather.replace({
    "stroke-width": 4,
  });
});
</script>
