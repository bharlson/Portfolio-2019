<template>
  <div class="container">
      <div class="row">
          <h1>Logos</h1>
          <hover-area customClass="foo">
            <p>fsdfdsfdsfds</p>
            <p>fsdfdsfdsfds</p>
            <p>fsdfdsfdsfds</p>
            <p>fsdfdsfdsfds</p>
          </hover-area>
          <custom-cursor 
          circleColor="red"
          dotColor="green"
          hoverSize="3"
          ></custom-cursor>
      </div>
  </div>
</template>

<script>
import HoverArea from '~/components/HoverArea.vue'
import CustomCursor from '~/components/CustomCursor2.vue'

export default {
  components:{
    HoverArea,
    CustomCursor
  }
}
</script>

<style lang="scss">
  .foo{
    // height:80px;
    // width:80px;
    // position: absolute;
    // top:180px;
    // left:193px;
    &::after{
        content:url(../../static/img/cursors/gyro.png);
      }
  }
</style>