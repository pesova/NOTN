<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Your Profile</h2>
  </div>
  <!-- BEGIN: Profile Info -->
  <div class="intro-y box px-5 pt-5 mt-5">
    <div
      class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5"
    >
      <div
        class="flex flex-1 px-5 items-center justify-center lg:justify-start"
      >
        <div
          class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
        >
          <img
            alt="staff photo"
            class="rounded-full"
            :src="$f()[0].staffs[0].avatar"
          />
        </div>
        <div class="ml-5">
          <div
            class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
          >
            {{ $f()[0].staffs[0].name }}
          </div>
          <div class="text-slate-500">{{ $f()[0].staffs[0].role }}</div>
        </div>
      </div>
      <div
        class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0"
      >
        <div class="font-medium text-center lg:text-left lg:mt-3">
          Contact Details
        </div>
        <div
          class="flex flex-col justify-center items-center lg:items-start mt-4"
        >
          <div class="truncate sm:whitespace-normal flex items-center">
            <MailIcon class="w-4 h-4 mr-2" />
            {{ $f()[0].staffs[0].email }}
          </div>
          <div class="truncate sm:whitespace-normal flex items-center mt-3">
            <PhoneCallIcon class="w-4 h-4 mr-2" /> Phone
            {{ $f()[0].staffs[0].phone }}
          </div>
        </div>
      </div>
      <div
        class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0"
      >
        <div class="text-center rounded-md w-40 py-3">
          <div class="font-medium text-primary text-xl">201</div>
          <div class="text-slate-500">Created Expense</div>
        </div>
      </div>
    </div>
    <ul
      class="nav nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center"
      role="tablist"
    >
      <li id="profile-tab" class="nav-item" role="presentation">
        <a
          href="javascript:;"
          class="nav-link py-4 flex items-center active"
          data-tw-target="#profile"
          aria-controls="profile"
          aria-selected="true"
          role="tab"
        >
          <UserIcon class="w-4 h-4 mr-2" /> Profile
        </a>
      </li>
      <li id="change-password-tab" class="nav-item" role="presentation">
        <a
          href="javascript:;"
          class="nav-link py-4 flex items-center"
          data-tw-target="#change-password"
          aria-controls="change-password"
          aria-selected="false"
          role="tab"
        >
          <LockIcon class="w-4 h-4 mr-2" /> Change Password
        </a>
      </li>
      <li id="role-tab" class="nav-item" role="presentation">
        <a
          href="javascript:;"
          class="nav-link py-4 flex items-center"
          data-tw-target="#role"
          aria-controls="role"
          aria-selected="false"
          role="tab"
        >
          <ServerIcon class="w-4 h-4 mr-2" /> Roles
        </a>
      </li>
      <li id="workflow-tab" class="nav-item" role="presentation">
        <a
          href="javascript:;"
          class="nav-link py-4 flex items-center"
          data-tw-target="#workflow"
          aria-controls="workflow"
          aria-selected="false"
          role="tab"
        >
          <SlackIcon class="w-4 h-4 mr-2" /> WorkfLow
        </a>
      </li>
      <li id="preference-tab" class="nav-item" role="presentation">
        <a
          href="javascript:;"
          class="nav-link py-4 flex items-center"
          data-tw-target="#preference"
          aria-controls="preference"
          aria-selected="false"
          role="tab"
        >
          <SettingsIcon class="w-4 h-4 mr-2" /> Preferences
        </a>
      </li>
    </ul>
  </div>
  <!-- END: Profile Info -->
  <div class="tab-content mt-5">
    <div
      id="profile"
      class="tab-pane active"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-12 2xl:col-span-12">
          <!-- BEGIN: Display Information -->
          <div class="intro-y box lg:mt-5">
            <div
              class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto">Display Information</h2>
            </div>
            <div class="p-5">
              <div class="flex flex-col-reverse xl:flex-row flex-col">
                <div class="flex-1 mt-6 xl:mt-0">
                  <div class="grid grid-cols-12 gap-x-5">
                    <div class="col-span-12 2xl:col-span-6">
                      <div>
                        <label for="update-profile-form-1" class="form-label"
                          >Display Name</label
                        >
                        <input
                          id="update-profile-form-1"
                          type="text"
                          class="form-control"
                          placeholder="Input text"
                          :value="$f()[0].users[0].name"
                          disabled
                        />
                      </div>
                      <div class="mt-3">
                        <label for="update-profile-form-2" class="form-label"
                          >Nearest MRT Station</label
                        >
                        <TomSelect
                          id="update-profile-form-2"
                          v-model="select"
                          class="w-full"
                        >
                          <option value="1">Admiralty</option>
                          <option value="2">Aljunied</option>
                          <option value="3">Ang Mo Kio</option>
                          <option value="4">Bartley</option>
                          <option value="5">Beauty World</option>
                        </TomSelect>
                      </div>
                    </div>
                    <div class="col-span-12 2xl:col-span-6">
                      <div class="mt-3 2xl:mt-0">
                        <label for="update-profile-form-3" class="form-label"
                          >Postal Code</label
                        >
                        <TomSelect
                          id="update-profile-form-3"
                          v-model="select"
                          class="w-full"
                        >
                          <option value="1">
                            018906 - 1 STRAITS BOULEVARD SINGA...
                          </option>
                          <option value="2">
                            018910 - 5A MARINA GARDENS DRIVE...
                          </option>
                          <option value="3">
                            018915 - 100A CENTRAL BOULEVARD...
                          </option>
                          <option value="4">
                            018925 - 21 PARK STREET MARINA...
                          </option>
                          <option value="5">
                            018926 - 23 PARK STREET MARINA...
                          </option>
                        </TomSelect>
                      </div>
                      <div class="mt-3">
                        <label for="update-profile-form-4" class="form-label"
                          >Phone Number</label
                        >
                        <input
                          id="update-profile-form-4"
                          type="text"
                          class="form-control"
                          placeholder="Input text"
                          value="65570828"
                        />
                      </div>
                    </div>
                    <div class="col-span-12">
                      <div class="mt-3">
                        <label for="update-profile-form-5" class="form-label"
                          >Address</label
                        >
                        <textarea
                          id="update-profile-form-5"
                          class="form-control"
                          placeholder="Adress"
                        >
