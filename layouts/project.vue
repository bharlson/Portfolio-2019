<template>
  <div>
    <header-nav ref="headerHeight"></header-nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
import HeaderNav from '~/components/navs/HeaderNav2.vue'
import ProjectImg from '~/components/ProjectImg.vue'
export default {
  components: {
    HeaderNav,
    ProjectImg
  },
  layout:'default'
}
</script>
<style style='scss'>
@import url(../assets/scss/_variables.scss);

</style>
