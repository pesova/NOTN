<template>
 <!-- BEGIN: Filter -->
        <div class="dropdown w-full mt-2 sm:mt-0 lg:mr-2 sm:w-auto">
          <div class="preview">
            <div class="text-center">
              <div class="dropdown inline-block" data-tw-placement="bottom-start">
                <button class="dropdown-toggle btn" aria-expanded="false" data-tw-toggle="dropdown">
                  Filter
                  <FilterIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-menu">
                  <div class="dropdown-content">
                    <div class="p-2">
                      <div class="mt-3">
                        <div class="text-xs">Date Range</div>
                        <div class="form-control flex-1 sm:ml-auto sm:mt-0 relative text-slate-500">
                          <CalendarIcon
                            class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                          />
                          <Litepicker
                            v-model="filterModel"
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
                            class="form-control sm:w-56 pl-10 mt-2 flex-1"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="text-xs">Email</div>
                        <input
                          type="text"
                          class="form-control sm:w-56 pl-10 mt-2 flex-1"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div class="mt-3">
                        <div class="text-xs">Status</div>
                        <TomSelect class="form-control sm:w-56 mt-2 flex-1">
                          <option>Active</option>
                          <option>Inactive</option>
                        </TomSelect>
                      </div>
                      <div class="mt-3">
                        <div class="text-xs">Date</div>
                        <div class="form-control flex-1 sm:ml-auto sm:mt-0 relative text-slate-500">
                          <CalendarIcon
                            class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                          />
                          <Litepicker
                            v-model="date"
                            :options="{
                              autoApply: false,
                              showWeekNumbers: true,
                              dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                              },
                            }"
                            class="form-control sm:w-56 pl-10 mt-2 flex-1"
                          />
                        </div>
                      </div>
                      <div class="flex items-center mt-2">
                        <button data-tw-dismiss="dropdown" class="btn btn-secondary w-28">Close</button>
                        <button class="btn btn-primary w-28 ml-2">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Filter -->
</template>

<script setup>
import { filterModel } from "./index";

</script>