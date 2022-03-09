<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">TAT Tracker</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <div class="dropdown sm:ml-auto mt-3 sm:mt-0 relative sm:mr-3">
                <button
                    class="dropdown-toggle btn box"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
                >
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

            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0 mr-3">
                <div class="w-56 relative text-slate-500">
                    <TomSelect
                        v-model="selectHeader"
                        :options="{
                            placeholder: 'Select Role',
                        }"
                        class="w-full"
                        multiple
                    >
                        <option v-for="(role, fakerKey) in $_.take($f()[0].roles, 9)"
                        :key="fakerKey" :value="fakerKey">{{ role.name}}</option>
                    </TomSelect>
                    
                </div>
            </div>

            <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                <div class="w-56 relative text-slate-500">
                    <input type="text" class="form-control w-56 box pr-10" placeholder="Search..." />
                    <SearchIcon class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                </div>
            </div>
        </div>
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-scroll">
            <table class="table table-report -mt-2">
                <thead>
                    <tr>
                        <th class="whitespace-nowrap">ID</th>
                        <th class="whitespace-nowrap">Amount</th>
                        <th class="text-center whitespace-nowrap">ACTION</th>
                        <th class="text-center whitespace-nowrap">ACTION TAKER</th>
                        <th class="text-center whitespace-nowrap">DEPARTMENT</th>
                        <th class="text-center whitespace-nowrap">RESPONSE TIME</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="response in $_.take($f()[0].responseTime, 9)"
                        :key="response.id"
                        class="intro-x"
                    >
                        <td class="text-center">{{ response.id }}</td>
                        <td class="text-center">{{ response.amount }}</td>
                        <td class="text-center">{{ response.Action }}</td>
                        <td class="text-center">{{ response.ActionTaker }}</td>
                        <td class="text-center">{{ response.department }}</td>
                        <td class="text-center">{{ response.ResponseTime }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- END: Data List -->
        <!-- BEGIN: Pagination -->

        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <div class="hidden md:block text-slate-500">Showing 1 to 10 of 150 entries</div>
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
const auditAction = ref('Expense Activities')
const selectHeader = ref(["2"]);

</script>
