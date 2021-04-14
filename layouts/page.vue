<template>
  <div>
    <header-nav ref="headerHeight"></header-nav>
    <main>
      <nuxt />
    </main>
    <site-footer></site-footer>
  </div>
</template>
<script>
import HeaderNav from '~/components/navs/HeaderNav.vue'
import ProjectImg from '~/components/ProjectImg.vue'
import SiteFooter from '~/components/Footer.vue'
export default {
  components: {
    HeaderNav,
    ProjectImg,
    SiteFooter
  },
  // layout:'default'
}
</script>
<style style='scss'>
@import url(../assets/scss/_variables.scss);
/* .back-to-top{
  position:absolute;
  display:block;
  bottom:1rem;
  right:10px;
  z-index: 100000;
  background-color:red;
} */
</style>
