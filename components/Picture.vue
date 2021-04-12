<template>
  <figure class="figure">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script>
export default {
  props: {
    asset: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'no title image',
      required: true,
    },
  },
  computed: {
    src() {
      return `https://api.dlzmedia.ca/assets/${this.asset}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
