<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Budget</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        data-tw-toggle="modal"
        data-tw-target="#newBudgetModal"
        class="btn btn-primary shadow-md mr-2"
      >Add New Budget</button>
    </div>
  </div>

  <div class="intro-y box p-5 mt-5" id="basic-table">
    <!-- BEGIN: HTML Table Data -->
    <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
      <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
        <Filter filterModel="salesReportFilter" />

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
          >Go</button>
          <button
            id="tabulator-html-filter-reset"
            type="button"
            class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
          >Reset</button>
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
            <tr v-for="(budget, index) in ($f()[0].budgetTable)" :key="index" v-show="budget.status != 'pending'">
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
                <div
                  v-if="budget.status != 'approved'"
                  class="text-slate-500 text-xs whitespace-nowrap mt-0.5"
                >
                  <div
                    v-for="(level, levelKey) in budget.approved_level"
                    :key="levelKey"
                    v-show="levelKey == budget.approved_level.length - 1"
                  >
                    <span>{{ level.role }}</span>
                  </div>
                </div>
              </td>
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
                  <div class="dropdown-menu w-56 toggleDropdownMenu">
                    <ul class="dropdown-content">
                      <li :class="{ 'hidden': (budget.status !== 'pending') }">
                        <a
                          data-tw-toggle="modal"
                          data-tw-target="#editBudgetModal"
                          href="javascript:;"
                          class="dropdown-item"
                        >Edit</a>
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'budget-show', params: { id: budget.id } }"
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
  <!-- END: HTML Table Data -->

  <!-- MODAL -->
  <div id="newBudgetModal" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <!-- BEGIN: Modal Header -->
        <div class="modal-header">
          <h2 class="font-medium text-base mr-auto">Create New Budget</h2>
          <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
            <label class="form-check-label ml-0" for="show-example-2">Switch to Bulk Upload</label>
            <input
              id="show-example-2"
              data-target="#bulkUploadPanel"
              class="show-code form-check-input mr-0 ml-3"
              type="checkbox"
            />
          </div>
        </div>
        <!-- END: Modal Header -->
        <!-- BEGIN: Modal Body -->
        <div class="modal-body grid" id="bulkUploadPanel">
          <div class="grid-cols-12 gap-4 gap-y-3 preview">
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-7" class="form-label">Year</label>
              <input type="text" class="form-control" readonly id="datepicker" :value="getYear()" />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label">Budget Category</label>
              <select
                id="modal-form-6"
                v-model="selectedCategory"
                @change="onCategoryChange"
                class="form-select sm:mr-2"
              >
                <option
                  :value="category"
                  v-for="(category, index) in ($f()[0].budgetCategory)"
                  :key="index"
                >{{ category }}</option>
                <option value="custom">Create New Category</option>
              </select>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-3" class="form-label">Type</label>
              <select id="modal-form-6" class="form-select">
                <option>Capex</option>
                <option>Opex</option>
              </select>
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">Quantity</label>
              <input id="modal-form-4" type="number" class="form-control" />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">Budget Amount (NGN)</label>
              <input id="modal-form-4" type="number" class="form-control" />
            </div>
          </div>
          <div class="grid-cols-12 gap-4 gap-y-3 p-5 source-code hidden">
            <div class="col-span-12 sm:col-span-6">
              <div class="mt-3">
                <label for="modal-form-7" class="form-label">Upload Budget Document</label>

                <div class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                  <div class="flex flex-wrap px-4"></div>
                  <div class="px-4 pb-4 flex items-center cursor-pointer relative">
                    <ImageIcon class="w-4 h-4 mr-2" />
                    <span class="text-primary mr-1">Upload a file</span> or
                    drag and drop
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <label for="modal-form-7" class="form-label">Year</label>
                <input type="text" class="form-control" readonly id="datepicker" :value="getYear()" />
              </div>
            </div>
          </div>
        </div>
        <!-- END: Modal Body -->
        <!-- BEGIN: Modal Footer -->
        <div class="modal-footer">
          <button
            type="button"
            data-tw-dismiss="modal"
            class="btn btn-outline-secondary w-20 mr-1"
          >Cancel</button>
          <button @click="createdBudget" type="button" class="btn btn-primary w-20">Create</button>
        </div>
        <!-- END: Modal Footer -->
      </div>
      <!-- END: Modal Body -->
    </div>
  </div>

  <div id="editBudgetModal" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <!-- BEGIN: Modal Header -->
        <div class="modal-header">
          <h2 class="font-medium text-base mr-auto">Edit Budget</h2>
        </div>
        <!-- END: Modal Header -->
        <!-- BEGIN: Modal Body -->
        <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
          <div class="col-span-12 sm:col-span-6">
            <label for="modal-form-7" class="form-label">Year</label>
            <input type="text" class="form-control" readonly id="datepicker" :value="getYear()" />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="modal-form-5" class="form-label">Budget Category</label>
            <select
              id="modal-form-6"
              v-model="selectedCategory"
              @change="onCategoryChange"
              class="form-select sm:mr-2"
            >
              <option
                :value="category"
                v-for="(category, index) in ($f()[0].budgetCategory)"
                :key="index"
              >{{ category }}</option>
              <option value="custom">Create New Category</option>
            </select>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="modal-form-3" class="form-label">Type</label>
            <select id="modal-form-6" class="form-select">
              <option>Capex</option>
              <option>Opex</option>
            </select>
          </div>
          <div class="col-span-12 sm:col-span-6">
            <label for="modal-form-4" class="form-label">Quantity</label>
            <input id="modal-form-4" type="number" class="form-control" />
          </div>
          <div class="col-span-12 sm:col-span-6">
            <label for="modal-form-4" class="form-label">Budget Amount (NGN)</label>
            <input id="modal-form-4" type="number" class="form-control" />
          </div>
        </div>
        <!-- END: Modal Body -->
        <!-- BEGIN: Modal Footer -->
        <div class="modal-footer">
          <button
            type="button"
            data-tw-dismiss="modal"
            class="btn btn-outline-secondary w-20 mr-1"
          >Cancel</button>
          <button type="button" class="btn btn-primary w-20">Update</button>
        </div>
        <!-- END: Modal Footer -->
      </div>
      <!-- END: Modal Body -->
      <!-- BEGIN: Modal Footer -->
      <div class="modal-footer">
        <button
          type="button"
          data-tw-dismiss="modal"
          class="btn btn-outline-secondary w-20 mr-1"
        >Cancel</button>
        <button type="button" class="btn btn-primary w-20">Update</button>
      </div>
      <!-- END: Modal Footer -->
    </div>
  </div>

  <div id="budgetCreated" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <CheckCircleIcon class="w-16 h-16 text-success mx-auto mt-3" />
            <div class="text-3xl mt-5">Budget succesfully created</div>
          </div>
          <div class="px-5 pb-8 text-center">
            <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- NEW Budget Category -->
  <div id="newBudgetCategory" class="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <form @submit.prevent="getCategoryValues($event)">
        <div class="modal-content">
          <!-- BEGIN: Modal Header -->
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">Create New Budget Category</h2>
          </div>
          <!-- END: Modal Header -->
          <!-- BEGIN: Modal Body -->
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12 sm:col-span-12">
              <label for="modal-form-1" class="form-label">Title</label>
              <input
                id="modal-form-1"
                type="text"
                name="title"
                class="form-control"
                placeholder="Title of budget"
              />
            </div>
            <div class="col-span-12 sm:col-span-12">
              <label for="modal-form-2" class="form-label">Description</label>
              <textarea
                id="modal-form-2"
                cols="3"
                rows="3"
                maxlength="150"
                name="description"
                type="text"
                class="form-control"
                placeholder="Budget Head description"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-tw-dismiss="modal"
              class="btn btn-outline-secondary w-20 mr-1"
            >Cancel</button>
            <button type="submit" class="btn btn-primary w-20">Create</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import feather from "feather-icons";
