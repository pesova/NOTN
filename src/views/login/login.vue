<template>
    <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div
        class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
        <h2
            class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
        >
            Sign In
        </h2>
        <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
            A few more clicks to sign in to your account. <br />
            Manage all your budgets & expenses in one place
        </div>
        <div class="intro-x mt-8">
            <input
            type="text"
            class="intro-x login__input form-control py-3 px-4 block"
            placeholder="Email"
            />
            <input
            type="password"
            class="intro-x login__input form-control py-3 px-4 block mt-4"
            placeholder="Password"
            />
        </div>
        <div
            class="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4"
        >
            <div class="flex items-center mr-auto">
            <input
                id="remember-me"
                type="checkbox"
                class="form-check-input border mr-2"
            />
            <label class="cursor-pointer select-none" for="remember-me"
                >Remember me</label
            >
            </div>
            <router-link :to="{name: 'forgot-password'}" >Forgot Password?</router-link>
        </div>
        <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <router-link :to="{name: '2fa-password'}"
            class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
            >
            Login
            </router-link>
        </div>
        </div>
    </div>
</template>