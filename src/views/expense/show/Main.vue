<template>
    <div class="intro-y box col-span-12">
        <div
        class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400"
        >
        <h2 class="font-medium text-base mr-auto">Expense Details </h2>
        </div>
        <div id="new-products" class="tiny-slider py-5 px-5">
            <div class="flex flex-col lg:flex-row items-center pb-5">
                <div
                    class="flex flex-2 flex-col sm:flex-row items-center pr-5 lg:border-r border-slate-200/60 dark:border-darkmode-400"
                >
                    <div class="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                        <p class="font-medium text-lg">{{ expense.title }}</p>
                        <div class="text-slate-500 mt-1 sm:mt-0"> {{ expense.description }} </div>
                        
                    </div>
                </div>
                
                <div
                    class="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 lg:flex-row md:flex-row flex items-center flex-col justify-evenly px-5 border-t lg:border-t-0 border-slate-200/60 dark:border-darkmode-400"
                >
                  
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Total expense Amount</div>
                        <p class="font-medium text-primary text-xl"> {{ moneyFormat(expense.expense_amount) }} </p>
                        
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Expense Spent</div>
                        <p class="font-medium text-primary text-xl">{{ moneyFormat(expense.expense_balance) }}</p>
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Expense Balance</div>
                        <p class="font-medium text-primary text-xl">{{ moneyFormat(expense.expense_balance) }}</p>
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
                        {{ expense.year }}
                    </div>
                
                </div>
                <div class="flex items-center sm:ml-auto mt-5 sm:mt-0">
                    <div class="text-slate-500">Type</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ expense.type }}
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="intro-y box col-span-12 lg:col-span-6">
          <div
            class="flex items-center mt-6 px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="font-medium text-base mr-auto">Expense Workflow Status</h2>
          </div>

          <div class="flex flex-wrap items-center">
              <div class="flex items-center py-3 ml-1" v-for="(level, index) in expense.approved_level" :key="index">
                <span :class="[(level.status == 'approved') ? 'text-lime-600' : (level.status == 'pending') ? 'text-warning' :'text-danger' , (index == 0 ) ? 'px-3' : 'px-1' ]">
                      {{ capitalizeFirstLetter(level.status) }} 
                </span>
                <span :class="(level.status == 'pending') ? 'hidden' : '' "> by </span>
                <strong class="px-1" :class="(level.status == 'pending') ? 'hidden' : '' "> {{ level.user }} </strong> as <strong class="px-1"> {{ level.role }} </strong>
                <ArrowRightIcon class="w-10 " v-if="index !== expense.approved_level.length - 1" />
              </div>                
                
          </div>
        </div>
        
</template>


<script setup>
    import { useRoute  } from "vue-router";
    import { faker } from "../../../utils/faker";
    const route = useRoute();
    const expense_id = parseInt(route.params.id);

    const expenseTable = faker[0].expenseTable;
    const expense = expenseTable.filter(thisexpense => thisexpense.id === expense_id).map(thisexpense => thisexpense)[0];

    const moneyFormat = (x) => {
        return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>
