<template>
  <div class="works">
    <PageHeader title="Portfolio and Works" bg="3">
      <p>We provide the professional video production services</p>
    </PageHeader>
    <section class="container m-auto px-4 py-16">
      <div class="masonry">
        <div
          v-for="(item, index) of portfolios"
          :key="index"
          class="item bg-gray-900"
        >
          <nuxt-link :to="`/${item.slug}`">
            <div class="info py-4 px-3">
              <h2 class="text-xl font-semibold text-white">{{ item.title }}</h2>
              <div class="cast">
                <div class="text-gray-400">
                  <span>Director:</span>
                  <span>{{ item.director }}</span>
                </div>
              </div>
            </div>
            <div class="cover">
              <Picture
                :asset="item.cover"
                :alt="item.title"
                :show-play="true"
              ></Picture>
            </div>
            <div class="p-1">
              <h3 class="text-xs text-gray-200 text-right">
                Published: {{ new Date(item.created_at).toLocaleString() }}
              </h3>
            </div>
          </nuxt-link>
        </div>
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
  components: {},
  async asyncData({ app: { $directus } }) {
    const portfoliosRes = await $directus.items('portfolio').readMany()
    return {
      portfolios: portfoliosRes.data,
    }
  },
}
</script>

<style lang="scss" scoped>
.masonry {
  width: 100%;
  margin: 1.2rem auto;
  columns: 300px 4;
  column-gap: 1.8rem;
  .item {
    width: 100%;
    break-inside: avoid;
    margin-bottom: 1.8rem;
  }
}
</style>
