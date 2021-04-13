<template>
  <div class="services-list">
    <div class="inner">
      <div class="list">
        <div v-for="(service, index) in services" :key="index" class="item">
          <div
            class="wrap w-full flex flex-col"
            :class="index % 2 == 0 ? ' md:flex-row' : 'md:flex-row-reverse'"
          >
            <div
              class="cover flex-1 bg-cover bg-center"
              :style="`background-image: url(${service.cover})`"
            >
              <div class="space h-96 md:hidden"></div>
            </div>
            <div
              class="info flex-1 bg-gray-50 md:h-128 flex flex-col justify-center"
            >
              <div class="p-6 lg:p-16 space-y-6">
                <h2 class="text-2xl font-medium text-gray-700 capitalize">
                  {{ service.name }}
                </h2>
                <p class="text-gray-500 text-base lg:text-xl">
                  {{ service.desc }}
                </p>
                <button
                  class="bg-theme trans hover:bg-green-600 text-white px-8 py-2 rounded"
                >
                  BOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesList',
  data() {
    return {
      services: [
        {
          name: 'Corporate video',
          desc: `DLZ’s professional production team work closely with you and providing the best corporate video production service to your company. Our goal is conveyed your corporate history, vision, premises, ethos, core services to the public by delivering an impactful visual message.`,
          cover: '/images/bg2.jpg',
        },
        {
          name: 'Real estate',
          desc: `(listing photography, videos, 360-degree virtual tour and 3D animation) we work with real-estate agents on both residential and commercial property listings, providing high
          quality photographs, videos, 360 interactive virtual tours and 3D animation and visualization.
          We deliver a movie like experience for the listings to increase the number of potential buyers, resulting a higher and faster close rate from the initial viewing through to selling the property.`,
          cover: '/images/bg2.jpg',
        },
        {
          name: 'Short videos on major social medias',
          desc: `Provide stand-out content and compelling visuals for your social media account including Tiktok, Douyin, RED, Facebook and Instagram, etc., helping your company and brand target more potential customers.`,
          cover: '/images/bg2.jpg',
        },
        {
          name: 'Promotional videos',
          desc: `We collaborate with you, listening all your requires and our production team will create an engaging promo video for your company and brand.
          We have a professional production team convey your message and goal to your intended audiences by a production service solution from pre-production to post-production.`,
          cover: '/images/bg2.jpg',
        },
        {
          name: 'Commercial',
          desc: `We help you create an eye- catching commercial to attract your intended audiences to you brand and product and drive real business results.`,
          cover: '/images/bg2.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
