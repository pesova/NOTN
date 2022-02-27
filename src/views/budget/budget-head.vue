<template>
  <h2 class="intro-y text-lg font-medium mt-10">Manage Budget Head</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
    >
      <button data-tw-toggle="modal" data-tw-target="#newBudgetHeadModal"  class="btn btn-primary shadow-md mr-2">Add Budget Head</button>
    </div>
    <!-- BEGIN: Users Layout -->
    <div
      v-for="(budget, index) in budget_heads"
      :key="index"
      class="intro-y col-span-12 md:col-span-6 lg:col-span-4"
    >
      <div class="box">
        <div class="flex items-start px-5 pt-5">
          <div class="w-full flex flex-col lg:flex-row items-center">
          
            <div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
              <div class="text-lg mt-0.5 font-bold">
                {{ budget.title }}
              </div>
            </div>
          </div>
          <div class="absolute right-0 top-0 mr-5 mt-3 dropdown">
            <a
              class="dropdown-toggle w-5 h-5 block"
              href="javascript:;"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <MoreHorizontalIcon class="w-5 h-5 text-slate-500" />
            </a>
            <div class="dropdown-menu w-40">
              <div class="dropdown-content">
                <a href="javascript:;" class="dropdown-item">
                  <Edit2Icon class="w-4 h-4 mr-2" /> Edit
                </a>
                <a href="javascript:;" class="dropdown-item">
                  <TrashIcon class="w-4 h-4 mr-2" /> Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center lg:text-left p-5">
          <div>{{ budget.description }}</div>
        </div>

        <div
          class="text-center lg:text-right p-5"
        >
          <p>Total Expense: {{moneyFormat(budget.total_expense)}}</p>
        </div>
        
      </div>
    </div>
    <!-- END: Users Layout -->
  </div>
  <!-- MODAL -->
    <div
        id="newBudgetHeadModal"
        class="modal"
        tabindex="-1"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!-- BEGIN: Modal Header -->
            <div class="modal-header">
                <h2 class="font-medium text-base mr-auto">
                    Create New Budget
                </h2>

            </div>
            <!-- END: Modal Header -->
            <!-- BEGIN: Modal Body -->
            <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                <div class="col-span-12 sm:col-span-12">
                    <label for="modal-form-1" class="form-label">Title</label>
                    <input
                        id="modal-form-1"
                        type="text"
                        class="form-control"
                        placeholder="Title of budget"
                    />
                </div>
                <div class="col-span-12 sm:col-span-12">
                    <label for="modal-form-2" class="form-label">Description</label>
                    <textarea
                        id="modal-form-2"
                        cols="3" rows="3"
                        maxlength="150"
                        type="text"
                        class="form-control"
                        placeholder="Budget Head description"
                    ></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    data-tw-dismiss="modal"
                    class="btn btn-outline-secondary w-20 mr-1"
                >
                    Cancel
                </button>
                <button type="button" class="btn btn-primary w-20">
                    Create
                </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: 'App',
    setup() {
        const budget_heads = ref([{
          title: "Accessories",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio accusamus minima laboriosam vero, eveniet corrupti doloremque eaque labore sint commodi possimus officiis similique iusto illum odit officia natus laborum. ",
          total_expense: "100000",
          id: 1,
        },
        {
          title: "Housing",
          description: "Housing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio accusamus minima laboriosam vero, eveniet corrupti doloremque eaque labore sint commodi possimus officiis similique iusto illum odit officia natus laborum.",
          total_expense: "70000",
          id: 2,
        },
        {
          title: "Miscellenous",
          description: "Miscellenous Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio accusamus minima laboriosam vero, eveniet corrupti doloremque eaque labore sint commodi possimus officiis similique iusto illum odit officia natus laborum.",
          total_expense: "340000",
          id: 3,
        }]);
        
        return {
            budget_heads
        };
    },
    methods: {
      moneyFormat(x) {
        return '₦'+ x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      }
    }
}

</script>
