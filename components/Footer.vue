<template>
  <footer class="footer" id="contact">
      <div class="footer-nav container py-5">
          <div class="row">
              <div class="col">
                  <h2>Contact</h2>
              </div>
              <div v-if="!home" class="col">
                  <h2 class="text-right">
                      <nuxt-link to="/#projects" class="footer-nav-list-item footer-projects-link pr-0">Projects</nuxt-link>
                  </h2>
              </div>
          </div>
          <div class="row">
              <div class="col-5">
                  <ul class="footer-links list-unstyled">
                      <li><a href="mailto:bjorn.harlson@gmail.com">Email</a></li>
                      <li><a href="https://www.linkedin.com/in/bjorn-harlson-287943116/" target="_blank">LinkedIn</a></li>
                      <li><a href="https://github.com/bharlson" target="_blank">Github</a></li>
                  </ul>
              </div>
              <div class="col">
                <ul class="footer-links list-unstyled">
                    <li class="text-right">
                        <a href="#" v-scroll-to="'#top'">Back to Top</a>
                    </li>
                    <li class="text-right" v-if="!home">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="d-none d-md-block text-right">
                        &copy; {{currentYear}} Bjørn Harlson 
                    </li>
                </ul>
              </div>
          </div>
          <div class="row">
              <div class="col">
                  <p class="text-center d-md-none">
                      &copy; {{currentYear}} Bjørn Harlson 
                  </p>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    props:{
        home:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        currentYear(){
            return  new Date().getFullYear().toString();
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.footer-projects-link {
  font-size: 1.75rem;
  @media (min-width:$md) {
    font-size: 2rem;
  }
}
</style>