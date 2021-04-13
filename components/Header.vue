<template>
  <header id="header" class="header text-white sticky top-0 z-10">
    <div
      class="container m-auto px-4 md:px-0 flex place-content-between items-center py-3"
    >
      <div class="branding cursor-pointer">
        <nuxt-link to="/">
          <span class="logo text-xl md:text-2xl font-extralight select-none">
            {{ settings.site_title }}
          </span>
        </nuxt-link>
      </div>
      <nav
        class="uppercase font-extralight hidden lg:block md:text-sm lg:text-base"
      >
        <ul class="flex space-x-6 md:space-x-8">
          <li class="trans hover:text-yellow-400">
            <nuxt-link to="/">home</nuxt-link>
          </li>
          <li class="trans hover:text-yellow-400">
            <nuxt-link to="/about">about</nuxt-link>
          </li>
          <li class="trans hover:text-yellow-400">
            <nuxt-link to="/services">services</nuxt-link>
          </li>
          <li class="trans hover:text-yellow-400">
            <nuxt-link to="/works">works</nuxt-link>
          </li>
          <li class="trans hover:text-yellow-400">
            <nuxt-link to="/contact">contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="actions font-extralight">
        <button
          class="bg-secondary trans hover:bg-primary px-4 py-1 flex items-center space-x-2 rounded"
        >
          <span>Contact Us</span>
          <img
            class="w-5 h-5"
            src="~assets/img/icons/shutter-white.svg"
            alt="Contact Us"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    settings() {
      return this.$store.getters.settings
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: rgb(80, 29, 121);
  background: linear-gradient(
    25deg,
    rgba(80, 29, 121, 1) 0%,
    rgba(80, 34, 124, 1) 18%,
    rgba(78, 204, 221, 1) 100%
  );
}
</style>
