<template>
  <header id="header" class="header text-white sticky top-0 z-20 opacity-95">
    <div
      class="container m-auto px-4 md:px-0 flex place-content-between items-center py-3"
    >
      <div class="branding cursor-pointer flex justify-center items-center">
        <span class="mobile-menu md:hidden flex justify-center items-center">
          <MenuToggle></MenuToggle
        ></span>
        <nuxt-link to="/" class="flex flex-col items-center">
          <span
            class="logo text-xl md:text-2xl font-extralight select-none flex flex-col items-center"
          >
            <img
              class="w-20 md:w-28 filter invert"
              src="~assets/img/logo.svg"
              alt="DLZ Media"
            />
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
          @click="toggleMessageBox"
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
  watch: {
    $route() {
      this.$store.commit('UPDATE_MOBILE_MENU', false)
    },
  },
  methods: {
    toggleMessageBox() {
      this.$store.commit(
        'UPDATE_MESSAGE_BOX',
        !this.$store.getters.showMessageBox
      )
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
