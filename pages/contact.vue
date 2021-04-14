<template>
  <div class="contact bg-gray-100">
    <PageHeader title="Contact Us" bg="4">
      <p>We provide the professional video production services</p>
    </PageHeader>
    <div class="inner container m-auto max-w-4xl px-4 py-32 space-y-16">
      <h2 class="text-4xl font-bold text-center">Contact Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col bg-white text-center p-6 space-y-3">
          <strong class="text-2xl text-gray-500">Email</strong>
          <span class="text-xl">{{ $store.getters.settings.email }}</span>
        </div>
        <div class="flex flex-col bg-white text-center p-6 space-y-3">
          <strong class="text-2xl text-gray-500">Phone</strong>
          <span class="text-xl">{{ $store.getters.settings.phone }}</span>
        </div>
        <div class="flex flex-col bg-white text-center p-6 space-y-3">
          <strong class="text-2xl text-gray-500">WeChat</strong>
          <span class="text-xl">{{ $store.getters.settings.wechat }}</span>
        </div>
      </div>
      <div class="bg-white p-6 space-y-8">
        <h2 class="text-xl font-bold">REQUEST A QUOTE!</h2>
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Us',
      description: 'We provide the professional video production services',
    }
  },
}
</script>

<style lang="scss" scoped></style>
