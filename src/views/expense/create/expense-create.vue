<template>
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
              class="w-full"
            >
              <option value="1">Accessories</option>
              <option value="2">Office & Funitures</option>
              <option value="3">Others</option>
          </TomSelect>
        </div>
         <!-- FIle upload -->
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-3" class="form-label">Upload Expense receipt</label>
            <Dropzone
              ref-key="dropzoneSingleRef"
              :options="{
                url: 'https://httpbin.org/post',
                thumbnailWidth: 50,
                maxFilesize: 0.5,
                maxFiles: 1,
              }"
              class="dropzone"
            >
              <div class="text-lg font-medium">
                Drop files here or click to upload.
              </div>
            </Dropzone>
          </div>
      </div>

      <div class="font-medium text-base  mt-8">
        <hr/> <br/>
        Amount
      </div>
      <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
        <!-- <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-4" class="form-label">Quantity (Optional)</label>
          <input
            id="input-wizard-4"
            type="number"
            class="form-control"
            placeholder=""
          />
        </div> -->
        <div class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-3" class="form-label">Total Expense Amount</label>
          <input
            id="input-wizard-3"
            type="number"
            class="form-control"
            placeholder="₦1,000,000"
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
                @change="sharedExpense($event)"
              />
            </div>
        </div>
        
        <div id="multiple-select" :class="{hidden : openOnExpenseShare}" class="intro-y col-span-12 sm:col-span-6" >
          <label for="input-wizard-2" class="form-label">Shared Expense Departments</label>
            <TomSelect
              v-model="selectMultiple"
              :options="{
                placeholder: 'Select departments to share expense',
              }"
              class="w-full"
              multiple
            >
              <option value="Finance">Finance</option>
              <option value="Policy Research / Analysis Advocacy">Policy Research / Analysis Advocacy</option>
              <option value="Free Trade Agreements">Free Trade Agreements</option>
              <option value="Trade in Goods">Trade in Goods</option>
              <option value="Trade in Services">Trade in Services</option>
              <option value="Adminstrative Department">Adminstrative Department</option>

            </TomSelect>
        </div>

        <div v-for="(department, index) in selectMultiple" :key="index" class="intro-y col-span-12 sm:col-span-6">
          <label for="input-wizard-3" class="form-label">Expense amount in {{department}}</label>
          <input
            id="input-wizard-3"
            type="number"
            class="form-control"
            placeholder="₦100,000"
          />
        </div>
      </div>

      <div class="font-medium text-base  mt-8">
        <hr/> <br/>
        Bank Details
        </div>
      <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
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
            type="number"
            class="form-control"
            placeholder="e.g. 0043601610"
          />
        </div>

        <div
          class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
        >
          <button class="btn btn-secondary w-24">Previous</button>
          <router-link :to="{name: 'preview-expense'}" class="btn btn-primary w-24 ml-2">Next</router-link>
        </div>
      </div>
    </div>
</template>


<script setup>
import { ref, provide } from "vue";

  const openOnExpenseShare = ref(true);

  const selectMultiple = ref([]);

  const sharedExpense = (e) =>{
    if (e.target.checked) {
      openOnExpenseShare.value = false;
    } else {
      selectMultiple.value = [];
      openOnExpenseShare.value = true;
    }
  }

  const dropzoneSingleRef = ref();

  provide("bind[dropzoneSingleRef]", (el) => {
    dropzoneSingleRef.value = el;
  });
      
</script>