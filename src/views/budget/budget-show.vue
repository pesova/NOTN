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
                        <p class="font-medium text-lg">{{ budget.budget_category }}</p>
                    </div>
                </div>
                
                <div
                    class="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 lg:flex-row md:flex-row flex items-center flex-col justify-evenly px-5 border-t lg:border-t-0 border-slate-200/60 dark:border-darkmode-400"
                >
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Quantity</div>
                        <p class="font-medium text-primary text-xl"> {{ budget.quantity }} </p>
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Total Budget Amount</div>
                        <p class="font-medium text-primary text-xl"> {{ moneyFormat(budget.budget_amount) }} </p>
                        
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Budget Spent</div>
                        <p class="font-medium text-primary text-xl">{{ moneyFormat(budget.budget_balance) }}</p>
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Budget Balance</div>
                        <p class="font-medium text-primary text-xl">{{ moneyFormat(budget.budget_balance) }}</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5"
            >
                <div
                    class="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 pb-5 sm:pb-0"
                >
                    <div class="text-slate-500">Created AT</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ budget.created_at }}
                    </div>
                
                </div>
                <div class="flex items-center sm:ml-auto mt-5 sm:mt-0">
                    <div class="text-slate-500">Type</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ budget.type }}
                    </div>
                </div>
            </div>
        </div>
    </div>


<div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">

    <div class="intro-y box col-span-12 sm:col-span-5">
          <div
            class="flex items-center mt-1 px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <h2 class="font-medium text-base mr-auto">Budget Workflow Status</h2>
          </div>

          <div>
            <div class="flex flex-col items-center justify-items-center py-2 " v-for="(level, index) in budget.approved_level" :key="index">
                <div class="px-2 lg:px-0">
                    <span :class="[(level.status == 'approved') ? 'text-lime-600' : (level.status == 'pending') ? 'text-warning' :'text-danger' ]">
                            {{ capitalizeFirstLetter(level.status) }} 
                    </span>
                    <span :class="(level.status == 'pending') ? 'hidden' : '' "> by </span>
                    <strong  :class="(level.status == 'pending') ? 'hidden' : '' "> {{ level.user }} </strong> as <strong > {{ level.role }} </strong>
                </div>
                <div class="mx-auto" :class="(level.status == 'pending') ? 'hidden' : '' ">
                     <ArrowDownIcon class="mx-auto" v-if="index !== budget.approved_level.length - 1" />
                </div>
            </div>
            
        </div>
    </div>

    <div class="intro-y box col-span-12 sm:col-span-7">
        <div
            class="flex items-center mt-1 px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
        >
            <h2 class="font-medium text-base mr-auto">Expenses under this budget</h2>
        </div>

    <div class>
        <div class="overflow-x-auto p-1" >
        <table class="table sm:items-end xl:items-start" aria-describedby="expense list">
            <thead>
            <tr>
                <th class="whitespace-nowrap">#</th>
                <th class="whitespace-nowrap">Initiator</th>
                <th class="whitespace-nowrap">Title</th>
                <th class="whitespace-nowrap">Beneficiary</th>
                <th class="whitespace-nowrap">Expense Amount</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(expense, index) in ($f()[0].expenseTable)" :key="index" v-show="expense.status == 'approved'" >
                <td>{{ index + 1 }}</td>
                <td>{{ expense.initiator }}</td>
                <td>{{ expense.title }}</td>
                <td>{{ expense.beneficiary }} <small>({{expense.beneficiary_account_number}})</small></td>
                <td>{{ moneyFormat(expense.expense_amount) }}</td>

            </tr>
            </tbody>
        </table>
        </div>
  </div>


    </div>


</div>
        
</template>


<script setup>
    import { useRoute  } from "vue-router";
    import { faker } from "../../utils/faker";
    const route = useRoute();
    const budget_id = parseInt(route.params.id);

    const budgetTable = faker[0].budgetTable;
    const budget = budgetTable.filter(thisBudget => thisBudget.id === budget_id).map(thisBudget => thisBudget)[0];

    const moneyFormat = (x) => {
        return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    const  capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
</script>
