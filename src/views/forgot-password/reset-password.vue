<template>
    <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div
        class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
        <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
           Reset Password
        </h2>
        <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
            Enter your email address and new password
        </div>
        <div class="intro-x mt-8">
            <input
            type="email"
            class="intro-x login__input form-control py-3 px-4 block"
            placeholder="Email"
            />

            <input
            type="password"
            class="intro-x login__input form-control py-3 px-4 block mt-4"
            placeholder="Insert new password"
            />

            <input
            type="password"
            class="intro-x login__input form-control py-3 px-4 block mt-4"
            placeholder="Confirm New Password"
            />
        </div>
        <div class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
            Have an account? 
            <router-link class="text-xs pl-2 sm:text-sm" :to="{name: 'login'}" >Sign In</router-link>
        </div>
        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button class="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top">
            Reset Password
            </button>
        </div>
        </div>
    </div>
</template>