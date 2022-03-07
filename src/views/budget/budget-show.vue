<template>
    <div class="intro-y box col-span-12">
        <div
        class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
        >
        <h2 class="font-medium text-base mr-auto">Budget Details </h2>
        </div>
        <div id="new-products" class="tiny-slider py-5 px-5">
            <div class="flex flex-col lg:flex-row items-center pb-5">
                <div
                    class="flex flex-2 flex-col sm:flex-row items-center pr-5 lg:border-r border-slate-200/60 dark:border-darkmode-400"
                >
                    <div class="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                        <div class="text-slate-500 mt-1 sm:mt-0"> Budget category </div>
                        <p class="font-medium text-lg">{{ tabledata[budget_id].budget_category }}</p>
                    </div>
                </div>
                
                <div
                    class="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 flex items-center justify-evenly px-5 border-t lg:border-t-0 border-slate-200/60 dark:border-darkmode-400"
                >
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Budget Amount</div>
                        <p class="font-medium text-primary text-xl"> {{ moneyFormat(tabledata[budget_id].budget_amount) }} </p>
                        
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Quantity</div>
                        <p class="font-medium text-primary text-xl"> {{ tabledata[budget_id].quantity }} </p>
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Budget Balance</div>
                        <p class="font-medium text-primary text-xl">{{ moneyFormat(tabledata[budget_id].budget_balance) }}</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5"
            >
                <div
                    class="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 pb-5 sm:pb-0"
                >
                    <div class="text-slate-500">Year of Release</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ tabledata[budget_id].year }}
                    </div>
                
                </div>
                <div class="flex items-center sm:ml-auto mt-5 sm:mt-0">
                    <div class="text-slate-500">Type</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ tabledata[budget_id].type }}
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="intro-y box col-span-12 lg:col-span-6">
          <div
            class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="font-medium text-base mr-auto">Budget Workflow Status</h2>
            
            
          </div>
          <div class="flex flex-wrap items-center">
              <div v-for="(level, index) in tabledata[budget_id].approved_level" :key="index" class="flex items-center py-3 ml-1">
                <span class="px-1 " :class="(level.status == 'approved') ? 'text-lime-600' : (level.status == 'pending') ? 'text-warning' :'text-danger'">
                      {{ capitalizeFirstLetter(level.status) }} 
                </span>
                <span :class="(level.status == 'pending') ? 'hidden' : '' "> by </span>
                <strong class="px-1" :class="(level.status == 'pending') ? 'hidden' : '' "> {{ level.user }} </strong> under {{ level.role }} 
                <ArrowRightIcon class="w-10 " v-if="index !== tabledata[budget_id].approved_level.length - 1" />
              </div>                
                
          </div>
        </div>
        
</template>


<script setup>
    import { useRoute  } from "vue-router";
    import { tabledata } from "./Main.vue";

    const route = useRoute();
    const budget_id = parseInt(route.params.id) -1;

    const moneyFormat = (x) => {
        return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>
