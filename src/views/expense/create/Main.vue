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
        <button class="w-10 h-10 rounded-full btn btn-primary">1</button>
        <div class="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
          Expense Details
        </div>
      </div>
      <div
        class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
      >
        <button
          class="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
        >
          2
        </button>
        <div
          class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
        >
          Preview & Submit
        </div>
      </div>
      
    </div>
    <div
      class="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400"
    >
      <div class="font-medium text-base">About Expense</div>
      <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-1" class="form-label">Expense Title</label>
          <input
            id="input-wizard-1"
            type="text"
            class="form-control"
            placeholder="e.g. Internet subscription"
          />
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-2" class="form-label">Expense Type</label>
          <select
              class="form-control"
            >
              <option value="individual">Individual</option>
              <option value="corporate">Corporate</option>
          </select>
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-2" class="form-label">Description</label>
          <textarea
              id="validation-form-6"
              class="form-control"
              name="description"
              placeholder="Type your description"
          ></textarea>
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-2" class="form-label">Budget Category</label>
          <TomSelect
              id="update-profile-form-2"
              v-model="select"
              class="w-full"
            >
              <option value="1">Accessories</option>
              <option value="2">Office & Funitures</option>
              <option value="3">Others</option>
          </TomSelect>
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-3" class="form-label">Amount</label>
          <input
            id="input-wizard-3"
            type="text"
            class="form-control"
            placeholder="₦1,000,000"
          />
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-4" class="form-label">Quantity (Optional)</label>
          <input
            id="input-wizard-4"
            type="number"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-1" class="form-label">Beneficiary Name</label>
          <input
            id="input-wizard-1"
            type="text"
            class="form-control"
            placeholder="e.g. John Doe"
          />
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-2" class="form-label">Beneficiary Bank</label>
          <TomSelect
              id="update-profile-form-2"
              v-model="select"
              class="w-full"
            >
              <option value="access">Access Bank</option>
              <option value="gbt">GTBank</option>
              <option value="sterling">Sterling Bank</option>
              <option value="providus">Providus Bank</option>
              <option value="uba">UBA</option>
              <option value="gtb">Union Bank</option>
              <option value="zenith">Zenith Bank</option>
          </TomSelect>
        </div>
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-1" class="form-label">Account No.</label>
          <input
            id="input-wizard-1"
            type="text"
            class="form-control"
            placeholder="e.g. 0043601610"
          />
        </div>

        <div class="intro-y col-span-12 sm:col-span-6">
            <div
              class="form-check form-switch flex flex-col items-start mt-3"
            >
              <label
                for="post-form-5"
                class="form-check-label ml-0 mb-2"
                >Enable Shared Expense</label
              >
              <input
                id="post-form-5"
                class="form-check-input"
                type="checkbox"
              />
            </div>
        </div>
        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
        >
          <button class="btn btn-secondary w-24">Previous</button>
          <button class="btn btn-primary w-24 ml-2">Next</button>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Wizard Layout -->
</template>
