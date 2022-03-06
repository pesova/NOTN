<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
      <div class="dropdown sm:ml-auto mt-3 sm:mt-0 relative">
        <button class="dropdown-toggle btn box" aria-expanded="false" data-tw-toggle="dropdown">
          <FileIcon class="w-5 h-4 mr-3" />Export
        </button>
        <div class="dropdown-menu w-40">
          <ul class="dropdown-content">
            <li>
              <a href class="dropdown-item">
                <PrinterIcon class="w-4 h-4 mr-2" />Print
              </a>
            </li>
            <li>
              <a href class="dropdown-item">
                <FileTextIcon class="w-4 h-4 mr-2" />Export to Excel
              </a>
            </li>
            <li>
              <a href class="dropdown-item">
                <FileTextIcon class="w-4 h-4 mr-2" />Export to PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
        <CalendarIcon class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
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

      <div class="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
      <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
        <div class="w-56 relative text-slate-500">
          <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
          <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
        </div>
      </div>
    </div>
    <!-- BEGIN: Data List -->
    <!-- BEGIN: Data List -->

    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible text-center">{{ auditAction }}</div>
    <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
      <table class="table table-report -mt-2">
        <thead>
          <tr>
            <th class="whitespace-nowrap">ID</th>
            <th class="whitespace-nowrap">MODEL</th>
            <th class="text-center whitespace-nowrap">IP ADDRESS</th>
            <th class="text-center whitespace-nowrap">URL</th>
            <th class="text-center whitespace-nowrap">USER</th>
            <!-- <th class="text-center whitespace-nowrap">OLD VALUE</th> -->
            <!-- <th class="text-center whitespace-nowrap">NEW VALUE</th> -->
            <th class="text-center whitespace-nowrap">USER AGENT</th>
            <th class="text-center whitespace-nowrap">CREATED DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(audit, fakerKey) in $_.take($f()[0].audits, 9)"
            :key="fakerKey"
            class="intro-x"
          >
            <td class="table-report__action w-4 text-center whitespace-wrap">{{ fakerKey + 1 }}</td>
            <td class=" table-report__action w-4 text-center whitespace-wrap">{{ audit.model }}</td>
            <td class="text-center table-report__action w-4">{{ audit.ipAddress }}</td>
            <td class="text-center table-report__action w-4">{{ audit.url }}</td>
            <td class="text-center table-report__action w-4">
              <a href class="font-medium whitespace-nowrap">{{ audit.user }}</a>
              <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{{ audit.email }}</div>
            </td>
            <!-- <td class="text-center table-report__action w-4">{{ audit.oldValue }}</td> -->
            <!-- <td class="text-center table-report__action w-4">{{ audit.newValue }}</td> -->

            <td class="text-center table-report__action w-4">
              <div class="">{{ audit.userAgent }}</div>
            </td>
            <td class="table-report__action w-56">
              <div class="flex justify-center items-center">{{ audit.createdAt }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- END: Data List -->
    <!-- BEGIN: Pagination -->
    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
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
</template>
<script setup>
import { ref } from "vue";

const salesReportFilter = ref();
const auditAction = ref('All Activities Logs')
</script>
