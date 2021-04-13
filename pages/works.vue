<template>
  <div class="works">
    <PageHeader title="Portfolio and Works" bg="3">
      <p>We provide the professional video production services</p>
    </PageHeader>
    <div class="container m-auto px-4 py-16">
      <div class="masonry">
        <nuxt-link
          v-for="(item, index) of portfolios"
          :key="index"
          :to="`/${item.slug}`"
          class="item"
        >
          <div class="cover">
            <Picture :asset="item.cover" :alt="item.title"></Picture>
          </div>
          <div class="info py-3">
            <h2 class="text-3xl">{{ item.title }}</h2>
            <h3 class="text-xl text-gray-700">{{ item.subtitle }}</h3>
            <div class="cast">
              <span class="text-gray-400">
                <span>Director</span>
                <span>{{ item.director }}</span>
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
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
  column-gap: 1.6rem;
  // .item {
  //   width: 100%;
  //   break-inside: avoid;
  //   margin-bottom: 1.6rem;
  // }
}
</style>
