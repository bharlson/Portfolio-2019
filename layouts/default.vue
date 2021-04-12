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
import SiteFooter from '~/components/Footer.vue'
export default {
  components: {
    HeaderNav,
    SiteFooter
  },
  layout:'default'
}
</script>
<style style='scss'>
@import url(../assets/scss/_variables.scss);

</style>
