<template>
  <div class="container">
    <section id="intro">
      <div class="row">
        <div class="col">
          <h1>About Me</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <audio id="name-pronunciation" class="d-none" src="/audio/bjorn-harlson.mp3"></audio>
          <ul class="list-unstyled">
            <li>
              <hover-area-inline customClass="custom-cursor-norway">
                <b>Name:</b> Bjørn Harlson
              </hover-area-inline>
            </li>
            <li>
              <hover-area-inline customClass="custom-cursor-rain">
                <b>From:</b> Seattle, WA
              </hover-area-inline>
            </li>

            <li><b>Position:</b> Software Developer at <a href="https://onecare.com" target="_blank">Onecare</a>
            <!-- <li><b>Position:</b> Software Developer at <nuxt-link to="/scotsman-guide">Scotsman Guide</nuxt-link> -->
            </li>
            <li><b>Favorite Tools:</b> Photoshop, Sketch, SASS, Vue.JS, Nuxt.JS, GSAP, Ableton Live</li>
            <li><b>Hobbies/Interests:</b> Studying languages, making music, djing, dancing to music, making memes,
              playing scrabble online, social and economic justice, NBA basketball</li>
            <!-- <li><b>Speaks:</b> English, Spanish, Portuguese, Norwegian</li> -->
            <li>
              <h3 class="my-2">Frequently Asked Questions</h3>
            </li>
            <!-- <li><b>Favorite Foods:</b> Gyros, Tacos Al Pastor, Poke</li> -->
            <li><b>Are you available for freelance work?:</b><br> Probably, <a href="" v-scroll-to="'#contact'">let's
                talk</a></li>
            <li><b>How do you pronounce your name?:</b> <br>
              <hover-area customClass="custom-cursor-audio"><a id="name-pronunciation" @click="pronounceName()">[byurn
                  HARLson]</a></hover-area>
            </li>
            <li><b>Have you heard of that show Vikings?:</b> Ja</li>
          </ul>
        </div>
        <div class="col-lg-6 order-first order-lg-last">
          <!-- <project-img src="about/bus-selfie-static.jpg"></project-img> -->
          <div class="chomp" @mouseover="imgHover = true" @mouseleave="imgHover = false">
          </div>
          <img class="chomp-img img-fluid border-black mb-4" :src="imgSelect">
        </div>
        <custom-cursor cursorClass="chomp-cursor" v-show="imgHover" />
      </div>
      <div class="row">
        <div class="col">
          <!-- <h3>My Philosophy</h3> -->
          <p>I've made art for as long as I can remember, and picked up various mediums along the way. Whenever I see
            something I like, I enjoy making my own version of it, and having grown up very online, learning how to make
            websites was a thrilling skill to pick up. </p>
          <p>I do my best work in bursts of intense inspiration on projects I'm passionate about. I see design as a
            neutral medium of communication, and I prefer to work on projects where I can stand by the message my work
            is communicating.</p>
        </div>
      </div>
      <!--/row-->
      <div class="row">
        <div class="col-12 col-md-8">
          <h2>Work Experience</h2>
        </div>
        <div class="col col-md-4">
          <p class="mt-md-2"><a href="/img/BjornHarlson-Resume-0623.pdf">View Resumé</a></p>
        </div>
      </div>
      <work-exp v-for="(i, index) in workExperience" :key="index" :companyName="i.companyName" :location="i.location"
        :start="i.start" :end="i.end" :position="i.position" :desc="i.desc" />
      <div class="row">
        <div class="col">
          <h2>Education</h2>
        </div>
      </div>
      <work-exp companyName="Western Washington University" location="Bellingham, WA" start="Sept. 2014" end="Dec. 2016"
        position="BA: Design, Minor: Audio Technology, Music and Society" desc="Focus: Web Design, Music Production">
      </work-exp>
    </section>
  </div>
</template>

