<template>
  <div class="flex items-center mt-8">
    <h2 class="intro-y text-lg font-medium mr-auto">New Expense</h2>
  </div>
  <!-- BEGIN: Wizard Layout -->
  <div class="intro-y box py-10 sm:py-20 mt-5">
    <div
      class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20"
    >
      <div
        class="intro-x lg:text-center flex items-center lg:block flex-1 z-10"
      >
        <router-link :to="{name: 'create-expense'}" class="w-10 h-10 rounded-full btn " active-class="btn-primary">1</router-link>
        <div class="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
          Expense Details
        </div>
      </div>
      <div
        class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
      >
        <router-link :to="{name: 'preview-expense'}" active-class="btn-primary"
          class="w-10 h-10 rounded-full btn  dark:border-darkmode-400"
        >
          2
        </router-link>
        <div
          class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
        >
          Preview & Submit
        </div>
      </div>
      
    </div>
    <router-view/>
  </div>
  <!-- END: Wizard Layout -->
</template>
