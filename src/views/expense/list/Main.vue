<template>
  <!-- BEGIN: General Report -->
  <div class="col-span-12 mt-8 mb-10">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <TargetIcon class="report-box__icon text-none" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-2xl font-medium leading-8 mt-6">3,721,000</div>
            <div class="text-base text-slate-500 mt-1">Dept expense Balance</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <BellIcon class="report-box__icon text-warning" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-2xl font-medium leading-8 mt-6">2,000,149</div>
            <div class="text-base text-slate-500 mt-1">Pending Expense (2,149)</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <ThumbsUpIcon class="report-box__icon text-success" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-2xl font-medium leading-8 mt-6">152,040,000</div>
            <div class="text-base text-slate-500 mt-1">Approved Expense (210)</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <DeleteIcon class="report-box__icon text-danger" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-2xl font-medium leading-8 mt-6">1,234,567</div>
            <div class="text-base text-slate-500 mt-1">Rejected Expense (210)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Expense List</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <router-link :to="{name: 'create-expense'}"
        class="btn btn-primary shadow-md mr-2">
        Add New Expense
      </router-link>
    </div>
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
      <div class="flex mt-5 sm:mt-0">
        <div class="dropdown w-1/2 sm:w-auto">
          <button
            class="dropdown-toggle btn btn-outline-secondary w-full sm:w-auto"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <FileTextIcon class="w-4 h-4 mr-2" /> Export
            <ChevronDownIcon class="w-4 h-4 ml-auto sm:ml-2" />
          </button>
          <div class="dropdown-menu w-40">
            <ul class="dropdown-content">
              <li>
                <a
                  id="tabulator-export-csv"
                  href="javascript:;"
                  class="dropdown-item"
                  @click="onExportCsv"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export CSV
                </a>
              </li>
              <li>
                <a
                  id="tabulator-export-json"
                  href="javascript:;"
                  class="dropdown-item"
                  @click="onExportJson"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export JSON
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <div class="overflow-x-auto">
        <table class="table sm:items-end xl:items-start" aria-describedby="expense list">
          <thead>
            <tr>
              <th class="whitespace-nowrap">#</th>
              <th class="whitespace-nowrap">Year</th>
              <th class="whitespace-nowrap">Initiator</th>
              <th class="whitespace-nowrap">Department</th>
              <th class="whitespace-nowrap">Title</th>
              <th class="whitespace-nowrap">Expense Head</th>
              <th class="whitespace-nowrap">Expense Amount</th>
              <th class="whitespace-nowrap">Expense Balance</th>
              <th class="whitespace-nowrap">Status</th>
              <th class="whitespace-nowrap">Created At</th>
              <th class="whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(expense, index) in ($f()[0].expenseTable)" :key="index" >
              <td>{{ index + 1 }}</td>
              <td>{{ expense.year }}</td>
              <td>{{ expense.initiator }}</td>
              <td>{{ expense.department }}</td>
              <td>{{ expense.title }}</td>
              <td>{{ expense.expense_head }}</td>
              <td>{{ moneyFormat(expense.expense_amount) }}</td>
              <td>{{ moneyFormat(expense.expense_balance) }}</td>
              <td>
                <a href class="font-medium whitespace-nowrap">
                   <p
                  class="text-sm inline-block font-bold"
                  :class="(expense.status == 'approved') ?
                  `text-primary` :
                  (expense.status == 'rejected') ? `text-danger` : `text-warning`"
                >{{ capitalizeFirstLetter(expense.status) }}</p>
                </a>
                
              </td>
              <td>{{ expense.created_at }}</td>
              <td>
                <div class="dropdown ml-auto">
                  <a
                    class="dropdown-toggle w-7 h-7"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
                  >
                    <i data-feather="more-horizontal" class="w-8 h-8 mr-1"></i>
                  </a>
                  <div class="dropdown-menu w-56 toggleDropdownMenu" id="dropdown-menu">
                    <ul class="dropdown-content">
                      <li
                        :class="{ 'hidden': (expense.status !== 'pending') }"
                      >
                        <a
                          data-tw-toggle="modal"
                          data-tw-target="#editBudgetModal"
                          href="javascript:;"
                          class="dropdown-item"
                        >Edit</a>
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'expense-show', params: { id: expense.id } }"
                          class="dropdown-item"
                        >View</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter} from 'vue-router';
import { ref, reactive, onMounted } from "vue";
import feather from "feather-icons";

const router = useRouter();

router.beforeEach(() => {
  if (document.querySelector('.toggleDropdownMenu')) {
    (document.querySelectorAll(".toggleDropdownMenu")).forEach((el) => el.classList.remove("show"))
  }
});

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

onMounted(() => {
  feather.replace({
    "stroke-width": 4,
  });
});
</script>
