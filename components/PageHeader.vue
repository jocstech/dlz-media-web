<template>
  <div class="page-header">
    <div class="inner">
      <div
        class="hero bg-cover bg-center flex flex-col items-center justify-center text-white space-y-6 py-28 lg:py-32 px-4"
        :style="`background-image:url('/images/bg${bg}.jpg')`"
      >
        <h1 class="text-4xl lg:text-6xl capitalize animated fadeIn slow">
          {{ title }}
        </h1>
        <article
          class="max-w-3xl text-md lg:text-xl text-center font-thin space-y-3 animated fadeIn delay-1s"
        >
          <slot></slot>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: 'DLZ Media',
    },
    bg: {
      type: String,
      default: '1',
    },
  },
}
</script>

<style lang="scss" scoped>
.page-header {
  .hero {
    h1 {
      font-family: 'Zen Dots', cursive;
    }
  }
}
</style>
