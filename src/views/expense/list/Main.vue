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
            <div class="text-base text-slate-500 mt-1">Dept Budget Balance</div>
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
      <router-link
        :to="{ name: 'create-expense' }"
        class="btn btn-primary shadow-md mr-2"
      >Add New Expense</router-link>
    </div>
  </div>
  <!-- BEGIN: HTML Table Data -->
  <div class="intro-y box p-5 mt-5">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
        <!-- BEGIN: Filter -->
       <Filter filterModel="salesReportFilter" />
        <!-- END: Filter -->

        <div class="w-full 2xl:w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-slate-500">
            <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
            <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
          </div>
        </div>
        <div class="dropdown w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <button
            class="dropdown-toggle btn btn-outline-secondary w-full sm:w-auto"
            aria-expanded="false"
            data-tw-toggle="dropdown"
          >
            <FileTextIcon class="w-4 h-4 mr-2" />Export
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
                  <FileTextIcon class="w-4 h-4 mr-2" />Export CSV
                </a>
              </li>
              <li>
                <a
                  id="tabulator-export-json"
                  href="javascript:;"
                  class="dropdown-item"
                  @click="onExportJson"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" />Export JSON
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible"></div>
    <div class="overflow-x-auto scrollbar-hidden">
      <div id="tabulator" ref="tableRef" class="mt-5 table-report table-report--tabulator"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";

const salesReportFilter = ref();
const tableRef = ref();
const tabulator = ref();
const filter = reactive({
  field: "title",
  type: "like",
  value: "",
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

let tabledata = [
  { id: 1, initiator: "John Doe", department: "Policy & Research", createdAt: "01-26-2022", title: "Build Road", description: "description of Build Road", year: 2022, expense_head: "Accessories", expense_amount: 40000, expense_balance: 150000, status: "approved" },
  { id: 2, initiator: "John Doe", department: "Finance", createdAt: "01-26-2022", title: "Rent House", description: "description of Rent House", year: 2022, expense_head: "Housing", expense_amount: 140000, expense_balance: 500000, status: "rejected" },
  { id: 3, initiator: "John Doe", department: "Trade in Goods", createdAt: "01-26-2022", title: "IT specs", description: "description of IT specs", year: 2022, expense_head: "Miscellenous", expense_amount: 3000, expense_balance: 5000, status: "pending" },
  { id: 4, initiator: "John Doe", department: "Policy & Research", createdAt: "01-26-2022", title: "Company Rebrand", description: "description of Company Rebrand", year: 2021, expense_head: "Accessories", expense_amount: 95000000, expense_balance: 50000000, status: "approved" }
];

const initTabulator = () => {
  tabulator.value = new Tabulator(tableRef.value, {
    data: tabledata,
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [10, 20, 30, 40],
    layout: "fitColumns",
    placeholder: "No matching records found",
    columns: [
      // For HTML table
      {
        title: "#",
        field: "id",
        vertAlign: "middle",
        hozAlign: "right",
        width: 40,
      },
      {
        title: "Year",
        field: "year",
        width: 100,
        hozAlign: "center",
      },
      {
        title: "Initiator",
        field: "initiator",
        vertAlign: "left",
      },
      {
        title: "Department",
        field: "department",
        vertAlign: "left",
      },
      {
        title: "Title",
        field: "title",
        vertAlign: "middle",
      },
      {
        title: "Description",
        field: "description",
        formatter(cell) {
          return ` ${truncate(cell.getData().description, 22)}`;
        },
      },
      {
        title: "Expense Head",
        field: "expense_head",
      },
      {
        title: "Expense Amount",
        field: "expense_amount",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().expense_amount)}`;
        },
      },
      {
        title: "Expense Balance",
        field: "expense_balance",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().expense_balance)}`;
        },

      },
      {
        title: "Status",
        field: "status",
        width: 120,
        formatter(cell) {
          if (cell.getData().status == 'approved') {
            return `<p class="text-sm inline-block font-bold text-primary"> Approved </p>`
          }
          if (cell.getData().status == 'rejected') {
            return `<p class="text-sm inline-block font-bold text-danger"> Rejected </p>`
          }
          return `<p class="text-sm inline-block font-bold text-pending"> Pending </p>`;
        },

      },
      {
        title: "Created At",
        field: "createdAt",
        vertAlign: "center",
      },
      {
        title: "Action",
        responsive: 1,
        download: false,
        formatter() {
          return `<div class="dropdown ml-auto"">
                <a class="dropdown-toggle w-7 h-7 "
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown">
                  <i data-feather="more-horizontal" class="w-8 h-8 mr-1"></i>
                </a>
                <div class="dropdown-menu w-56">
                    <ul class="dropdown-content">               
                        <li>
                        <a data-tw-toggle="modal"
                            data-tw-target="#editExpenseModal" href="javascript:;"
                            class="dropdown-item">
                            Edit
                        </a>
                        </li>
                        <li>
                        <a href="javascript:;" class="dropdown-item">
                            Clone
                        </a>
                        </li>
                    </ul>
                </div>
                
              </div>`
        },

      }
    ],
    renderComplete() {
      feather.replace({
        "stroke-width": 4,
      });
    },
  });
};

// Redraw table onresize
const reInitOnResizeWindow = () => {
  window.addEventListener("resize", () => {
    tabulator.value.redraw();
    feather.replace({
      "stroke-width": 4,
    });
  });
};

// Filter function
const onFilter = () => {
  tabulator.value.setFilter(filter.field, filter.type, filter.value);
};

// On reset filter
const onResetFilter = () => {
  filter.field = "title";
  filter.type = "like";
  filter.value = "";
  onFilter();
};

// Export
const onExportCsv = () => {
  tabulator.value.download("csv", "data.csv");
};

const onExportJson = () => {
  tabulator.value.download("json", "data.json");
};

const createdExpense = () => {
  const newExpense = document.querySelector("#newExpenseModal");
  tailwind.Modal.getOrCreateInstance(newExpense).hide();

  const expenseCreated = document.querySelector("#expenseCreated");
  tailwind.Modal.getOrCreateInstance(expenseCreated).show();
};


const truncate = (str, n) => {
  return (str.length > n) ? str.substr(0, n - 1) + '&hellip;' : str;
}

const moneyFormat = (x) => {
  return '₦' + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
});
</script>
