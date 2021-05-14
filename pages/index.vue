<template>
  <div class="home">
    <div class="inner font-extralight">
      <div class="hero w-full text-right flex">
        <div
          class="container m-auto px-6 max-w-6xl text-xl md:text-4xl lg:text-6xl space-y-16"
        >
          <div
            class="callout font-semibold md:font-black space-y-3 tracking-wide text-gray-700 filter md:drop-shadow animated fadeIn slower"
          >
            <!-- <h1 class="">Luxury Watches Jewelry Made</h1>
            <h1>For Everyday Attire</h1> -->
          </div>
          <div
            class="actions text-base md:text-2xl pt-52 md:pt-60 lg:pt-96 animated fadeIn slower delay-1s"
          >
            <button
              class="bg-theme trans hover:bg-green-600 text-base font-extralight text-white px-4 md:px-8 py-2 md:py-4 rounded"
              @click="$router.push('/services')"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <!-- ABOUT US -->
      <section class="about-us bg-white py-16">
        <div
          class="inner container m-auto px-6 max-w-6xl space-y-3 lg:space-x-6 flex flex-col lg:flex-row"
        >
          <div class="text-block space-y-6 flex-1">
            <Headline title="about" subtitle="about us"></Headline>
            <article
              class="md:text-xl md:leading-8 space-y-1 md:space-y-4 text-gray-600"
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
            <div class="actions text-base md:text-2xl text-center md:text-left">
              <button
                class="bg-theme trans hover:bg-green-600 font-extralight text-white px-4 md:px-8 py-2 md:py-4 rounded uppercase"
                @click="$router.push('/about')"
              >
                learn more
              </button>
            </div>
          </div>
          <div class="cover w-full lg:w-96">
            <img class="w-full" src="/images/bg8.jpg" alt="about us" />
          </div>
        </div>
      </section>
      <!-- TEAM MEMBERS -->
      <section class="team bg-gray-100 py-16 hidden">
        <div class="inner container m-auto px-4 max-w-6xl space-y-16 space-x-6">
          <Headline title="team" subtitle="team members"></Headline>
          <div
            class="members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0"
          >
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44 object-cover"
                  src="/images/persona1.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-3xl font-light text-theme"
                  >Oscar Jin</span
                >
                <span class="job-title text-xl text-gray-600">Founder</span>
              </div>
            </div>
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44 object-cover"
                  src="/images/persona2.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-3xl font-light text-theme"
                  >Rooney Wei</span
                >
                <span class="job-title text-xl text-gray-500">Founder</span>
              </div>
            </div>
            <div class="member flex flex-col items-center space-y-8">
              <div class="profile-pic">
                <img
                  class="rounded-full w-44 h-44 object-cover"
                  src="/images/persona3.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-3xl font-light text-theme"
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
                  class="rounded-full w-44 h-44 object-cover"
                  src="/images/persona4.jpg"
                  alt="Oscar Jin"
                />
              </div>
              <div class="info flex flex-col items-center space-y-3">
                <span class="name text-3xl font-light text-theme"
                  >Chloe Li</span
                >
                <span class="job-title text-xl text-gray-500">Producer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SERVICES -->
      <section class="services bg-white py-16">
        <div class="inner container m-auto px-4 max-w-6xl space-y-16 space-x-6">
          <Headline title="services" subtitle="our services"></Headline>
        </div>
        <div class="content py-16">
          <ServicesList></ServicesList>
        </div>
      </section>
      <!-- COMPANIES -->
      <section class="compaines bg-white py-16">
        <div class="inner container m-auto px-4 max-w-6xl space-y-16 space-x-6">
          <Headline
            title="companies"
            subtitle="companies we work with"
          ></Headline>
          <div class="content">
            <div
              class="compaines grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3"
            >
              <div class="company border filter hover:grayscale trans">
                <img src="/images/company1.jpg" alt="company" />
              </div>
              <div class="company border filter hover:grayscale trans">
                <img src="/images/company2.jpg" alt="company" />
              </div>
              <div class="company border filter hover:grayscale trans">
                <img src="/images/company3.jpg" alt="company" />
              </div>
              <div class="company border filter hover:grayscale trans">
                <img src="/images/company4.jpg" alt="company" />
              </div>
              <div class="company border filter hover:grayscale trans">
                <img src="/images/company5.png" alt="company" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- CHANNEL -->
      <section class="channel bg-theme py-16">
        <div class="inner container m-auto px-4 max-w-6xl space-y-16 space-x-6">
          <Headline
            title="channels"
            subtitle="channels"
            :darkmode="true"
          ></Headline>
          <div class="content flex justify-center">
            <div class="list w-full grid grid-cols-1 md:grid-cols-2">
              <div class="item flex items-center space-x-3 p-6">
                <img
                  class="w-6 md:w-9 h-6 md:h-9"
                  src="~assets/img/icons/douyin.svg"
                  alt="Douyin"
                />
                <div class="info flex flex-col text-white">
                  <span>dlz_media_at_toronto</span>
                  <span>DLZ_Media</span>
                </div>
              </div>
              <div class="item flex items-center space-x-3 p-6">
                <img
                  class="w-6 md:w-9 h-6 md:h-9"
                  src="~assets/img/icons/instagram.svg"
                  alt="instagram"
                />
                <div class="info flex flex-col text-white">
                  <span>dlz_media_at_toronto</span>
                </div>
              </div>
              <div class="item flex items-center space-x-3 p-6">
                <img
                  class="w-6 md:w-9 h-6 md:h-9 rounded-full bg-white"
                  src="~assets/img/icons/redbook.svg"
                  alt="redbook"
                />
                <div class="info flex flex-col text-white">
                  <span>DLZ Discovery</span>
                </div>
              </div>
              <div class="item flex items-center space-x-3 p-6">
                <img
                  class="w-6 md:w-9 h-6 md:h-9"
                  src="~assets/img/icons/youtube.svg"
                  alt="TikTok"
                />
                <div class="info flex flex-col text-white">
                  <span>DLZ_Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  button {
    font-family: 'Oswald', sans-serif;
  }

  .inner {
    .hero {
      background-image: url('/images/home-hero2.jpg');
      background-position: center center;
      background-size: cover;

      height: 50vw;
      @media (max-width: 760px) {
        height: 85vw;
      }
    }
  }

  .channel {
    .list {
      .item {
        border-bottom: 1px dashed rgb(255, 255, 255);
        @media (min-width: 768px) {
          padding-left: 6rem;
          border: 1px dashed rgb(255, 255, 255);
          &:nth-child(1) {
            border-top: 0;
            border-left: 0;
          }
          &:nth-child(2) {
            border-top: 0;
            border-left: 0;
            border-right: 0;
          }
          &:nth-child(3) {
            border-top: 0;
            border-bottom: 0;
            border-left: 0;
          }
          &:nth-child(4) {
            border-top: 0;
            border-bottom: 0;
            border-left: 0;
            border-right: 0;
          }
        }
      }
    }
  }
}
</style>
