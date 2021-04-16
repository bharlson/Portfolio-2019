<template>
<header id="top" class="header">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <hover-area customClass="custom-cursor-home">
                    <nuxt-link class="home-link" to='/'>
                        <logo></logo>
                    </nuxt-link>
                </hover-area>
            </div>
            <div class="col-9">
                <nav class="header-nav">
                    <ul class="header-nav-list">
                        <nuxt-link v-if="!home" to="/#projects" tag="li" class="header-nav-list-item">Projects</nuxt-link>
                        <li v-if="home" class="header-nav-list-item" v-scroll-to="'#projects'">Projects</li>
                        <nuxt-link to="/about" tag= "li" class="header-nav-list-item">About</nuxt-link>
                        <li class="header-nav-list-item" v-scroll-to="'#contact'">Contact</li>
                        <li class="header-nav-list-item"><a href="/img/BjornHarlson-Resume-0421.pdf">Resumé</a></li>
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
import HoverArea from '@/components/HoverArea.vue'

export default {
    data(){
        return{
            openMenu:false,
        }
    },
    components:{ 
        Logo,
        HamburgerMenu,
        HoverArea
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
.header{
    overflow-x:hidden;
}
.home-link{
    // cursor:url(../../static/img/cursors/house.png), auto;
}
</style>
