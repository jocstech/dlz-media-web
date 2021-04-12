<template>
  <video class="video w-full" controls autoplay>
    <source :src="src" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: 'Video',
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
