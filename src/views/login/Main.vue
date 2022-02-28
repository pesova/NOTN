<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Nigerian Office for Trade Negotiations"
              class="w-6"
              src="@/assets/images/notn-logo.png"
            />
            <span class="text-white text-lg ml-3"> NOTN </span>
          </a>
          <div class="my-auto">
            <img
              alt="Nigerian Office for Trade Negotiations"
              class="-intro-x w-1/2 -mt-16"
              src="@/assets/images/illustration.svg"
            />
            <div
              class="-intro-x text-white font-medium text-2xl leading-tight mt-10"
            >
              Nigerian Office of Trade Negotiations <br />
              <span class="text-lg text-white text-opacity-70 dark:text-slate-400">Expense Management Portal</span>
            </div>
            <div
              class="-intro-x mt-5 text-md text-white text-opacity-70 dark:text-slate-400"
            >
              Manage all budgets and expenses in one place
            </div>
          </div>
        </div>
        
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").addClass("login");
});
</script>
