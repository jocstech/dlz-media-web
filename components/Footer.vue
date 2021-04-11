<template>
  <footer id="footer" class="footer bg-black text-white font-light">
    <div class="inner container m-auto px-4 py-16 md:py-28 space-y-6">
      <div class="headline flex space-x-6 items-center">
        <div class="icon w-10 h-10">
          <img
            class="w-full h-full"
            src="~assets/img/icons/shutter-gray.svg"
            alt="logo"
          />
        </div>
        <div>
          <div class="label text-xl text-gray-400">Contact</div>
          <div class="title text-3xl">Contact us</div>
        </div>
      </div>
      <div class="contact text-xl md:text-3xl font-light space-y-2">
        <div class="line w-full flex space-x-6">
          <div class="key flex-1 text-right text-theme">Email</div>
          <div class="value flex-1 text-left">info@dlzmedia.ca</div>
        </div>
        <div class="line w-full flex space-x-6">
          <div class="key flex-1 text-right text-theme">Phone</div>
          <div class="value flex-1 text-left">647-550-2398</div>
        </div>
        <div class="line w-full flex space-x-6">
          <div class="key flex-1 text-right text-theme">WeChat</div>
          <div class="value flex-1 text-left">DLZMedia</div>
        </div>
      </div>
    </div>
    <div class="ending h-3"></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.ending {
  background: rgb(80, 29, 121);
  background: linear-gradient(
    25deg,
    rgba(80, 29, 121, 1) 0%,
    rgba(80, 34, 124, 1) 18%,
    rgba(78, 204, 221, 1) 100%
  );
}
</style>
