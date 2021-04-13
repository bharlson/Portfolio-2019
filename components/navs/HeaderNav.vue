<template>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <nuxt-link class="home-link" to='/'>
                    <logo></logo>
                </nuxt-link>
            </div>
            <div class="col-9">
                <nav class="header-nav">
                    <ul class="header-nav-list">
                        <nuxt-link v-if="!home" to="/#projects" tag="li" class="header-nav-list-item">Projects</nuxt-link>
                        <li v-if="home" class="header-nav-list-item" v-scroll-to="'#projects'">Projects</li>
                        <li class="header-nav-list-item" v-scroll-to="'#contact'">Contact</li>
                        <nuxt-link to="/about" tag= "li" class="header-nav-list-item">About</nuxt-link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header> 
</template>

<script>
import Logo from '@/components/Logo.vue'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
    data(){
        return{
            openMenu:false,
        }
    },
    components:{ 
        Logo,
        HamburgerMenu
    },
    props:{
        home:{
            type:Boolean,
            default: false
        }
    }
}
</script>

<style lang='scss'>
.home-link{
    cursor:url(../../static/img/cursors/house.png), auto;
}
</style>
