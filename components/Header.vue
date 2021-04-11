<template>
  <header id="header" class="header text-white">
    <div
      class="container m-auto px-4 md:px-0 flex place-content-between items-center py-4"
    >
      <div class="branding">
        <span class="logo text-2xl font-extralight">DLZ MEDIA</span>
      </div>
      <nav
        class="uppercase font-extralight hidden lg:block md:text-sm lg:text-base"
      >
        <ul class="flex space-x-6 md:space-x-8">
          <li>
            <nuxt-link to="/about">about</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/TEAM">team</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services">services</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/companies">companies</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/works">works</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/channel">channel</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="actions font-extralight">
        <button
          class="bg-secondary hover:bg-primary px-4 py-2 flex items-center space-x-2 rounded"
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
