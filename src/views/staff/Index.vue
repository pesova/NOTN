<template>
  <!-- BEGIN: General Report -->
  <div class="col-span-12 mt-8 mb-10">
    <div class="intro-y flex items-center h-10">
      <h2 class="text-lg font-medium truncate mr-5">Staff List</h2>
      <a href="" class="ml-auto flex items-center text-primary">
        <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload Data
      </a>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <UsersIcon class="report-box__icon text-success" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">3.721</div>
            <div class="text-base text-slate-500 mt-1">Total Staff</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <UserIcon class="report-box__icon text-warning" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">2.149</div>
            <div class="text-base text-slate-500 mt-1">Inactive Staff</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5">
            <div class="flex">
              <UserIcon class="report-box__icon text-success" />
              <div class="ml-auto"></div>
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">152.040</div>
            <div class="text-base text-slate-500 mt-1">Active Staff</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END: General Report -->
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <a
        href="javascript:;"
        data-tw-toggle="modal"
        data-tw-target="#success-modal-preview"
        class="btn btn-primary shadow-md mr-2"
      >
        <RefreshCcwIcon class="w-4 h-4 mr-3" /> Sync Staff</a
      >
      <div class="dropdown">
        <button
          class="dropdown-toggle btn px-2 box"
          aria-expanded="false"
          data-tw-toggle="dropdown"
        >
          <span class="w-5 h-5 flex items-center justify-center">
            <FileIcon class="w-4 h-4 mr-2" />
          </span>
        </button>
        <div class="dropdown-menu w-40">
          <ul class="dropdown-content">
            <li>
              <a href="" class="dropdown-item">
                <PrinterIcon class="w-4 h-4 mr-2" /> Print
              </a>
            </li>
            <li>
              <a href="" class="dropdown-item">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel
              </a>
            </li>
            <li>
              <a href="" class="dropdown-item">
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
        <CalendarIcon
          class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
        />
        <Litepicker
          v-model="salesReportFilter"
          :options="{
            autoApply: false,
            singleMode: false,
            numberOfColumns: 2,
            numberOfMonths: 2,
            showWeekNumbers: true,
            dropdowns: {
              minYear: 2020,
              maxYear: null,
              months: true,
              years: true,
            },
          }"
          class="form-control sm:w-56 box pl-10"
        />
      </div>

      <div class="hidden md:block mx-auto text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-slate-500">
          <input
            type="text"
            class="form-control w-56 box pr-10"
            placeholder="Search..."
          />
          <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
        </div>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap">ID</th>
            <th class="whitespace-nowrap">NAME</th>
            <th class="text-center whitespace-nowrap">EMAIL</th>
            <th class="text-center whitespace-nowrap">DEPARTMENT</th>
            <th class="text-center whitespace-nowrap">ROLE</th>
            <th class="text-center whitespace-nowrap">STATUS</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(faker, fakerKey) in $_.take($f(), 9)"
            :key="fakerKey"
            class="intro-x"
          >
            <td>{{ fakerKey + 1 }}</td>
            <td class="w-40">
              <div class="flex">
                <div class="w-10 h-10 image-fit zoom-in">
                  <Tippy
                    tag="img"
                    alt="staff avatar"
                    class="rounded-full"
                    :src="faker.staffs[0].avatar"
                    :content="`Uploaded at ${faker.dates[0]}`"
                  />
                </div>
              </div>
            </td>
            <td>
              <a href="" class="font-medium whitespace-nowrap">{{
                faker.staffs[0].name
              }}</a>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {{ faker.staffs[0].email }}
              </div>
            </td>
            <td class="text-center">{{ faker.staffs[0].department }}</td>
            <td class="text-center">{{ faker.staffs[0].role }}</td>

            <td class="w-40">
              <div
                class="flex items-center justify-center"
                :class="{
                  'text-success': faker.staffs[0].status,
                  'text-danger': !faker.staffs[0].status,
                }"
              >
                <CheckSquareIcon class="w-4 h-4 mr-2" />
                {{ faker.staffs[0].status ? "Active" : "Inactive" }}
              </div>
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
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
      <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select>
    </div>
    <!-- END: Pagination -->
  </div>
  <!-- BEGIN: Delete Confirmation Modal -->
  <div
    id="delete-confirmation-modal"
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
              Do you really want to delete these records? <br />This process
              cannot be undone.
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
            <button type="button" class="btn btn-danger w-24">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Delete Confirmation Modal -->
  <!-- BEGIN: Edit Confirmation Modal -->
  <div
    id="edit-confirmation-modal"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- BEGIN: Modal Header -->
        <div class="modal-header">
          <h2 class="font-medium text-base mr-auto">Edit Staff</h2>
        </div>
        <!-- BEGIN: Modal Body -->
        <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
          <div class="col-span-12 sm:col-span-12">
            <label for="modal-form-6" class="form-label">Roles</label>
            <TomSelect id="modal-form-6" class="form-select">
              <option
                v-for="(role, fakerKey) in $_.take($f()[0].roles, 9)"
                :key="fakerKey"
              >
                {{ role.name }}
              </option>
            </TomSelect>
          </div>

          <div class="col-span-12 sm:col-span-12">
            <label for="modal-form-6" class="form-label">Status</label>
            <TomSelect id="modal-form-6" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </TomSelect>
          </div>
          <div class="col-span-12 sm:col-span-12">
            <label for="modal-form-6" class="form-label">Departments</label>
            <TomSelect id="modal-form-6" class="form-select">
              <option
                v-for="(department, fakerKey) in $_.take(
                  $f()[0].departments,
                  9
                )"
                :key="fakerKey"
              >
                {{ department.name }}
              </option>
            </TomSelect>
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
          <button type="button" class="btn btn-primary w-20">Save</button>
        </div>
        <!-- END: Modal Footer -->
      </div>
    </div>
  </div>
  <!-- END: Delete Confirmation Modal -->
  <!-- BEGIN: Modal Content -->
  <div
    id="success-modal-preview"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <CheckCircleIcon class="w-16 h-16 text-success mx-auto mt-3" />
            <div class="text-3xl mt-5">Good job!</div>
            <div class="text-slate-500 mt-2">Staff synced successfully!</div>
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
  <!-- END: Modal Content -->
</template>
<script setup>
import { ref } from "vue";

const salesReportFilter = ref();
</script>