10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore</textarea
                        >
                      </div>
                    </div>
                  </div>
                  <a
                    class="btn btn-primary w-20 mt-3"
                    href="javascript:;"
                    data-tw-toggle="modal"
                    data-tw-target="#success-modal-preview"
                  >
                    Save
                  </a>
                </div>
                <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                  <div
                    class="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5"
                  >
                    <div
                      class="h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                    >
                      <img
                        class="rounded-md"
                        alt="Rubick Tailwind HTML Admin Template"
                        :src="$f()[0].photos[0]"
                      />
                      <Tippy
                        tag="div"
                        content="Remove this profile photo?"
                        class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                      >
                        <xIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                    <div class="mx-auto cursor-pointer relative mt-5">
                      <button type="button" class="btn btn-primary w-full">
                        Change Photo
                      </button>
                      <input
                        type="file"
                        class="w-full h-full top-0 left-0 absolute opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Display Information -->
        </div>
      </div>
    </div>

    <div
      id="change-password"
      class="tab-pane"
      role="tabpanel"
      aria-labelledby="change-password-tab"
    >
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-12 2xl:col-span-12">
          <!-- BEGIN: Change Password -->
          <div class="intro-y box lg:mt-5">
            <div
              class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto">Change Password</h2>
            </div>
            <div class="p-5">
              <div>
                <label for="change-password-form-1" class="form-label"
                  >Old Password</label
                >
                <input
                  id="change-password-form-1"
                  type="password"
                  class="form-control"
                  placeholder="Input text"
                />
              </div>
              <div class="mt-3">
                <label for="change-password-form-2" class="form-label"
                  >New Password</label
                >
                <input
                  id="change-password-form-2"
                  type="password"
                  class="form-control"
                  placeholder="Input text"
                />
              </div>
              <div class="mt-3">
                <label for="change-password-form-3" class="form-label"
                  >Confirm New Password</label
                >
                <input
                  id="change-password-form-3"
                  type="password"
                  class="form-control"
                  placeholder="Input text"
                />
              </div>
              <button type="button" class="btn btn-primary mt-4">
                Change Password
              </button>
            </div>
          </div>
          <!-- END: Change Password -->
        </div>
      </div>
    </div>

    <div id="role" class="tab-pane" role="tabpanel" aria-labelledby="role-tab">
      <div class="grid grid-cols-12 gap-6">
        <div
          class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
        >
          <div class="hidden md:block mx-auto text-slate-500"></div>
          <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div class="w-56 relative text-slate-500">
              <input
                type="text"
                class="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <SearchIcon
                class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table class="table table-report -mt-2">
            <thead>
              <tr>
                <th class="whitespace-nowrap">SN</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(role, fakerKey) in $_.take($f()[0].roles, 9)"
                :key="fakerKey"
                class="intro-x"
              >
                <td>{{ fakerKey + 1 }}</td>
                <td>
                  <a href="" class="font-medium whitespace-nowrap">{{
                    role.name
                  }}</a>
                </td>
                <td>
                  <div
                    class="text-center text-slate-500 whitespace-nowrap mt-0.5"
                  >
                    {{ role.description }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END: Data List -->
      </div>
    </div>

    <div
      id="workflow"
      class="tab-pane"
      role="tabpanel"
      aria-labelledby="workflow-tab"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
        >
          <div class="hidden md:block mx-auto text-slate-500"></div>
          <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div class="w-56 relative text-slate-500">
              <input
                type="text"
                class="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <SearchIcon
                class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        <!-- BEGIN: Data List -->

        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table class="table">
            <thead>
              <tr>
                <th>S/N</th>
                <th class="whitespace-nowrap">NAME</th>
                <th class="text-center whitespace-nowrap">FLOWS</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(workflow, fakerKey) in $_.take($f()[0].workflow, 9)"
                :key="fakerKey"
                class="intro-x"
              >
                <td>{{ fakerKey + 1 }}</td>
                <td>
                  <a href="" class="font-medium whitespace-nowrap">{{
                    workflow.name
                  }}</a>
                </td>
                <td class="font-medium whitespace-nowrap text-center">
                  <span
                    v-for="(flow, fakerKey) in workflows(workflow.flow)"
                    :key="fakerKey"
                  >
                    {{ flow }}
                    <ArrowDownIcon
                      v-if="fakerKey !== workflows(workflow.flow).length - 1"
                      class="block mx-auto"
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div
      id="preference"
      class="tab-pane"
      role="tabpanel"
      aria-labelledby="preference-tab"
    >
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-12 2xl:col-span-12">
          <!-- BEGIN: Display Information -->
          <div class="intro-y box lg:mt-5">
            <div
              class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto">Personal Settings</h2>
            </div>
            <div class="p-5">
              <div class="flex flex-col-reverse xl:flex-row flex-col">
                <div class="flex-1 mt-6 xl:mt-0">
                  <div class="grid grid-cols-12 gap-x-5">
                    <div class="col-span-12 2xl:col-span-6">
                      <div
                        class="form-check form-switch flex flex-col items-start mt-3"
                      >
                        <label
                          for="post-form-5"
                          class="form-check-label ml-0 mb-2"
                          >Activate 2FA</label
                        >
                        <input
                          id="post-form-5"
                          class="form-check-input"
                          type="checkbox"
                        />
                      </div>
                      <div class="mt-3">
                        <div
                          class="form-check form-switch flex flex-col items-start mt-3"
                        >
                          <label
                            for="post-form-5"
                            class="form-check-label ml-0 mb-2"
                            >Activate Push Notification</label
                          >
                          <input
                            id="post-form-5"
                            class="form-check-input"
                            type="checkbox"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-span-12 2xl:col-span-6">
                      <div class="mt-3 2xl:mt-0">
                        <div
                          class="form-check form-switch flex flex-col items-start mt-3"
                        >
                          <label
                            for="post-form-5"
                            class="form-check-label ml-0 mb-2"
                            >Enable SMS</label
                          >
                          <input
                            id="post-form-5"
                            class="form-check-input"
                            type="checkbox"
                          />
                        </div>
                      </div>
                      <div class="mt-3">
                        <div
                          class="form-check form-switch flex flex-col items-start mt-3 dark-mode-switcher cursor-pointer"
                          @click="switchMode"
                        >
                          <label
                            for="post-form-5"
                            class="form-check-label ml-0 mb-2"
                            >Enable Dark Mode</label
                          >

                          <div
                            :class="{
                              'dark-mode-switcher__toggle--active': darkMode,
                            }"
                            class="dark-mode-switcher__toggle border"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Display Information -->
        </div>
      </div>
    </div>

    <!-- Success modal -->
  </div>
  <div
    id="success-modal-preview"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="p-5 text-center">
            <CheckCircleIcon class="w-16 h-16 text-success mx-auto mt-3" />
            <div class="text-3xl mt-5">Good job!</div>
            <div class="text-slate-500 mt-2">Saved successfully!</div>
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
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";

const darkModeStore = useDarkModeStore();
const darkMode = computed(() => darkModeStore.darkMode);

const setDarkModeClass = () => {
  darkMode.value
    ? dom("html").addClass("dark")
    : dom("html").removeClass("dark");
};

const switchMode = () => {
  darkModeStore.setDarkMode(!darkMode.value);
  setDarkModeClass();
};

setDarkModeClass();

const workflows = (workflow) => {
  return workflow.split("->");
};
</script>
