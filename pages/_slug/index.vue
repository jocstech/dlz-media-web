<template>
  <div class="portfolio">
    <div class="inner container m-auto px-4 py-16 space-y-6">
      <div class="headline text-center space-y-6">
        <h1 class="text-6xl">{{ portfolio.title }}</h1>
        <h2 class="text-3xl text-gray-600">{{ portfolio.subtitle }}</h2>
      </div>
      <div class="video">
        <Video :vid="portfolio.youtube_id" :alt="portfolio.title"></Video>
      </div>
      <div class="cover">
        <Picture :asset="portfolio.cover" :alt="portfolio.title"></Picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app: { $directus } }) {
    const slug = params.slug
    const portfolioRes = await $directus.items('portfolio').readMany({
      filter: {
        slug: {
          _eq: slug,
        },
      },
    })
    return {
      slug,
      portfolio: portfolioRes.data[0],
    }
  },
}
</script>

<style lang="scss" scoped></style>
