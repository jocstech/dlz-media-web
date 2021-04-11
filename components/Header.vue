<template>
  <header id="header" class="header text-white">
    <div class="container m-auto flex place-content-between py-5">
      <div class="branding">
        <span class="logo text-2xl font-extralight">DLZ MEDIA</span>
      </div>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <nuxt-link to="/">Nav 1</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Nav 2</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Nav 3</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Nav 4</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Nav 5</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Nav 6</nuxt-link>
          </li>
        </ul>
      </nav>
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
