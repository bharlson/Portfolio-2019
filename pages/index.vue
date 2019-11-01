<template>
<div id="app">
    <div class="container">
      <section class="my-5">
        <div class="row">
          <div class="col">
            <div class="name">
                <h1>BJØRN HARLSON</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!-- <img src="@/assets/img/about/bus-selfie-static.jpg" alt=""> -->
            <!-- <p>            
              <img-hover :animatedSrc="aboutPhoto.animated" :staticSrc="aboutPhoto.static"></img-hover>
            </p> -->
            <p>I'm a designer and front end web developer born and raised in Seattle</p>
            <p>Artist since 1994, designer since 2011, web developer since 2014.</p>
            <p>Currently working on the new redesign of <a href="http://scotsmanguide.com">Scotsman Guide</a></p>
          </div>
        </div>
      </section>
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
        :imgSrc="item.imgSrc" 
        :overlayText="item.overlayText"
        :staticSrc="item.staticSrc">
        </portfolio-item>
        <!-- <portfolio-item :name="dataSrc[1].name" :imgSrc="dataSrc[1].imgSrc" :staticSrc="dataSrc[1].staticSrc"></portfolio-item> -->
      </div>
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
      dataSrc:[
        {
          name:'Scott 2019',
          imgSrc:require('@/assets/img/scott2019/scott2019-desktop-animated.gif'),
          staticSrc:require('@/assets/img/scott2019/scott2019-desktop-static.jpg')
        },
        {
          name:'Ask a Lender',
          imgSrc:require('@/assets/img/aal/aal-homepage-desktop-animated.gif'),
          staticSrc:require('@/assets/img/aal/aal-homepage-desktop-static.jpg')
        },
        {
          name:'Scotsman Guide',
          imgSrc:require('@/assets/img/sgm/scotsmanguide-censored-desktop-animated.gif'),
          staticSrc:require('@/assets/img/sgm/scotsmanguide-censored-desktop-static.jpg'),
          overlayText:'Coming Soon'
        },
        {
          name:'Creaytive',
          imgSrc:require('@/assets/img/creaytive/creaytive-desktop-animated.gif'),
          staticSrc:require('@/assets/img/creaytive/creaytive-desktop-static.jpg'),
        }
      ],
      aboutPhoto:{
        animated:require('@/assets/img/about/bus-selfie-animated.gif'),
        static:require('@/assets/img/about/bus-selfie-static.jpg')
      }
    }
  }

}
</script>

<style lang='scss' scoped>

h1{
  // font-family:'Highway Gothic Expanded';
  // text-align: right;
  // font-family:'Arial';
  font-size: 3rem;
  @media (min-width: 768px){
    font-size:7vw;
  }
}
h2{
  // font-family:'Highway Gothic Expanded';
  // font-family:'Arial';
  font-size: 4rem;
  // text-align: right;
}
p{
  font-size:1.5rem;
}

img{
  width:300px;
}

.name{
  // background-image: url(../assets/img/about/bus-selfie-static.jpg);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  &:hover,&:active{
      background-image: url(../assets/img/about/bus-selfie-animated.gif/);
  }
}
</style>
