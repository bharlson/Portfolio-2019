<template>
    <img
        :src="imgSelect" 
        alt="" 
        @mouseover="imgHover = true" 
        @mouseleave="imgHover = false"
    >
</template>

<script>
export default {
    data(){
        return{
            imgHover:false
        }
    },
    props:{
        animatedSrc:{
            type: String
        },
        staticSrc:{
          type: String
        }
    },
    computed:{
      imgSelect(){
          if(this.imgHover){
              return this.animatedSrc
          }
          else{
              return this.staticSrc
          }
      }
  }
}
</script>

<style>

</style>
