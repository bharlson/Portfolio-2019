<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Memes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>As a proud #millennial designer and lover of satirical humor, I make memes from time to time to practice my photoshop skills. Anyone can put impact text over a cat photo, but it takes a trained designer to make a convincing mockup of Ivanka Trump holding a guitar pedal. As silly as it is, I feel some of my best design work can be seen in memes I've made.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <project-img src="/memes/design-graduate.jpg" caption="Forgot the screenprint tote bag" preview="true" />
      </div>
      <div class="col-lg-6">
        <project-img src="/memes/exposure.jpg" preview="true" caption="Still holding, it'll spike any day...." />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <project-img src="/memes/ux-meme.jpg" preview="true"
          caption="You'd think user flow studies would make great bedtime stories, but the kids just get too excited to sleep." />
      </div>
      <div class="col-lg-6">
        <project-img src="/memes/tao-capitalism.jpg" preview="true"
          caption="Day trading is actually a deeply spiritual activity" />
      </div>

    </div>
    <div class="row">
      <div class="col-lg-6">
        <project-img src="/memes/signs-as-fighterjets.jpg" preview="true" light="true"
          caption="Which one are you??? (Sponsored Post)" />
      </div>
      <div class="col-lg-6">
        <project-img src="/memes/studentloans-venmo.jpg" preview="true" caption="Finally, a real solution!" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <project-img src="/memes/unclesam-pdf.jpg" preview="true"
          caption="Only YOU can download Adobe Acrobat (parody)" />
      </div>
      <div class="col-lg-6">
        <project-img src="/memes/ivanka-metal-zone.jpg" preview="true"
          caption="Ivanka Trump's noise music is seriously underrated" />
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectImg from '@/components/ProjectImg.vue'
  import ProjectImgScrollable from '@/components/ProjectImgScrollable.vue'
  export default {
    layout: 'page',
    components: {
      ProjectImg,
      ProjectImgScrollable
    },
    data() {
      return {
        windowWidth: 0
      }
    },
  }
</script>

<style>

</style>