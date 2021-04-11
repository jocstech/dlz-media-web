<template>
  <div class="home">
    <div class="inner font-extralight">
      <div class="hero w-full h-50w text-right flex">
        <div
          class="container m-auto px-6 max-w-6xl text-2xl md:text-4xl space-y-3"
        >
          <div class="callout space-y-3 tracking-wide text-gray-700">
            <h1>Luxury Watches Jewelry Made</h1>
            <h1>For Everyday Attire</h1>
          </div>
          <div class="actions text-base md:text-2xl">
            <button
              class="bg-theme font-extralight text-white px-4 md:px-8 py-2 md:py-4 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <section class="about-us bg-white py-16">
        <div
          class="inner container m-auto px-6 max-w-6xl space-y-3 lg:space-x-6 flex flex-col lg:flex-row"
        >
          <div class="text-block space-y-6 flex-1">
            <div class="headline flex space-x-6 items-center">
              <div class="icon w-10 h-10">
                <img
                  class="w-full h-full"
                  src="~assets/img/icons/shutter-gray.svg"
                  alt="logo"
                />
              </div>
              <div>
                <div class="label text-xl text-gray-400">ABOUT</div>
                <div class="title text-3xl">About us</div>
              </div>
            </div>
            <article
              class="text-base md:text-xl leading-8 space-y-1 md:space-y-4 text-gray-600"
            >
              <p>
                DLZ media is a Toronto base video production company, staring at
                2019. We are focus on making cost- effective videos and images
                for small businesses.
              </p>
              <p>
                We provide professional service in commercial, corporate video,
                promotional video, and real estate.
              </p>
              <p>
                We collaborate with our customs, listening their requires and
                making a strong, compelling, multimedia solutions that enhance
                their sales, marketing, training and corporate communication
                activities.
              </p>
              <p>
                We are not creating any content without you; we believe that a
                successful video content is based on communication between us.
              </p>
            </article>
            <div class="actions text-base md:text-2xl">
              <button
                class="bg-theme font-extralight text-white px-4 md:px-8 py-2 md:py-4 rounded uppercase"
              >
                learn more
              </button>
            </div>
          </div>
          <div class="cover w-full lg:w-96">
            <img class="w-full" src="/images/art.jpg" alt="about us" />
          </div>
        </div>
      </section>
      <section class="team bg-gray-100 py-16">
        <div class="inner container m-auto px-4 max-w-6xl space-y-16 space-x-6">
          <div class="headline flex space-x-6 items-center">
            <div class="icon w-10 h-10">
              <img
                class="w-full h-full"
                src="~assets/img/icons/shutter-gray.svg"
                alt="logo"
              />
            </div>
            <div>
              <div class="label text-xl text-gray-400">TEAM</div>
              <div class="title text-3xl">Team members</div>
            </div>
          </div>
          <div
            class="members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0"
          >
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44"
                  src="/images/profile.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-4xl font-normal text-theme"
                  >Oscar Jin</span
                >
                <span class="job-title text-xl text-gray-600">Founder</span>
              </div>
            </div>
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44"
                  src="/images/profile.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-4xl font-normal text-theme"
                  >Rooney Wei</span
                >
                <span class="job-title text-xl text-gray-500">Founder</span>
              </div>
            </div>
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44"
                  src="/images/profile.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-4xl font-normal text-theme"
                  >Charles Wang</span
                >
                <span class="job-title text-xl text-gray-500"
                  >Director/Cinematographer</span
                >
              </div>
            </div>
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44"
                  src="/images/profile.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-4xl font-normal text-theme"
                  >Chloe Li</span
                >
                <span class="job-title text-xl text-gray-500">Producer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="inner h-96 flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold">HOME PAGE</h1>
    </div>
    <div class="inner h-96 flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold">HOME PAGE</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  .inner {
    .hero {
      background-image: url('/images/home-hero.jpg');
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
