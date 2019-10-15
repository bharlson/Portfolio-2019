<template>
    <article class="portfolio-item row pt-4">
        <div class="col-md-7">
          <h1>{{name}}</h1>
          <a href="#">
            <img :src="imgSelect" alt="" :class="{'zoom-in':imgHover, 'zoom-out':!imgHover, 'order-md-2':leftText} " class="portfolio-item-img img-fluid" @mouseover="imgHover = true" @mouseleave="imgHover = false">
          </a>
        </div>
        <div class="col-md-5" v-if="!imgHover" :class="{'order-md-1':leftText}">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sapiente quod repellendus laboriosam tenetur, iste exercitationem quis sit, similique quae ab provident, eligendi optio tempora laudantium voluptatibus? Beatae, natus non.</p>
        </div>
    </article>
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
      imgSrc:{
          type: String
      },
      staticSrc:{
          type: String
      },
      leftText:{
        type:Boolean
      }
  },
  computed:{
      imgSelect(){
          if(this.imgHover){
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
.zoom{
  &-in{
    @media(min-width:$md){
      transition:transform 1s ease;
      transition-delay: opacity 1.5s;
      transform:scale(1.05) ;
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
</style>
