<template>
  <div class="works">
    <PageHeader title="Portfolio and Works" bg="3">
      <p>We provide the professional video production services</p>
    </PageHeader>
    <section class="container m-auto px-4 pt-8">
      <div class="filter flex gap-3">
        <span
          class="py-2 px-3 rounded trans hover:bg-gray-200 cursor-pointer"
          :class="{ 'bg-gray-200': currentCat === null }"
          @click="changeCat(null)"
        >
          All
        </span>
        <span
          v-for="category in categories"
          :key="category.id"
          class="py-2 px-3 rounded trans hover:bg-gray-200 cursor-pointer"
          :class="{ 'bg-gray-200': currentCat === category.id }"
          @click="changeCat(category.id)"
        >
          {{ category.name }}
        </span>
      </div>
    </section>
    <section class="container m-auto px-4 pb-16">
      <div class="masonry">
        <transition-group name="list" tag="div">
          <div
            v-for="item of filteredPortfolios"
            :key="item.id"
            class="item trans bg-gray-900"
          >
            <nuxt-link :to="`/${item.slug}`">
              <div class="info py-4 px-3">
                <h2 class="text-xl font-semibold text-white">
                  {{ item.title }}
                </h2>
                <div class="cast">
                  <div class="text-gray-400">
                    <span>Director:</span>
                    <span>{{ item.director }}</span>
                  </div>
                </div>
              </div>
              <div class="cover" style="min-height: 200px">
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
        </transition-group>
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
  async asyncData({ app: { $directus } }) {
    const portfoliosRes = await $directus.items('portfolio').readMany()
    const categoriesRes = await $directus.items('category').readMany()
    return {
      portfolios: portfoliosRes.data,
      categories: categoriesRes.data,
    }
  },
  data() {
    return {
      currentCat: null,
    }
  },
  head() {
    return {
      title: 'Portfolio and Works',
      description: 'We provide the professional video production services',
    }
  },
  computed: {
    filteredPortfolios() {
      return this.currentCat
        ? this.portfolios.filter(
            (portfolio) => portfolio.category === this.currentCat
          )
        : this.portfolios
    },
  },
  methods: {
    changeCat(catId) {
      this.currentCat = catId
    },
  },
}
</script>

<style lang="scss" scoped>
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
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
