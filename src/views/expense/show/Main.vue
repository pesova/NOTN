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
                        <div class="text-slate-500">Initiator </div>
                        <p class="font-medium text-primary text-xl">{{ expense.initiator }}</p>
                    </div>
                    <div class="text-center w-auto py-2">
                        <div class="text-slate-500">Budget Balance</div>
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
                    <div class="text-slate-500">Created At</div>
                    <div
                        class="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium ml-3"
                    >
                        {{ expense.created_at }}
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


<div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
    <div class="intro-y box col-span-12 sm:col-span-5">
        <div
        class="flex items-center mt-1 px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
        >
        <h2 class="font-medium text-base mr-auto">Expense Workflow Status</h2>
        </div>

        <div>
            <div class="flex flex-col items-center justify-items-center pt-2" v-for="(level, index) in expense.approved_level" :key="index">
                <div class="px-2 lg:px-0">
                    <span :class="[(level.status == 'approved') ? 'text-lime-600' : (level.status == 'pending') ? 'text-warning' :'text-danger' ]">
                            {{ capitalizeFirstLetter(level.status) }} 
                    </span>
                    <span :class="(level.status == 'pending') ? 'hidden' : '' "> by </span>
                    <strong  :class="(level.status == 'pending') ? 'hidden' : '' "> {{ level.user }} </strong> as <strong > {{ level.role }} </strong>
                </div>
                <div class="mx-auto" :class="(level.status == 'pending') ? 'hidden' : '' ">
                    <small>({{ level.approved_at }})</small>
                     <ArrowDownIcon class="mx-auto" v-if="index !== expense.approved_level.length - 1" />
                </div>
            </div>
            
        </div>
    </div>
    <!-- whitespace-nowrap text-center -->


    <div class="intro-y box col-span-12 sm:col-span-7">
        <div class=" p-5">
            <div
                class="flex items-center border-b border-slate-200 dark:border-darkmode-400 pb-5"
            >
                <div>
                <div class="text-slate-500">Expense Category:</div>
                <div class="mt-1">{{expense.expense_head}}</div>
                </div>
            </div>

            <div class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3">
                <div>
                <div class="text-slate-500">Primary Department:</div>
                <div class="mt-1">{{ expense.department }} </div>
                </div>
            </div>
            <div v-for="(department, index) in expense.other_department" :key="index" class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3">
                <div>
                <div class="text-slate-500">Amount shared in {{department.department_name}} Department:</div>
                <div class="mt-1">{{ moneyFormat(department.amount) }}</div>
                </div>
            </div>
            <div
                class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3"
            >
                <div>
                <div class="text-slate-500">Total Amount Shared Among Departments:</div>
                <div class="mt-1">{{moneyFormat(totalAmountShared(expense))}}</div>
                </div>
            </div>           

            <div
                class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3"
            >
                <div>
                <div class="text-slate-500">Beneficiary:</div>
                <div class="mt-1">{{expense.beneficiary}}</div>
                </div>
            </div>
            <div
                class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3"
            >
                <div>
                <div class="text-slate-500">Beneficiary Account Number:</div>
                <div class="mt-1">{{ expense.beneficiary_account_number }} </div>
                </div>
            </div>
            <div
                class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-3"
            >
                <div>
                <div class="text-slate-500">Beneficiary Bank:</div>
                <div class="mt-1">{{ expense.beneficiary_bank }} </div>
                </div>
            </div>

            
            
        </div>
        
    </div>
    <div class="intro-y  col-span-12 sm:col-span-2">
          <button class="btn btn-primary" data-tw-toggle="modal" data-tw-target="#viewReceipt" >View Receipt</button>      
    </div>
    <div class="intro-y  col-span-12 sm:col-span-1">
          <button class="btn btn-primary" data-tw-toggle="modal" data-tw-target="#commentReceipt" >Comment</button>      
    </div>
</div>


<!-- MODAL -->

<div
    id="viewReceipt"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body p-0">
            <div class="p-10 text-center">
                <img  class="w-auto m-auto" src="@/assets/images/receipt.png" alt="receipt">
            </div>
            <div class="px-5 pb-8 text-center">

                <button  type="button" class="btn btn-primary w-auto">
                    <svg class="fill-current w-4 h-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download Pdf</span>                    
                </button>

                <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 ml-2">
                    Close
                </button>
                
            </div>
        </div>
      </div>
    </div>
</div>

<div
    id="commentReceipt"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-body p-0">
            <div class="p-4 text-center">
                <label for="input-wizard-2" class="form-label">Comment </label>
              
                <textarea name="" class="form-control" rows="3" > </textarea>
            </div>
            <div class="px-5 pb-8 text-center">

                <button  type="button" class="btn btn-primary w-24">
                   Comment                 
                </button>

                <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 ml-2">
                    Close
                </button>
                
            </div>
        </div>
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

    const totalAmountShared = (exp) => {
        let total = 0;
        expense.other_department.forEach(department => {
            total += department.amount;
        });
        return total;
    }
</script>
