<template>
  <figure class="figure relative">
    <img :src="src" :alt="alt" />
    <div
      v-if="showPlay"
      class="play-btn-cover trans absolute w-full h-full top-0 left-0 flex justify-center items-center"
    >
      <img
        class="w-10 h-10"
        src="~assets/img/icons/play-btn.svg"
        alt="Play Button"
      />
    </div>
  </figure>
</template>

<script>
export default {
  name: 'Picture',
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
    showPlay: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    src() {
      return `https://api.dlzmedia.ca/assets/${this.asset}`
    },
  },
}
</script>

<style lang="scss" scoped>
.play-btn-cover {
  background: #00000030;
  &:hover {
    background: #00000050;
  }
}
</style>
