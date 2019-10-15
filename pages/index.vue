<template>
<div id="app">
    <div class="container">
        <portfolio-item :ref="dataSrc[0].name" :imgSrc="dataSrc[0].imgSrc" :staticSrc="dataSrc[0].staticSrc" leftText="true"></portfolio-item>
        <portfolio-item :ref="dataSrc[1].name" :imgSrc="dataSrc[1].imgSrc" :staticSrc="dataSrc[1].staticSrc" leftText="true"></portfolio-item>
    </div>
</div>  
</template>

<script>
import HeaderNav from '~/components/navs/HeaderNav.vue'
import PortfolioItem from '~/components/PortfolioItem.vue'

export default {
  components: {
    HeaderNav,
    PortfolioItem
  },
  layout:'default',
  data(){
    return{
      dataSrc:[
        {
          name:'Ask a Lender',
          imgSrc:require('@/assets/img/aal/LenderSearch-Animation.gif'),
          staticSrc:require('@/assets/img/aal/LenderSearch-Static.jpg')
        },
        {
          imgSrc:require('@/assets/img/scott2019/scott2019-desktop-animated.gif'),
          staticSrc:require('@/assets/img/scott2019/scott2019-desktop-static.jpg')
        }
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
// .zoom{
//   &-in{
//     transition:transform 1s ease;
//     transform:scale(3) translateX(-10%);
//   }
//   &-out{
//     transition:transform 1s ease;
//     transform:scale(1) translateX(0);
//   }
// }
</style>
