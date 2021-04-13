<template>
  <div
    v-show="show"
    class="global-overlay z-10 fixed top-0 left-0 right-0 bottom-0"
  >
    <div class="close-area w-full h-full" @click="close"></div>
    <MessageBox v-show="$store.getters.showMessageBox"></MessageBox>
  </div>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.getters.showOverlay && true
    },
  },
  methods: {
    close() {
      this.$store.commit('CLOSE_OVERLAY')
    },
  },
}
</script>

<style lang="scss" scoped>
.global-overlay {
  background-color: #00000055;
}
</style>
