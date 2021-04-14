<template>
  <article class="work-exp">
    <div class="row">
        <div class="col-md-8">
            <h4><b v-html="companyName"></b></h4>
        </div>
        <div class="col-md-4"><p>{{location}}</p></div>
    </div>
    <div class="row">
        <div class="col">
            <h5>{{start}} <span v-if="end.length>1">-</span> {{end}}</h5>
            <h5>{{position}}</h5>
            <p v-html="desc"></p>
        </div>
    </div>
  </article>
</template>

<script>
  export default {
      props:{
          companyName:{
              type:String
          },
          location:{
              type:String
          },
          start:{
              type:String
          },
          end:{
              type:String
          },
          position:{
              type:String
          },
          desc:{
              type:String
          }

      }

      
  }
</script>

<style lang="scss" scoped>
    // .work-exp{

    // }

</style>