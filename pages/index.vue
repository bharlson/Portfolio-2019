<template>
<div id="app">
    <div class="container">
      <section id="intro">
        <div class="row">
          <div class="col">
            <div class="name">
                <h1>BJØRN HARLSON</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>I'm a designer and front end web developer born and raised in Seattle</p>
            <p>Artist since 1994, designer since 2011, web developer since 2014.</p>
            <p>Currently working as a digital designer at <nuxt-link to="scotsman-guide">Scotsman Guide</nuxt-link></p>
          </div>
        </div>
      </section>
    <section id="projects">
      <div class="row">
        <div class="col">
          <h2>Projects</h2>
        </div>
      </div>
      <div class="row">
        <portfolio-item 
        v-for='item in dataSrc'
        :key='item'
        :name="item.name" 
        :link='item.link'
        :imgSrc='item.imgSrc'
        :overlayText='item.overlayText'
        :staticSrc='item.staticSrc'
        :isMobile='mobileWidth'
        >
        </portfolio-item>
      </div>
    </section>
    </div>
</div>  
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem.vue'
import ImgHover from '~/components/ImgHover.vue'

export default {
  components: {
    PortfolioItem,
    ImgHover
  },
  layout:'default',
  data(){
    return{
      windowWidth:0,
      dataSrc:[
        {
          name:'Scott 2019',
          link:'scott2019',
          imgSrc:require('@/static/img/scott2019/scott2019-desktop-animated.gif'),
          staticSrc:require('@/static/img/scott2019/scott2019-desktop-static.jpg')
        },
        {
          name:'Scotsman Guide',
          link:'scotsman-guide',
          imgSrc:require('@/assets/img/sgm/scotsmanguide-desktop-animated.gif'),
          staticSrc:require('@/assets/img/sgm/scotsmanguide-desktop-static.jpg'),
        },
        {
          name:'Ask a Lender',
          link:'ask-a-lender',
          imgSrc:require('@/assets/img/aal/aal-homepage-desktop-animated.gif'),
          staticSrc:require('@/assets/img/aal/aal-homepage-desktop-static.jpg')
        },
        {
          name:'Creaytive',
          link:'creaytive',
          imgSrc:require('@/assets/img/creaytive/creaytive-desktop-animated.gif'),
          staticSrc:require('@/assets/img/creaytive/creaytive-desktop-static.jpg'),
        }
      ],
      aboutPhoto:{
        animated:require('@/assets/img/about/bus-selfie-animated.gif'),
        static:require('@/assets/img/about/bus-selfie-static.jpg')
      }
    }
  },
  computed:{
    mobileWidth(){
      if(this.windowWidth <= 768){
        return true;
      }
      else{
        return false;
      }
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
    window.onresize = ()=>{
        this.windowWidth = window.innerWidth
    }
  }

}
</script>

<style lang='scss' scoped>

h1{

  font-size: 3rem;
  @media (min-width: 768px){
    font-size:7vw;
  }
}
h2{
  font-size: 4rem;
}
p{
  font-size:1.5rem;
}

img{
  width:300px;
}

.name{
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-blend-mode:screen;
  h1{
        &:hover,&:active{
        opacity:0.98;
        // mix-blend-mode:hue;

    }
  }
  @media (min-width: 768px) {
    h1{
      font-size: 7rem;
    }
    &:hover,&:active{
        background-image: url(../assets/img/about/bus-selfie-animated.gif/);
    }
  }
}
#intro{
  margin:2rem 0 3.5rem 0;
}
</style>
