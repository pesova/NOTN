<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Expense Approval Request</h2>

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
        <table class="table sm:items-end xl:items-start" aria-describedby="expense list">
          <thead>
            <tr>
              <th class="whitespace-nowrap">#</th>
              <th class="whitespace-nowrap">Initiator</th>
              <th class="whitespace-nowrap">Title</th>
              <th class="whitespace-nowrap">Expense Category</th>
              <th class="whitespace-nowrap">Beneficiary</th>
              <th class="whitespace-nowrap">Expense Amount</th>
              <th v-show="false" class="whitespace-nowrap">Expense Balance</th>
              <th class="whitespace-nowrap">Status</th>
              <th class="whitespace-nowrap">Created At</th>
              <th class="whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(expense, index) in ($f()[0].expenseTable)" :key="index"  v-show="expense.status == 'pending'" style="cursor:pointer" @click="viewExpense(expense.id)">
              <td>{{ index + 1 }}</td>
              <td>{{ expense.initiator }}</td>
              <td>{{ expense.title }}</td>
              <td>{{ expense.expense_head }}</td>
              <td>{{ expense.beneficiary }} <small>({{expense.beneficiary_account_number}})</small></td>
              <td>{{ moneyFormat(expense.expense_amount) }}</td>
              <td v-show="false" >{{ moneyFormat(expense.expense_balance) }}</td>
              <td>
                <a href class="font-medium whitespace-nowrap">
                   <p
                  class="text-sm inline-block font-bold"
                  :class="(expense.status == 'approved') ?
                  `text-primary` :
                  (expense.status == 'rejected') ? `text-danger` : `text-warning`"
                >{{ capitalizeFirstLetter(expense.status) }}</p>
                </a>

                <div v-if="expense.status != 'approved'" class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    <div v-for="(level, levelKey) in expense.approved_level" :key="levelKey" v-show="levelKey == expense.approved_level.length - 1">
                        <span>{{ level.role }}</span>
                    </div>
                    
                </div>

                
              </td>
              <td>{{ expense.created_at }}</td>
              <td>
                <div class="flex lg:justify-center items-center">
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#approveexpenseModal"  
                    class="btn btn-success text-white w-24 inline-block mr-1" 
                    href="javascript:;">
                     Approve
                  </a>
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#rejctexpenseModal" 
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
      id="rejctExpenseModal"
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
                Do you really want to reject this expense?.
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
      id="approveExpenseModal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <div class="text-xl mt-5">Are you sure you want to approve this expense?</div>
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
            <div class="text-3xl mt-5">Expense succesfully {{ actionType }}</div>
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
import { useRouter} from 'vue-router';

const router = useRouter();


const getYearandMonth = () => {
    const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `${year}-0${month}`;
  }
  return `${year}-${month}`;
};


const createdExpense = () => {
  const newExpense = document.querySelector("#newExpenseModal");
  tailwind.Modal.getOrCreateInstance(newExpense).hide();

  const expenseCreated = document.querySelector("#expenseCreated");
  tailwind.Modal.getOrCreateInstance(expenseCreated).show();
};


const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

const moneyFormat = (x) => {
    return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const viewExpense = (budgetId) => {
  router.push({name: 'expense-show', params: {id: budgetId}});
}

onMounted(() => {
  feather.replace({
    "stroke-width": 4,
  });
});
</script>
