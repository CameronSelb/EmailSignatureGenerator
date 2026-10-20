<script setup>
import { reactive, computed, ref } from "vue";
import SignatureOuput from "./components/SignatureOuput.vue";
import SignatureForm from "./components/SignatureForm.vue";
import SettingsTab from "./components/SettingsTab.vue";
import Header from "./components/Header.vue";
import { colours } from "./data/colors.js";

const signature = reactive({
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  job_title: "",
  website: "",
  colour: "slate",
});

const errors = ref({});

const templateData = computed(() => {
  return {
    ...signature,
    colour: colours[signature.colour],
  };
});
</script>

<template>
  <div
    class="max-w-6xl mx-auto my-4 md:my-8 p-2 md:p-8 border-1 border-light-grey rounded-lg bg-grey"
  >
    <Header />

    <SettingsTab :signature="signature" />
    <div class="grid grid-cols-1 md:grid-cols-2 mt-4">
      <SignatureForm :signature="signature" :errors="errors" />
      <SignatureOuput
        :signature="templateData"
        @validation-error="errors = $event"
      />
    </div>
  </div>
</template>
