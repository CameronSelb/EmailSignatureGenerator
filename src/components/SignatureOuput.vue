<script setup>
import { computed, ref } from "vue";

import template from "@/templates/template.html?raw";

import { renderTemplate } from "@/utils/templateEngine";
import { downloadHtml } from "@/utils/download";
import { validateInput } from "@/utils/InputValidation";
import { copy } from "@/utils/copy";

const props = defineProps({
  signature: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["validation-error"]);

const copied = ref(false)
const downloaded = ref(false)

const renderedHtml = computed(() => {
  return renderTemplate(template, props.signature);
});

function submitFormDownload() {
  const validation = validateInput(props.signature);

  emit("validation-error", validation.errors);

  if (!validation.valid) {
    return;
  }

  downloadHtml(renderedHtml.value, props.signature);

  downloaded.value = true

    setTimeout(() => {
      downloaded.value = false
    }, 2000)
}

async function submitFormCopy() {
  const validation = validateInput(props.signature);

  emit("validation-error", validation.errors);

  if (!validation.valid) {
    return;
  }

  await copy(renderedHtml.value)

  copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
}
</script>

<template>
  <div
    class="p-2 md:p-8 flex flex-col justify-between items-center border-1 border-light-grey rounded-lg"
  >
    <div
      class="preview bg-white w-full h-min mb-8 border-2 border-dark-grey rounded-lg overflow-hidden"
    >
      <div class="border-b border-light-grey px-4 py-3">
        <div class="flex items-center justify-between mb-3">
          <span class="font-bold text-dark-text"> New Mail </span>

          <span class="text-grey text-lg"> × </span>
        </div>

        <div class="text-sm text-grey">
          <div class="flex gap-2">
            <span class="font-medium">To:</span>
            <span>recipient@example.com</span>
          </div>

          <div class="flex gap-2">
            <span class="font-medium">Subject:</span>
            <span>Your email signature</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between p-6 min-h-[300px]">
        <div>
          <p class="text-sm text-dark-text mb-6">Hi there, this is a test email to show you a preview of the email signature you are generating</p>

          <p class="text-sm text-dark-text mb-6">Kind regards,</p>
        </div>
        

        <div v-html="renderedHtml" class="overflow-x-auto"></div>
      </div>
    </div>
    <div class="w-full flex flex-row justify-between">
      <button
        @click="submitFormCopy"
        class="text-dark-text text-base px-4 py-2 rounded-full font-bold bg-primary border-2 border-primary hover:bg-grey hover:text-text disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ copied ? "✓ Signature Copied" : "Copy Signature" }}
      </button>

      <button
        @click="submitFormDownload"
        class="text-text text-base px-4 py-2 rounded-full font-bold bg-grey border-2 border-primary hover:bg-primary hover:text-text-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ downloaded ? "✓ Signature Downloaded" : "Download Signature" }}
      </button>
    </div>
  </div>
</template>
