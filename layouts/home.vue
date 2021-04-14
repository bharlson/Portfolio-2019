<template>
  <div>
    <header-nav home="true" ref="headerHeight"></header-nav>
    <main>
      <nuxt />
    </main>
    <site-footer home="true"></site-footer>
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
  layout:'home'
}
</script>
<style style='scss'>
@import url(../assets/scss/_variables.scss);

</style>
