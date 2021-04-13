<template>
  <iframe
    class="w-full h-45w"
    :src="`https://www.youtube.com/embed/${vid}`"
    title="YouTube Video Player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: 'Video',
  props: {
    vid: {
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
