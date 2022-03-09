<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Expense Approval Request</h2>

  </div>
  <!-- BEGIN: HTML Table Data -->
  <div class="intro-y box p-5 mt-5">
    <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
      <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">

        <Filter filterModel="salesReportFilter" />
        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <input
            id="tabulator-html-filter-value"
            v-model="filter.value"
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
            @click="onFilter"
          >
            Go
          </button>
          <button
            id="tabulator-html-filter-reset"
            type="button"
            class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
            @click="onResetFilter"
          >
            Reset
          </button>
        </div>
      </form>
      
    </div>
    <div class="overflow-x-auto scrollbar-hidden">
      <div
        id="tabulator"
        ref="tableRef"
        class="mt-5 table-report table-report--tabulator"
      ></div>
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
import { ref, reactive, onMounted } from "vue";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";

const tableRef = ref();
const tabulator = ref();
const filter = reactive({
  field: "title",
  type: "like",
  value: "",
});

let actionType = ref();

const rejectSuccess = () => {
  actionType.value = 'rejected';
  const rejectExpenseModal = document.querySelector("#rejctExpenseModal");
  tailwind.Modal.getOrCreateInstance(rejectExpenseModal).hide();

  const approvedSuccessModal = document.querySelector("#approvedSuccessModal");
  tailwind.Modal.getOrCreateInstance(approvedSuccessModal).show();
};


let tabledata = [
    {id: 1,title:"Rent House", description:"description of Rent House", year:2022, expense_head:"Housing", expense_amount: 140000, expense_balance: 500000, status: "pending"},
    {id: 2,title:"IT specs", description:"description of IT specs", year:2022, expense_head:"Miscellenous", expense_amount: 3000, expense_balance: 5000, status: "pending"},
];

const initTabulator = () => {
  tabulator.value = new Tabulator(tableRef.value, {
    data: tabledata,
    layout: "fitColumns",
    placeholder: "No matching records found",
    columns: [
      // For HTML table
      {
        title: "#",
        field: "id",
        vertAlign: "middle",
        hozAlign:"right",
        width: 40,
      },
      {
        title: "Title",
        field: "title",
        vertAlign: "middle",
      },
      {
        title: "Description",
        field: "description",
        vertAlign: "middle",
        formatter(cell) {
          return ` ${truncate(cell.getData().description, 22)}`;
        },
      },
      {
        title: "Year",
        field: "year",
        width: 100,
        hozAlign:"center",
        vertAlign: "middle",
      },
      {
        title: "Expense Head",
        field: "expense_head",
        vertAlign: "middle",
      },
      {
        title: "Expense Amount",
        field: "expense_amount",
        vertAlign: "middle",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().expense_amount)}`;
        },        
      },
      {
        title: "Expense Balance",
        field: "expense_balance",
        vertAlign: "middle",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().expense_balance)}`;
        },
        
      },
      {
        title: "Status",
        field: "status",
        vertAlign: "middle",
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
        title: "Action",
        responsive: 1,
        download: false,
        width: 200,
        formatter() {
                return `
                <div class="flex lg:justify-center items-center">
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#approveExpenseModal"  
                    class="btn btn-success text-white w-24 inline-block mr-1" 
                    href="javascript:;">
                     Approve
                  </a>
                  <a 
                    data-tw-toggle="modal"
                    data-tw-target="#rejctExpenseModal" 
                    class="btn btn-danger w-24 inline-block mr-1" 
                    href="javascript:;">
                     Reject
                  </a>
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


const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

const moneyFormat = (x) => {
    return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const approvedSuccess = () => {
    actionType.value = 'approved';
  const approveExpenseModal = document.querySelector("#approveExpenseModal");
  tailwind.Modal.getOrCreateInstance(approveExpenseModal).hide();

  const approvedSuccessModal = document.querySelector("#approvedSuccessModal");
  tailwind.Modal.getOrCreateInstance(approvedSuccessModal).show();
};

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
});
</script>