import { useRouter } from 'vue-router';

const router = useRouter();

router.beforeEach(() => {
  if (document.querySelector('.toggleDropdownMenu')) {
    (document.querySelectorAll(".toggleDropdownMenu")).forEach((el) => el.classList.remove("show"))
  }
});

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const createdBudget = () => {
  const newBudget = document.querySelector("#newBudgetModal");
  tailwind.Modal.getOrCreateInstance(newBudget).hide();

  const budgetCreated = document.querySelector("#budgetCreated");
  tailwind.Modal.getOrCreateInstance(budgetCreated).show();
};

const moneyFormat = (x) => {
  return '₦' + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let selectedCategory = ref();

const onCategoryChange = () => {
  if (selectedCategory.value == 'custom') {
    const newBudgetCategory = document.querySelector("#newBudgetCategory");
    tailwind.Modal.getOrCreateInstance(newBudgetCategory).show();
  }
}

const getCategoryValues = (e) => {
  budgetCategory.value.push(e.target.elements.title.value);
  const newBudgetCategory = document.querySelector("#newBudgetCategory");
  tailwind.Modal.getOrCreateInstance(newBudgetCategory).hide();
  selectedCategory.value = e.target.elements.title.value;
}

// Redraw table onresize
const reInitOnResizeWindow = () => {
  window.addEventListener("resize", () => {
    feather.replace({
      "stroke-width": 4,
    });
  });
};

onMounted(() => {
  feather.replace({
    "stroke-width": 4,
  });
  reInitOnResizeWindow();
});
</script>
