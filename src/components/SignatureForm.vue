<script setup>
const { signature } = defineProps({
  signature: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="p-4 md:px-8 md:py-0 text-text">
    <form class="grid grid-cols-1 gap-4">
      <div class="flex flex-col w-full">
        <div>
          <label for="first_name" class="text-xl font-bold mr-1">First Name</label>
          <p v-if="errors.first_name" class="inline text-xs mt-1 italic text-primary">
            {{ errors.first_name }}
          </p>
        </div>
        <input
          class="mt-2 px-2 py-1 border-1 rounded-lg border-border-grey"
          id="first_name"
          v-model="signature.first_name"
          placeholder="Bob"
        />
        
      </div>

      <div class="flex flex-col w-full">
        <div>
          <label for="last_name" class="text-xl font-bold mr-1">Last Name</label>
          <p v-if="errors.last_name" class="inline text-xs mt-1 italic text-primary">
            {{ errors.last_name }}
          </p>
        </div>
        <input
          class="mt-2 px-2 py-1 border-1 rounded-lg border-border-grey"
          id="last_name"
          v-model="signature.last_name"
          placeholder="Bobarooni"
        />
      </div>

      <div class="flex flex-col w-full">
        <div>
          <label for="email" class="text-xl font-bold mr-1">Email</label>
          <p v-if="errors.email" class="inline text-xs mt-1 italic text-primary">
            {{ errors.email }}
          </p>
        </div>
        <input
          class="mt-2 px-2 py-1 border-1 rounded-lg border-border-grey"
          id="email"
          v-model="signature.email"
          placeholder="example@email.co.za"
        />
      </div>

      <div class="flex flex-col w-full">
        <div>
          <label for="phone_number" class="text-xl font-bold mr-1">Phone Number</label>
          <p v-if="errors.phone_number" class="inline text-xs mt-1 italic text-primary">
            {{ errors.phone_number }}
          </p>
        </div>
        <input
          class="mt-2 px-2 py-1 border-1 rounded-lg border-border-grey"
          id="phone_number"
          type="tel"
          placeholder="123 456 7890"
          pattern="[0-7]{3} [0-9]{3} [0-9]{4}"
          v-model="signature.phone_number"
        />
      </div>

      <div class="flex flex-col w-full">
        <div>
          <label for="job_title" class="text-xl font-bold mr-1">Job Title</label>
          <p v-if="errors.job_title" class="inline text-xs mt-1 italic text-primary">
            {{ errors.job_title }}
          </p>
        </div>
        <input
          class="mt-2 px-2 py-1 border-1 rounded-lg border-border-grey"
          id="job_title"
          v-model="signature.job_title"
          placeholder="Developer"
        />
      </div>
    </form>
  </div>
</template>
