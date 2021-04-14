<template>
  <div class="services">
    <PageHeader title="our services" bg="2">
      <p>We provide the professional video production services</p>
    </PageHeader>
    <section class="pt-16 space-y-16">
      <div class="inner container m-auto flex flex-col px-4 space-y-16">
        <Headline title="pricing" subtitle="services pricing"></Headline>
        <div class="content">
          <Pricing></Pricing>
        </div>
      </div>
    </section>
    <section class="pt-16 space-y-16">
      <div class="inner container m-auto px-4">
        <Headline title="services" subtitle="our services"></Headline>
      </div>
      <div class="content">
        <ServicesList></ServicesList>
      </div>
    </section>
    <section class="bg-gray-100">
      <div class="container m-auto max-w-6xl py-32 space-y-6">
        <Headline class="px-4" title="contact" subtitle="contact us"></Headline>
        <div class="content w-full bg-white p-4 md:p-16">
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Our Services',
      description: 'We provide the professional video production services',
    }
  },
}
</script>

<style lang="scss" scoped></style>
