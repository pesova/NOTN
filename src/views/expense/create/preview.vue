<template>
    <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
        <div class="font-medium text-base">Preview Expense</div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <div class="box p-5 mt-5">
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 pb-5"
                >
                    <div>
                    <div class="text-slate-500">Expense Title:</div>
                    <div class="mt-1">Title of expense</div>
                    </div>
                </div>
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5"
                >
                    <div>
                    <div class="text-slate-500">Expense Type:</div>
                    <div class="mt-1">Individual</div>
                    </div>
                </div>
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5"
                >
                    <div>
                    <div class="text-slate-500">Description:</div>
                    <div class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                    </div>
                </div>
                <div class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5">
                    <div>
                    <div class="text-slate-500">Budget Category:</div>
                    <div class="mt-1">Office & Funitures</div>
                    </div>
                </div>
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5"
                >
                    <div>
                    <div class="text-slate-500">Receipt</div>
                    <div class="mt-1">
                        <button class="bg-primary text-xs p-1 rounded-md" data-tw-toggle="modal" data-tw-target="#viewReceipt" >View Receipt</button>
                    </div>
                    </div>
                </div>
              </div>
            </div>


            <div class="intro-y col-span-12 sm:col-span-6">
                <div class="box p-5 mt-5">
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 pb-5"
                >
                    <div>
                    <div class="text-slate-500">Amount:</div>
                    <div class="mt-1">₦50,000</div>
                    </div>
                </div>
                
                <div
                    class="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5"
                >
                    <div>
                    <div class="text-slate-500">Beneficiary Name:</div>
                    <div class="mt-1">John Doe</div>
                    </div>
                </div>
                <div class="flex items-center pt-5">
                    <div>
                    <div class="text-slate-500">Beneficiary Bank:</div>
                    <div class="mt-1">GTBank</div>
                    </div>
                </div>
                <div class="flex items-center pt-5">
                    <div>
                    <div class="text-slate-500">Account No.:</div>
                    <div class="mt-1">12345678910</div>
                    </div>
                </div>
                </div>
            </div>

            <div class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <router-link :to="{name: 'create-expense'}" class="btn btn-secondary w-24">Previous</router-link>
                <button @click="createdExpense" class="btn btn-primary w-24 ml-2">Submit</button>
            </div>

    </div>


    <!-- MODAL -->

    <div
        id="expenseSuccessModal"
        class="modal"
        tabindex="-1"
        aria-hidden="true"
    >
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body p-0">
            <div class="p-5 text-center">
                <CheckCircleIcon
                class="w-16 h-16 text-success mx-auto mt-3"
                />
                <div class="text-3xl mt-5">Expense succesfully created</div>
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
                <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 ml-2">
                    Close
                </button>
                
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
    import feather from "feather-icons";

    export default {
        mounted:function(){
            feather.replace({
                "stroke-width": 1.5,
            });
        },
        methods: {
            createdExpense(){
                const createdExpense = document.querySelector("#expenseSuccessModal");
                tailwind.Modal.getOrCreateInstance(createdExpense).show();
            }
        }
    }

</script>