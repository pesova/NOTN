<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <nav aria-label="breadcrumb" class="-intro-x mr-auto hidden sm:flex">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Application</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative mr-3 sm:mr-6">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input form-control border-transparent"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-slate-500" />
      </div>
      <a class="notification sm:hidden" href="">
        <SearchIcon class="notification__icon dark:text-slate-500" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Staff</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <img
                  alt="NOTN"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
              </div>
              <div class="ml-3">{{ faker.users[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>

          <div class="search-result__content__title">Budgets</div>
          <div class="mb-5">
            <a href class="flex  mt-2">
              <div class="ml-3">Budget title</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
              >
                Budget description
              </div>
            </a>
          </div>
          <div class="search-result__content__title">Expenses</div>
          <a href class="flex  mt-2">
              <div class="ml-3">Expense title</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
              >
                Expense description
              </div>
            </a>
        </div>
      </div>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x dropdown mr-auto sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
        role="button"
        aria-expanded="false"
        data-tw-toggle="dropdown"
      >
        <BellIcon class="notification__icon dark:text-slate-500" />
      </div>
      <div class="notification-content pt-2 dropdown-menu">
        <div class="notification-content__box dropdown-content">
          <div class="notification-content__title">Notifications</div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 5)"
            :key="fakerKey"
            class="cursor-pointer relative flex items-center"
            :class="{ 'mt-5': fakerKey }"
          >
            <div class="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="NOTN"
                class="rounded-full"
                :src="faker.photos[0]"
              />
              <div
                class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
              ></div>
            </div>
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a href="javascript:;" class="font-medium truncate mr-5">{{
                  faker.users[0].name
                }}</a>
                <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  {{ faker.times[0] }}
                </div>
              </div>
              <div class="w-full truncate text-slate-500 mt-0.5">
                {{ faker.news[0].shortContent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
        role="button"
        aria-expanded="false"
        data-tw-toggle="dropdown"
      >
        <img
          alt="NOTN"
          :src="$f()[9].photos[0]"
        />
      </div>
      <div class="dropdown-menu w-56">
        <ul class="dropdown-content bg-primary text-white">
          <li class="p-2">
            <div class="font-medium">{{ $f()[0].users[0].name }}</div>
            <div class="text-xs text-white/70 mt-0.5 dark:text-slate-500">
              {{ $f()[0].jobs[0] }}
            </div>
          </li>
          <li><hr class="dropdown-divider border-white/[0.08]" /></li>
          <li>
            <a href="" class="dropdown-item hover:bg-white/5">
              <UserIcon class="w-4 h-4 mr-2" /> Profile
            </a>
          </li>
          <li>
            <a href="" class="dropdown-item hover:bg-white/5">
              <EditIcon class="w-4 h-4 mr-2" /> Add Account
            </a>
          </li>
          <li>
            <a href="" class="dropdown-item hover:bg-white/5">
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password
            </a>
          </li>
          <li>
            <a href="" class="dropdown-item hover:bg-white/5">
              <HelpCircleIcon class="w-4 h-4 mr-2" /> Help
            </a>
          </li>
          <li><hr class="dropdown-divider border-white/[0.08]" /></li>
          <li>
            <router-link :to="{ name: 'login' }" class="dropdown-item hover:bg-white/5">
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script setup>
import { ref } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
</script>
