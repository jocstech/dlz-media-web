<template>
  <div class="contact-form">
    <form
      class="space-y-3 md:space-y-6"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div
        class="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
      >
        <input
          v-model="form.company"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="text"
          name="company"
          placeholder="Company*"
          required
        />
        <input
          v-model="form.contact_name"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="text"
          name="contact-name"
          placeholder="Contact Name*"
          required
        />
      </div>
      <div
        class="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
      >
        <input
          v-model="form.phone"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="tel"
          name="phone"
          placeholder="Phone*"
          required
        />
        <input
          v-model="form.email"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
      </div>
      <div
        class="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3"
      >
        <input
          v-model="form.date"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="date"
          name="date"
          placeholder="Shooting Date*"
        />
        <input
          v-model="form.budget"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          type="text"
          name="budget"
          placeholder="Budget Range(CAD)*"
          required
        />
      </div>
      <div class="group flex">
        <textarea
          id="description"
          v-model="form.description"
          class="flex-1 px-6 py-4 rounded bg-gray-100"
          name=""
          rows="6"
          placeholder="Please provide a brief description of what you require"
        ></textarea>
      </div>
      <div class="group flex">
        <input
          class="flex-1 px-6 py-4 trans rounded bg-purple-500 text-white hover:bg-purple-700 cursor-pointer"
          type="submit"
          value="Send Request"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        company: null,
        contact_name: null,
        phone: null,
        email: null,
        date: new Date(),
        budget: null,
        description: null,
      },
    }
  },
  methods: {
    submit() {},
  },
}
</script>

<style lang="scss" scoped>
input,
textarea {
  outline-color: black;
}
</style>
