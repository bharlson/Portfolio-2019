<template>
<div id="app">
    <div class="container">
      <section id="intro">
        <div class="row">
          <div class="col">
            <p class="hello"><small>Hi, I'm </small></p>
            <hover-area customClass="custom-cursor-name">
              <nuxt-link tag="div" to="/about" class="name">
                  <h1 class="pt-0">BJØRN HARLSON</h1>
              </nuxt-link>
            </hover-area>
              <!-- <nuxt-link tag="div" to="/about" class="name">
                  <h1 class="pt-0">BJØRN HARLSON</h1>
              </nuxt-link> -->
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
        v-for='(item,index) in dataSrc'
        :key='index'
        :name="item.name" 
        :link='item.link'
        :role='item.role'
        :caption='item.caption'
        :imgSrc='item.imgSrc'
        :overlayText='item.overlayText'
        :staticSrc='item.staticSrc'
        :bgColor='item.bgColor'
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
import CustomCursor from '~/components/CustomCursor.vue'
import HoverArea from '~/components/HoverArea.vue'

export default {
  components: {
    PortfolioItem,
    ImgHover,
    CustomCursor,
    HoverArea
  },
  layout:'home',
  data(){
    return{
      windowWidth:0,
      dataSrc:[
        {
          name:'Scotsman Guide',
          link:'scotsman-guide',
          imgSrc:require('@/assets/img/sgm/scotsmanguide-desktop-animated.gif'),
          staticSrc:require('@/assets/img/sgm/scotsmanguide-desktop-static.jpg'),
          bgColor:'#8196C3',
          role:'Design, Web Development',
          caption:'Lending Industry Media & Tech. Company'
        },
        {
          name:'Nikkita 4 Nine',
          alt:'Nikkita 4 Nine',
          link:'nikkita4nine',
          imgSrc:require('@/assets/img/nikkita4nine/Nikkita4Nine-home-animated.gif'),
          staticSrc:require('@/assets/img/nikkita4nine/Nikkita4Nine-home-static.jpg'),
          bgColor:'#f0f0f0',
          role:'Web Development, Design',
          caption:'City Council Campaign Website'
        },
        {
          name:'Scott 2019',
          alt:'Scott 2019',
          link:'scott2019',
          imgSrc:require('@/assets/img/scott2019/scott2019-desktop-animated.gif'),
          staticSrc:require('@/assets/img/scott2019/scott2019-desktop-static.jpg'),
          loadingBg:'scott2019',
          bgColor:'#F52033',
          role:'Web Development, Design',
          caption:'City Council Campaign Website'
        },
        {
          name:'Ask a Lender',
          alt:'Ask a Lender',
          link:'ask-a-lender',
          imgSrc:require('@/assets/img/aal/aal-homepage-desktop-animated.gif'),
          staticSrc:require('@/assets/img/aal/aal-homepage-desktop-static.jpg'),
          bgColor:'#E3F490',
          role:'Design, Web Development',
          caption:'Consumer-facing Lending Info Website'
        },
        {
          name:'Creaytive',
          alt:'Creaytive',
          link:'creaytive',
          imgSrc:require('@/assets/img/creaytive/creaytive-desktop-animated.gif'),
          staticSrc:require('@/assets/img/creaytive/creaytive-desktop-static.jpg'),
          bgColor:'#4E83D3',
          role:'Web Development',
          caption:'Design and Marketing Firm'
        },
        {
          name:'Memes',
          alt:'Memes',
          link:'memes',
          imgSrc:require('@/assets/img/memes/meme-project-img-animated.gif'),
          staticSrc:require('@/assets/img/memes/meme-project-img-static.jpg'),
          bgColor:'#4E83D3',
          role:'Design',
          caption:'Personal projects, fun with photoshop'
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
.hello{
  position: absolute;
  display: block;
  top:-1rem;
  left:1rem;
    @media (min-width: 768px){
    top:0;
    // left:0;
  }
}
h1{
  font-size: 3rem;
  @media (min-width: 768px){
    font-size:7vw;
  }
}
h2{
  font-size: 3rem;
    @media (min-width: 768px){
    font-size:4rem;
  }
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
    &:hover{
      cursor: pointer;
    }
    &:hover,&:active{
        background-image: url(../assets/img/about/bus-selfie-animated.gif/);
        background-position: right;
        // background-blend-mode:hue;
        // mix-blend-mode: hard-light;
        text-shadow: 1px 2px 2px rgba(#fff,0.75);
    }
  }
}
#intro{
  margin:2rem 0 3.5rem 0;
}
</style>
