<template>
  <div class="about">
    <PageHeader title="about us" bg="1">
      <p>
        DLZ media is a Toronto base video production company, staring at 2019.
        We are focus on making cost- effective videos and images for small
        businesses.
      </p>
      <p>
        We provide professional service in commercial, corporate video,
        promotional video, and real estate. We collaborate with our customs,
        listening their requires and making a strong, compelling, multimedia
        solutions that enhance their sales, marketing, training and corporate
        communication activities.
      </p>
      <p>
        We are not creating any content without you; we believe that a
        successful video content is based on communication between us.
      </p>
    </PageHeader>
    <section
      class="container m-auto max-w-6xl flex flex-col md:flex-row py-16 md:py-32 space-y-6 md:space-y-0"
    >
      <div class="cover flex-1">
        <img src="/images/bg7.jpg" alt="cover" />
      </div>
      <div class="info flex-1 px-4 md:px-16 space-y-32">
        <div class="text space-y-8">
          <div class="label text-md text-gray-400">DLZ Media Canada</div>
          <div class="branding">
            <img class="w-64" src="/images/logo.jpg" alt="DLZ Media" />
          </div>
          <div class="title font-bold text-2xl md:text-4xl">
            Creator Of Quality Videos And Thinker Of Fresh Ideas.
          </div>
          <div class="desc space-y-6">
            <p>
              DLZ media is a Toronto base video production company, staring at
              2019. We are focus on making cost- effective videos and images for
              small businesses.
            </p>
            <p>
              We provide professional service in commercial, corporate video,
              promotional video, and real estate. We collaborate with our
              customs, listening their requires and making a strong, compelling,
              multimedia solutions that enhance their sales, marketing, training
              and corporate communication activities.
            </p>
            <p>
              We are not creating any content without you; we believe that a
              successful video content is based on communication between us.
            </p>
          </div>
        </div>
        <!-- <div class="jobs space-y-3">
          <div class="headline text-gray-400">What I Do</div>
          <div class="list-cols flex">
            <div class="col flex-1 flex flex-col space-y-3">
              <span>Scripts Writing</span>
              <span>Post Production</span>
              <span>Video Editing</span>
              <span>Audio Editing</span>
            </div>
            <div class="col flex-1 flex flex-col space-y-3">
              <span>Video Shooting</span>
              <span>Filming Strategy</span>
              <span>Video Audits</span>
              <span>Voiceover</span>
            </div>
          </div>
        </div> -->
        <div class="social">YouTube | RedBook</div>
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
      title: 'About Us',
      description: `DLZ media is a Toronto base video production company, staring at 2019.
        We are focus on making cost- effective videos and images for small
        businesses.`,
    }
  },
}
</script>

<style lang="scss" scoped></style>
