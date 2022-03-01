<template>
    <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div
        class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
        <h2
            class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
        >
            Verify it's you
        </h2>
        <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
            Enter verification code from your authenticator app
        </div>
        <div class="intro-x mt-8">
            <input
            type="text"
            class="intro-x login__input form-control py-3 px-4 block"
            placeholder="verification code"
            />
        </div>
        
        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <router-link :to="{name: 'dashboard'}"
            class="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top"
            >
            Verify and login
            </router-link>
        </div>
        </div>
    </div>
</template>