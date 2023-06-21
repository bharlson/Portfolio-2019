<template>
  <div class="col-md-6 mb-4">
    <nuxt-link :to="{path:link}">
      <article class="portfolio-item position-relative">
          <h3 class="mb-0 pb-0">{{name}}</h3>
          <span class="portfolio-item-role d-block m-0" v-if="role">
            <b>Role:</b> {{role}}
          </span>
          <span class="overlay-text" v-if="overlayText" >{{overlayText}}</span>
          <div 
            class="portfolio-item-img-wrapper"
            :style="
                'background-image:url(img/loading/homepage-loading-'+loadingBg+'.gif);'+
                'background-color:'+bgColor+';'
              "
          >
            <img
              :src="imgSelect"
              alt=""
              :class="{'zoom-in':imgHover, 'zoom-out':!imgHover, 'order-md-2':leftText} "
              class="portfolio-item-img img-fluid"
              @mouseover="imgHover = true"
              @mouseleave="imgHover = false"
            />
          </div>
      </article>
      <caption class="portfolio-item-caption d-block m-0 w-100">
        {{caption}}
      </caption>
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
  // components:{
  //   VLazyImage
  // },
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
      caption:{
        type: String
      },
      role:{
        type: String
      },
      imgSrc:{
          type: String
      },
      loadingBg:{
          type: String
      },
      bgColor:{
          type: String,
          default:'red'
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
   cursor: pointer;
  }
}
.portfolio-item{
  &-img-wrapper{
    border:2px solid $black;
    height:auto;
    overflow:hidden;
    &:hover{
      cursor: pointer t;
    }

    @media(min-width:$md){
      min-height:202px;
    }
    @media(min-width:$lg){
      min-height:275px;
    }


  }
  &-role{
    color:$black;
    padding-bottom:0.5rem;
    z-index:10000;
    width: 100%;
    font-size:0.85rem;
    @media(min-width:$lg){
      font-size:1.1rem;
    }
  }
  &-caption{
    text-align: center;
    color:$black;
    padding:0.5rem;
    z-index:10000;
    font-size:0.85rem;
    @media(min-width:$lg){
      font-size:1.1rem;
    }
  }
}
.zoom{
  &-in{
    @media(min-width:$md){
      transition:transform 1s ease;
      transition-delay: opacity 1.5s;
      transform:scale(1.01) ;
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
