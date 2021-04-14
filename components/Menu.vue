<template>
  <div
    v-show="$store.getters.mobileMenu"
    class="menu fixed top-0 left-0 right-0 bg-white z-10 animated fadeIn"
  >
    <div class="inner font-sans text-2xl w-full h-screen">
      <nav class="mobile-menu pt-32 flex flex-col">
        <nuxt-link
          v-for="item in menu"
          :key="item.id"
          :to="item.url"
          class="menu-item py-4 px-6 border-b border-gray-400"
        >
          {{ item.name }}
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        {
          id: 'home',
          name: 'Home',
          url: '/',
        },
        {
          id: 'about',
          name: 'About Us',
          url: '/about',
        },
        {
          id: 'services',
          name: 'Services',
          url: '/services',
        },
        {
          id: 'works',
          name: 'Works',
          url: '/works',
        },
        {
          id: 'contact',
          name: 'Contact Us',
          url: '/contact',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
.menu {
  .inner {
    animation: fadeIn 1s ease;
  }
}
</style>
