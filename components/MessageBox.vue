<template>
  <div
    class="message-box fixed top-16 right-4 md:right-8 w-96 bg-white rounded-xl shadow-2xl"
  >
    <div class="rounded-t-lg bg-gray-100">
      <div class="p-6 space-y-3">
        <h2 class="text-purple-900 text-2xl">We will text you!</h2>
        <p class="text-sm">
          Hello! Our team is here to help. Enter your message below and one of
          our reps will text you shortly.
        </p>
      </div>
    </div>
    <div class="p-6">
      <form class="space-y-6" @submit.prevent="submit">
        <div class="group flex">
          <input
            v-model="form.contact_name"
            class="flex-1 border-b border-gray-400"
            type="text"
            name="contact_name"
            placeholder="Name"
          />
        </div>
        <div class="group flex space-x-3">
          <select
            id="area-code"
            v-model="form.area_code"
            class="flex-1 border-b border-gray-400"
            name="area_code"
          >
            <option>Area Code</option>
            <option value="+1">CA+1</option>
            <option value="+1">US+1</option>
            <option value="+86">CN+86</option>
          </select>
          <input
            v-model="form.phone"
            class="flex-1 border-b border-gray-400"
            type="tel"
            name="phone"
            placeholder="Mobile Phone"
          />
        </div>
        <div class="group flex">
          <textarea
            id="message"
            class="flex-1 border-b border-gray-400"
            name="message"
            rows="1"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="group flex">
          <input
            class="flex-1 trans bg-purple-800 hover:bg-purple-900 text-white px-4 py-3 rounded-lg text-xl font-extralight cursor-pointer"
            type="submit"
            value="SEND"
          />
        </div>
        <div class="footnote text-xs text-gray-400 font-extralight">
          By sending this message, you agree to receive texts at the number
          provided. Message/data rates may apply
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data() {
    return {
      form: {
        contact_name: null,
        area_code: '+1',
        phone: '',
        message: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
input,
select,
textarea {
  outline: none;
  padding: 6px;
  &::placeholder {
    color: #222;
    font-weight: 200;
  }
}

select {
  color: #222;
  font-weight: 200;
}
</style>
