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
              <button type="button" class="btn btn-danger w-24">
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
            <div class="text-3xl mt-5">Budget succesfully approved</div>
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


let tabledata = [
    {id: 1,title:"Rent House", description:"description of Rent House", year:2022, budget_head:"Housing", budget_amount: 140000, budget_balance: 500000, status: "pending"},
    {id: 2,title:"IT specs", description:"description of IT specs", year:2022, budget_head:"Miscellenous", budget_amount: 3000, budget_balance: 5000, status: "pending"},
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
        title: "Budget Head",
        field: "budget_head",
        vertAlign: "middle",
      },
      {
        title: "Budget Amount",
        field: "budget_amount",
        vertAlign: "middle",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().budget_amount)}`;
        },        
      },
      {
        title: "Budget Balance",
        field: "budget_balance",
        vertAlign: "middle",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().budget_balance)}`;
        },
        
      },
      {
        title: "Status",
        field: "status",
        vertAlign: "middle",
        width: 120,
        formatter(cell) {
            if (cell.getData().status == 'approved') {
                return `<p class="py-1 px-2 rounded-full text-sm bg-success font-bold text-white"> Approved </p>`
            }
            if (cell.getData().status == 'rejected') {
                return `<p class="py-1 px-2 rounded-full text-sm bg-danger font-bold text-white"> Rejected </p>`
            }
          return `<p class="text-info text-sm font-bold"> Pending </p>`;
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
                    data-tw-target="#approveBudgetModal"  
                    class="btn btn-primary w-24 inline-block mr-1" 
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
  const approveBudgetModal = document.querySelector("#approveBudgetModal");
  tailwind.Modal.getOrCreateInstance(approveBudgetModal).hide();

  const approvedSuccessModal = document.querySelector("#approvedSuccessModal");
  tailwind.Modal.getOrCreateInstance(approvedSuccessModal).show();
};

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
});
</script>
