<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">

        <div class="col-span-12 lg:col-span-12 mt-6">
            <HorizontalBarChart :height="100"  />
        </div>

        <!-- BEGIN: Ads 1 -->
        <!-- <div class="col-span-12 lg:col-span-6 mt-6">
          <div class="box p-8 relative overflow-hidden bg-primary intro-y">
            <div
              class="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3"
            >
              Create an expense in just 2 steps
            </div>
            <div
              class="w-full sm:w-72 leading-relaxed text-white/70 dark:text-slate-500 mt-3"
            >
              We've simplified the process
            </div>
            <button
              class="btn w-32 bg-white dark:bg-darkmode-800 dark:text-white mt-6 sm:mt-10"
            >
              Create Expense
            </button>
            <img
              class="hidden sm:block absolute top-0 right-0 w-2/5 -mt-3 mr-2"
              alt="Nigerian Office for Trade Negotiations"
              src="@/assets/images/woman-illustration.svg"
            />
          </div>
        </div> -->
        <!-- END: Ads 1 -->
        <!-- BEGIN: Ads 2 -->
        <!-- <div class="col-span-12 lg:col-span-6 mt-6">
          <div class="box p-8 relative overflow-hidden intro-y">
            <div
              class="leading-[2.15rem] w-full sm:w-52 text-primary dark:text-white text-xl -mt-3"
            >
              Manage approval requests
            </div>
            <div class="w-full sm:w-60 leading-relaxed text-slate-500 mt-2">
              Approve or reject pending requests
            </div>
            
            <button
              class="btn w-64 bg-white dark:bg-darkmode-800 dark:text-white mt-6 sm:mt-10"
            >
              Expense Approval Requests
            </button>
            <img
              class="hidden sm:block absolute top-0 right-0 w-1/2 mt-1 -mr-12"
              alt="Nigerian Office for Trade Negotiations"
              src="@/assets/images/phone-illustration.svg"
            />
          </div>
        </div> -->
        <!-- END: Ads 2 -->
        
        <!-- BEGIN: Notification -->
        
        <!-- END: Notification -->

        <!-- BEGIN: General Report -->
        <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-2">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <select class="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div class="report-box-2 intro-y mt-12 sm:mt-5">
            <div class="box sm:flex">
              <div class="px-8 py-12 flex flex-col justify-center flex-1">
                <ShoppingBagIcon class="w-10 h-10 text-warning" />
                <div class="relative text-3xl font-medium mt-12 pl-4 ml-0.5">
                  <span
                    class="absolute text-2xl font-medium top-0 left-0 -ml-0.5"
                    >₦</span
                  >
                  100,000,000
                </div>
                
                <div class="mt-4 text-slate-500">
                  Parastatal Budget Balance (2022)
                </div>
                <button
                  class="btn btn-outline-secondary relative justify-start rounded-full mt-12"
                >
                  Download Reports
                  <span
                    class="w-8 h-8 absolute flex justify-center items-center bg-primary text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5"
                  >
                    <ArrowRightIcon class="w-4 h-4" />
                  </span>
                </button>
              </div>
              <div
                class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
              >
                <div class="text-slate-500 text-xs">TOTAL APPROVED BUDGET (2022)</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">1,000,000,000</div>
                </div>

                <div class="text-slate-500 text-xs mt-5">TOTAL EXPENSE AMOUNT</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">120,000,000</div>
                </div>

                <div class="text-slate-500 text-xs mt-5">TOTAL EXPENSE COUNT</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">25,000</div>
                </div>

                <div class="text-slate-500 text-xs mt-5">
                  APPROVED EXPENSES
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">₦781,900,000</div>
                </div>
                <div class="text-slate-500 text-xs mt-5">
                  REJECTED EXPENSES
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">₦128,000,320</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: BUDGET BREAKDOWN -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 mt-2">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Budget Breakdown</h2>
            <!-- <a href="" class="ml-auto text-primary truncate">See more..</a> -->
          </div>
          <div class="report-box-2 intro-y mt-5">
            <div class="box p-5">
              <div class="flex items-center">
                Realtime active users
                <div class="dropdown ml-auto">
                  <a
                    class="dropdown-toggle w-5 h-5 block -mr-2"
                    href="javascript:;"
                    aria-expanded="false"
                    data-tw-toggle="dropdown"
                  >
                    <MoreVerticalIcon class="w-5 h-5 text-slate-500" />
                  </a>
                  <div class="dropdown-menu w-40">
                    <ul class="dropdown-content">
                      <li>
                        <a href="" class="dropdown-item">
                          <FileTextIcon class="w-4 h-4 mr-2" />
                          Export
                        </a>
                      </li>
                      <li>
                        <a href="" class="dropdown-item">
                          <SettingsIcon class="w-4 h-4 mr-2" />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="text-2xl font-medium mt-2">214</div>
              <div class="border-b border-slate-200 flex pb-2 mt-4">
                <div class="text-slate-500 text-xs">Page views per second</div>
                <Tippy
                  tag="div"
                  class="text-success flex text-xs font-medium cursor-pointer ml-auto"
                  content="49% Lower than last month"
                >
                  49% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                </Tippy>
              </div>
              <div class="mt-2 border-b broder-slate-200">
                <div class="-mb-1.5 -ml-2.5">
                  <ReportBarChart :height="111" />
                </div>
              </div>
              <div
                class="text-slate-500 text-xs border-b border-slate-200 flex mb-2 pb-2 mt-4"
              >
                <div>Top Active Pages</div>
                <div class="ml-auto">Active Users</div>
              </div>
              <div class="flex">
                <div>/letz-lara…review/2653</div>
                <div class="ml-auto">472</div>
              </div>
              <div class="flex mt-1.5">
                <div>/rubick…review/1674</div>
                <div class="ml-auto">294</div>
              </div>
              <div class="flex mt-1.5">
                <div>/profile…review/46789</div>
                <div class="ml-auto">83</div>
              </div>
              <div class="flex mt-1.5">
                <div>/profile…review/24357</div>
                <div class="ml-auto">21</div>
              </div>
              <button
                class="btn btn-outline-secondary border-dashed w-full py-1 px-2 mt-4"
              >
                Real-Time Report
              </button>
            </div>
          </div>
        </div>
        <!-- END: Visitors -->
        <!-- BEGIN: Users By Age -->
        <div
          class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 mt-2 lg:mt-6 xl:mt-2"
        >
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Users By Age</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="report-box-2 intro-y mt-5">
            <div class="box p-5">
              <ul
                class="nav nav-pills w-4/5 bg-slate-100 dark:bg-black/20 rounded-md mx-auto"
                role="tablist"
              >
                <li
                  id="active-users-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link w-full py-1.5 px-2 active"
                    data-tw-toggle="pill"
                    data-tw-target="#active-users"
                    type="button"
                    role="tab"
                    aria-controls="active-users"
                    aria-selected="true"
                  >
                    Active
                  </button>
                </li>
                <li
                  id="inactive-users-tab"
                  class="nav-item flex-1"
                  role="presentation"
                >
                  <button
                    class="nav-link w-full py-1.5 px-2"
                    data-tw-toggle="pill"
                    data-tw-target="#inactive-users"
                    type="button"
                    role="tab"
                    aria-controls="inactive-users"
                    aria-selected="false"
                  >
                    Inactive
                  </button>
                </li>
              </ul>
              <div class="tab-content mt-6">
                <div
                  class="tab-pane active"
                  id="active-users"
                  role="tabpanel"
                  aria-labelledby="active-users-tab"
                >
                  <div class="relative">
                    <ReportDonutChart :height="300" class="mt-3" />
                    <div
                      class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0"
                    >
                      <div class="text-2xl font-medium">2.501</div>
                      <div class="text-slate-500 mt-0.5">Active Users</div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex items-center">
                      <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span class="truncate">17 - 30 Years old</span>
                      <span class="font-medium xl:ml-auto">62%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                      <span class="truncate">31 - 50 Years old</span>
                      <span class="font-medium xl:ml-auto">33%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                      <span class="truncate">>= 50 Years old</span>
                      <span class="font-medium xl:ml-auto">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Users By Age -->


        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <a href="" class="ml-auto flex items-center text-primary">
              <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload Data
            </a>
          </div>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ShoppingCartIcon class="report-box__icon text-primary" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="33% Higher than last month"
                      >
                        33%
                        <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">4.710</div>
                  <div class="text-base text-slate-500 mt-1">Item Sales</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-pending" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-danger cursor-pointer"
                        content="2% Lower than last month"
                      >
                        2%
                        <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">3.721</div>
                  <div class="text-base text-slate-500 mt-1">New Orders</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MonitorIcon class="report-box__icon text-warning" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="12% Higher than last month"
                      >
                        12% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">2.149</div>
                  <div class="text-base text-slate-500 mt-1">
                    Total Products
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-success" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="22% Higher than last month"
                      >
                        22% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">152.040</div>
                  <div class="text-base text-slate-500 mt-1">
                    Unique Visitor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Report</h2>
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
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="flex flex-col xl:flex-row xl:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium"
                  >
                    ₦15,000
                  </div>
                  <div class="mt-0.5 text-slate-500">This Month</div>
                </div>
                <div
                  class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"
                ></div>
                <div>
                  <div class="text-slate-500 text-lg xl:text-xl font-medium">
                    ₦10,000
                  </div>
                  <div class="mt-0.5 text-slate-500">Last Month</div>
                </div>
              </div>
              <div class="dropdown xl:ml-auto mt-5 xl:mt-0">
                <button
                  class="dropdown-toggle btn btn-outline-secondary font-normal"
                  aria-expanded="false"
                  data-tw-toggle="dropdown"
                >
                  Filter by Category
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-menu w-40">
                  <ul class="dropdown-content overflow-y-auto h-32">
                    <li><a href="" class="dropdown-item">PC & Laptop</a></li>
                    <li><a href="" class="dropdown-item">Smartphone</a></li>
                    <li><a href="" class="dropdown-item">Electronic</a></li>
                    <li><a href="" class="dropdown-item">Photography</a></li>
                    <li><a href="" class="dropdown-item">Sport</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- <div class="report-chart">
              <ReportLineChart :height="169" class="mt-6" />
            </div> -->
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Weekly Top Seller</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <!-- <ReportPieChart :height="300" class="mt-3" /> -->
            <div class="mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <span class="font-medium xl:ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <span class="font-medium xl:ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <span class="font-medium xl:ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Report</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <!-- <ReportDonutChart :height="300" class="mt-3" /> -->
            <div class="mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <span class="font-medium xl:ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <span class="font-medium xl:ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <span class="font-medium xl:ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        
      </div>
    </div>

    <div class="col-span-12 2xl:col-span-3">
      <div class="2xl:border-l -mb-10 pb-10">
        <div class="2xl:pl-6 grid grid-cols-12 gap-6">
          <!-- BEGIN: Transactions -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Transactions</h2>
            </div>
            <div class="mt-5">
              <div
                v-for="(faker, fakerKey) in $_.take($f(), 5)"
                :key="fakerKey"
                class="intro-x"
              >
                <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    <img
                      alt="Nigerian Office for Trade Negotiations"
                      :src="faker.photos[0]"
                    />
                  </div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">
                      {{ faker.users[0].name }}
                    </div>
                    <div class="text-slate-500 text-xs mt-0.5">
                      {{ faker.dates[0] }}
                    </div>
                  </div>
                  <div
                    :class="{
                      'text-success': faker.trueFalse[0],
                      'text-danger': !faker.trueFalse[0],
                    }"
                  >
                    {{ faker.trueFalse[0] ? "+" : "-" }}₦{{ faker.totals[0] }}
                  </div>
                </div>
              </div>
              <a
                href=""
                class="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                >View More</a
              >
            </div>
          </div>
          <!-- END: Transactions -->
          <!-- BEGIN: Recent Activities -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Recent Activities
              </h2>
              <a href="" class="ml-auto text-primary truncate">Show More</a>
            </div>
            <div
              class="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5"
            >
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    <img
                      alt="Nigerian Office for Trade Negotiations"
                      :src="$f()[9].photos[0]"
                    />
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      {{ $f()[9].users[0].name }}
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500 mt-1">Has joined the team</div>
                </div>
              </div>
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    <img
                      alt="Nigerian Office for Trade Negotiations"
                      :src="$f()[8].photos[0]"
                    />
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      {{ $f()[8].users[0].name }}
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500">
                    <div class="mt-1">Added 3 new photos</div>
                    <div class="flex mt-2">
                      <Tippy
                        tag="div"
                        class="w-8 h-8 image-fit mr-1 zoom-in"
                        :content="$f()[0].products[0].name"
                      >
                        <img
                          alt="Nigerian Office for Trade Negotiations"
                          class="rounded-md border border-white"
                          :src="$f()[8].images[0]"
                        />
                      </Tippy>
                      <Tippy
                        tag="div"
                        class="w-8 h-8 image-fit mr-1 zoom-in"
                        :content="$f()[1].products[0].name"
                      >
                        <img
                          alt="Nigerian Office for Trade Negotiations"
                          class="rounded-md border border-white"
                          :src="$f()[8].images[1]"
                        />
                      </Tippy>
                      <Tippy
                        tag="div"
                        class="w-8 h-8 image-fit mr-1 zoom-in"
                        :content="$f()[2].products[0].name"
                      >
                        <img
                          alt="Nigerian Office for Trade Negotiations"
                          class="rounded-md border border-white"
                          :src="$f()[8].images[2]"
                        />
                      </Tippy>
                    </div>
                  </div>
                </div>
              </div>
              <div class="intro-x text-slate-500 text-xs text-center my-4">
                12 November
              </div>
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    <img
                      alt="Nigerian Office for Trade Negotiations"
                      :src="$f()[7].photos[0]"
                    />
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      {{ $f()[7].users[0].name }}
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500 mt-1">
                    Has changed
                    <a class="text-primary" href="">{{
                      $f()[7].products[0].name
                    }}</a>
                    price and description
                  </div>
                </div>
              </div>
              <div class="intro-x relative flex items-center mb-3">
                <div
                  class="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5"
                >
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                  >
                    <img
                      alt="Nigerian Office for Trade Negotiations"
                      :src="$f()[6].photos[0]"
                    />
                  </div>
                </div>
                <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                  <div class="flex items-center">
                    <div class="font-medium">
                      {{ $f()[6].users[0].name }}
                    </div>
                    <div class="text-xs text-slate-500 ml-auto">07:00 PM</div>
                  </div>
                  <div class="text-slate-500 mt-1">
                    Has changed
                    <a class="text-primary" href="">{{
                      $f()[6].products[0].name
                    }}</a>
                    description
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Recent Activities -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
// import ReportLineChart from "@/components/report-line-chart/Main.vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
// import ReportPieChart from "@/components/report-pie-chart/Main.vue";
// import ReportMap from "@/components/report-map/Main.vue";
// import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
// import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import PieChart from "@/components/pie-chart/Main.vue";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main.vue";

const salesReportFilter = ref();
const importantNotesRef = ref();

provide("bind[importantNotesRef]", (el) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("prev");
};

const nextImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("next");
};
</script>
