<template>
  <div class="col-md-6 mb-4">
    <nuxt-link :to="{path:link}">
      <article class="portfolio-item">
          <h3>{{name}}</h3>
          <span class="overlay-text" v-if="overlayText" >{{overlayText}}</span>
          <img :src="imgSelect" alt="" :class="{'zoom-in':imgHover, 'zoom-out':!imgHover, 'order-md-2':leftText} " class="portfolio-item-img img-fluid" @mouseover="imgHover = true" @mouseleave="imgHover = false">
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgHover:false
    }
  },
  props:{
      name:{
          type: String
      },
      link:{
          type: String
      },
      overlayText:{
          type: String
      },
      imgSrc:{
          type: String
      },
      staticSrc:{
          type: String
      },
      leftText:{
        type:Boolean
      },
      isMobile:{
        type:Boolean
      }
  },
  computed:{
    imgSelect(){
        if(this.imgHover & !this.isMobile){
            return this.imgSrc
        }
        else{
            return this.staticSrc
        }
    }
  },
  methods:{
    skewImg(){
      
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/_variables.scss';
a{
  color:$black;
  &:hover, &:active{
   text-decoration:none;
  }
}
.portfolio-item{
  position: relative;
  img{
    border:2px solid $black;
  }
}
.zoom{
  &-in{
    @media(min-width:$md){
      transition:transform 1s ease;
      transition-delay: opacity 1.5s;
      transform:scale(1.01) ;
      // opacity:0.9;

    }
  }
  &-out{
    @media(min-width:$md){
      transition:all 1s ease;
      transform:scale(1) translateX(0); 
      opacity:1;  
    }
  }
}
.overlay-text{
  position: absolute;
  z-index:$front;
  display: block;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  color:$black;
  background-color: rgba(256,256,256,0.5);
  border:2px solid transparent;
  margin-left:1rem;
  margin-top: 1rem;
}
</style>
