<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Budget</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button 
         @click="newBudget" 
            data-tw-toggle="modal"
            data-tw-target="#newBudgetModal" 
            class="btn btn-primary shadow-md mr-2">
            Add New Budget
        </button>
    </div>
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
        id="newBudgetModal"
        class="modal"
        tabindex="-1"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <!-- BEGIN: Modal Header -->
            <div class="modal-header">
                <h2 class="font-medium text-base mr-auto">
                    Create New Budget
                </h2>

            </div>
            <!-- END: Modal Header -->
            <!-- BEGIN: Modal Body -->
            <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-1" class="form-label">Title</label>
                    <input
                        id="modal-form-1"
                        type="text"
                        class="form-control"
                        placeholder="Title of budget"
                    />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-2" class="form-label">Description</label>
                    <input
                        id="modal-form-2"
                        max="150"
                        type="text"
                        class="form-control"
                        placeholder="Description of budget"
                    />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-3" class="form-label">Type</label
                    >
                    <select id="modal-form-6" class="form-select">
                        <option>Copex</option>
                        <option>Opex</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-5" class="form-label"
                    >Budget Head Title</label>
                    <select id="modal-form-6"  class="form-select mt-2 sm:mr-2">
                        <option>Accessories</option>
                        <option>Housing</option>
                        <option>Miscellenous</option>
                        <option>Feeding</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-4" class="form-label"
                    >Budget Amount (NGN)</label>
                    <input
                        id="modal-form-4"
                        type="number"
                        class="form-control"
                    />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label for="modal-form-4" class="form-label"
                    >Quantity</label
                    >
                    <input
                        id="modal-form-4"
                        type="number"
                        class="form-control"
                    />
                </div>
            </div>
            <!-- END: Modal Body -->
            <!-- BEGIN: Modal Footer -->
            <div class="modal-footer">
                <button
                    type="button"
                    data-tw-dismiss="modal"
                    class="btn btn-outline-secondary w-20 mr-1"
                >
                    Cancel
                </button>
                <button type="button" class="btn btn-primary w-20">
                    Create
                </button>
            </div>
            <!-- END: Modal Footer -->
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";
import dom from "@left4code/tw-starter/dist/js/dom";

const tableRef = ref();
const tabulator = ref();
const filter = reactive({
  field: "title",
  type: "like",
  value: "",
});


var tabledata = [
    {title:"Build Road", description:"description of Build Road", type:"Copex", quantity:1, budget_head:"Accessories", budget_amount: 40000, budget_balance: 150000, status: "approved"},
    {title:"Rent House", description:"description of Rent House", type:"Opex", quantity:2, budget_head:"Housing", budget_amount: 140000, budget_balance: 500000, status: "rejected"},
    {title:"IT specs", description:"description of IT specs", type:"Copex", quantity:4, budget_head:"Miscellenous", budget_amount: 3000, budget_balance: 5000, status: "pending"},
    {title:"Company Rebrand", description:"description of Company Rebrand", type:"Opex", quantity:1, budget_head:"Accessories", budget_amount: 95000000, budget_balance: 50000000, status: "approved"}
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
        title: "Title",
        field: "title",
        vertAlign: "middle",
      },
      {
        title: "Description",
        field: "description",
        widthGrow: 2,
        formatter(cell) {
          return ` ${truncate(cell.getData().description, 42)}`;
        },
      },
      {
        title: "Type",
        field: "type",
        width: 100,
        hozAlign:"center",
      },
      {
        title: "Quantity",
        field: "quantity",
        width: 100,
        hozAlign:"center",
      },
      {
        title: "Budget Head",
        field: "budget_head", 
      },
      {
        title: "Budget Amount",
        field: "budget_amount",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().budget_amount)}`;
        },        
      },
      {
        title: "Budget Balance",
        field: "budget_balance",
        formatter(cell) {
          return ` ${moneyFormat(cell.getData().budget_balance)}`;
        },
        
      },
      {
        title: "Status",
        field: "status",
        formatter(cell) {
            if (cell.getData().status == 'approved') {
                return `<p class="text-primary"> ${cell.getData().status} </p>`
            }
            if (cell.getData().status == 'rejected') {
                return `<p class="text-danger"> ${cell.getData().status} </p>`
            }
          return `<p> ${cell.getData().status} </p>`;
        },
        
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
                        <a href="javascript:;" class="dropdown-item">
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


const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

const moneyFormat = (x) => {
    return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
});
</script>