<script>
  import ImgHover from '@/components/ImgHover.vue'
  import CustomCursor from '@/components/CustomCursor.vue'
  import ProjectImg from '@/components/ProjectImg.vue'
  import WorkExp from '@/components/WorkExp.vue'
  import HoverArea from '@/components/HoverArea.vue'
  import HoverAreaInline from '@/components/HoverAreaInline.vue'
  export default {
    layout: 'page',
    components: {
      ImgHover,
      ProjectImg,
      WorkExp,
      CustomCursor,
      HoverArea,
      HoverAreaInline
    },
    mounted() {
      // const namePronunciation = new Audio('../static/audio/bjorn-harlson.mp3')
    },
    data() {
      return {
        windowWidth: 0,
        animatedSrc: '/img/about/chomp-3.gif',
        staticSrc: '/img/about/chomp-static.jpg',
        workExperience: [
          {
            companyName: "<a href='https://onecare.com'>Onecare Media</a>",
            location: "Seattle, WA",
            start: "Sep. 2021",
            end: "Present",
            position: "Software Developer",
            desc: "Builds and maintains multiple high traffic Wordpress sites. Creates automated tests for SEO and performance. Contributed to redesign of theme for <a href='/sleepfoundation'>Sleepfoundation.org</a>.  Writes documentation and contributes to code reviews with team to maintain high code quality standards."
          },
          {
            companyName: "<a href='/scotsman-guide'>Scotsman Guide</a>/<a href='/ask-a-lender'>Ask a Lender</a>",
            location: "Bothell, WA",
            start: "Apr. 2017",
            end: "Sep. 2021",
            position: "Digital Designer",
            desc: "Worked on a variety of design and web development projects including: image production for web and print editorial use, user interface design, prototyping, HTML email creation, and front end web development."
          },
          {
            companyName: "<a href='/nikkita4nine'>Nikkita 4 Nine</a>",
            location: "Seattle, WA",
            start: "Mar. 2021",
            end: "Dec. 2021",
            position: "Web Developer (Freelance)",
            desc: "Built a campaign site for a local city council campaign using Nuxt.js, currently restructuring the site to use the headless CMS storyblok."
          },
          {
            companyName: "<a href='/scott2019'>Shaun Scott for Seattle City Council 2019</a>",
            location: "Seattle, WA",
            start: "Nov. 2018",
            end: "Dec. 2019",
            position: "Web Developer (Freelance)",
            desc: "Built and maintained a website for a local city council campaign using Nuxt.js. Designed assets and page layouts as needed."
          },
          {
            companyName: "<a href='/creaytive'>Creaytive Inc.</a>",
            location: "Bellingham, WA",
            start: "Jun. 2016",
            end: "Aug. 2016",
            position: "Web Development Intern",
            desc: "Designed and built websites to meet client needs. Gained skills using Wordpress and writing HTML, CSS, and Jquery."
          },
          {
            companyName: "The Planet Magazine",
            location: "Bellingham, WA",
            start: "Apr. 2016",
            end: "Dec. 2016",
            position: "Web Developer",
            desc: "Maintained a wordpress website for Western Washington University's Environmental Issues Magazine"
          }
        ],
        imgHover: false
      }
    },
    computed: {
      imgSelect() {
        if (this.imgHover) {
          return this.animatedSrc
        } else {
          return this.staticSrc
        }
      }
    },
    methods: {
      pronounceName() {
        var audio = document.getElementById("name-pronunciation");
        audio.play()
      }
    }
  }
</script>

<style lang='scss'>
  @import '@/assets/scss/_variables.scss';

  li {
    font-size: 1.25rem;
  }

  #name-pronunciation {
    color: $blue;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .chomp {
    &-img {
      max-height: 400px;
    }

    // border:3px solid black;
    height:80px;
    width:80px;
    position: absolute;
    top:180px;
    left:193px;

    &-cursor {
      &::after {
        content: url(../../static/img/cursors/gyro.png);
      }
    }

  }
</style>