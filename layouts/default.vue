<template>
  <div>
    <header-nav ref="headerHeight"></header-nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
import HeaderNav from '~/components/navs/HeaderNav.vue'
export default {
  components: {
    HeaderNav
  },
  layout:'default'
}
</script>
<style style='scss'>
@import url(../assets/scss/_variables.scss);

</style>
