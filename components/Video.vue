<template>
  <iframe
    class="w-full h-70w md:h-45w lg:h-40w"
    :src="src"
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
      return `https://www.youtube.com/embed/${this.vid}`
    },
  },
}
</script>

<style lang="scss" scoped></style>
