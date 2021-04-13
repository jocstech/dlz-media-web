<template>
  <div class="headline flex space-x-6 items-center">
    <div class="icon w-8 md:w-10 h-8 md:h-10">
      <img
        v-if="!darkmode"
        class="w-full h-full"
        src="~assets/img/icons/shutter-gray.svg"
        alt="logo"
      />
      <img
        v-if="darkmode"
        class="w-full h-full"
        src="~assets/img/icons/shutter-white.svg"
        alt="logo"
      />
    </div>
    <div>
      <div
        class="label text-sm md:text-lg uppercase"
        :class="{ 'text-white': darkmode, 'text-gray-400': !darkmode }"
      >
        {{ title }}
      </div>
      <div class="title text-xl md:text-3xl text-gray-700 capitalize">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    darkmode: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
