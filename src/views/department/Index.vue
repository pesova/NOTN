<template>
  <div class="col-span-12 mt-8 mb-10">
    <div class="intro-y flex items-center h-10">
      <h2 class="text-lg font-medium truncate mr-5">Department List</h2>
      <a href="" class="ml-auto flex items-center text-primary">
        <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload Data
      </a>
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
        data-tw-target="#edit-confirmation-modal"
        class="btn btn-primary shadow-md mr-2"
      >
        <PlusIcon class="w-4 h-4" /> Add Department</a
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
            <th class="text-center whitespace-nowrap">STATUS</th>
            <th class="text-center whitespace-nowrap">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(department, fakerKey) in $_.take($f()[0].departments, 9)"
            :key="fakerKey"
            class="intro-x"
          >
            <td>{{ fakerKey + 1 }}</td>
            <td>
              <a href="" class="font-medium whitespace-nowrap">{{
                department.name
              }}</a>
            </td>
            <td class="w-40">
              <div
                class="flex items-center justify-center"
                :class="{
                  'text-success': department.status,
                  'text-danger': !department.status,
                }"
              >
                <CheckSquareIcon class="w-4 h-4 mr-2" />
                {{ department.status ? "Active" : "Inactive" }}
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
          <h2 class="font-medium text-base mr-auto">Add/Edit Staff</h2>
        </div>
        <!-- BEGIN: Modal Body -->
        <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
          <div class="col-span-12 sm:col-span-12">
            <label for="modal-form-2" class="form-label">Name</label>
            <input
              id="modal-form-2"
              type="text"
              class="form-control"
              placeholder="eg. Trade in Services"
            />
          </div>
          <div class="col-span-12 sm:col-span-12">
            <label for="modal-form-6" class="form-label">Status</label>
            <select id="modal-form-6" class="form-select">
              <option>Active</option>
              <option>Inactive</option>
            </select>
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
          <a
            href="javascript:;"
            data-tw-toggle="modal"
            data-tw-target="#success-modal-preview"
            class="btn btn-primary w-20"
          >
            Submit
          </a>
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
            <div class="text-slate-500 mt-2">
              Department added successfully!
            </div>
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
