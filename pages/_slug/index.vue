<template>
  <div class="portfolio pb-32">
    <div
      class="video-cover bg-cover bg-center h-70w"
      :style="`background-image:url(${$imgURL(portfolio.cover)})`"
    >
      <div class="cover w-full h-full"></div>
    </div>
    <div class="video-player container max-w-6xl m-auto px-4 py-16 relative">
      <div class="headline text-center space-y-6 pb-16">
        <h1 class="text-3xl md:text-5xl text-white">{{ portfolio.title }}</h1>
        <h2 class="text-sm md:text-xl text-gray-400">
          {{ portfolio.subtitle }}
        </h2>
      </div>
      <div class="video">
        <Video
          :vid="portfolio.youtube_id"
          :alt="portfolio.title"
          class=""
        ></Video>
      </div>
      <div class="info bg-gray-900 text-white p-10 md:p-16 space-y-3">
        <div class="headline flex gap-2 items-center">
          <img
            class="w-5 md:w-8"
            src="~assets/img/icons/youtube2.svg"
            alt="play"
          />
          <h2 class="text-base md:text-2xl">{{ portfolio.title }}</h2>
        </div>
        <hr />
        <div class="flex flex-col space-y-3">
          <span>
            <strong>Director</strong>
            <span class="text-gray-400"> {{ portfolio.director }}</span>
          </span>
          <span>
            <strong>Producer</strong>
            <span class="text-gray-400"> {{ portfolio.producer }}</span>
          </span>
          <span>
            <strong>Post Producer</strong>
            <span class="text-gray-400"> {{ portfolio.post_producer }}</span>
          </span>
          <span>
            <strong>Editor</strong>
            <span class="text-gray-400"> {{ portfolio.editor }}</span>
          </span>
        </div>
        <hr />
        <div class="space-y-3">
          <strong> Portfolio Description </strong>
          <p class="text-gray-400">
            {{ portfolio.description }}
          </p>
        </div>
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

<style lang="scss" scoped>
.portfolio {
  .video-cover {
    z-index: 0;
    margin-bottom: -65rem;
    @media (max-width: 1400px) {
      margin-bottom: -55vw;
    }
    @media (max-width: 800px) {
      margin-bottom: -70vw;
    }

    .cover {
      background-image: linear-gradient(
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.7),
        rgb(255, 255, 255)
      );
    }
  }
}
</style>
