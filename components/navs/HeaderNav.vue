<template>
<header id="top" class="header">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <logo v-if="home"></logo>
                <!-- <p>{{this.openMenu}}</p> -->
                <hover-area v-if="!home" customClass="custom-cursor-home">
                    <nuxt-link class="home-link" to='/'>
                        <logo></logo>
                    </nuxt-link>
                </hover-area>
            </div>
            <div class="col-9">
                <nav class="header-nav">
                    <div class="row">
                        <div class="col">
                            <div @click="openMenu = !openMenu">
                                <hamburger-menu class="d-md-none"></hamburger-menu>
                            </div>
                        </div>
                    </div>
                    <ul class="header-nav-list" :class="isMenuOpen">
                        <nuxt-link v-if="!home" to="/#projects" tag="li" class="header-nav-list-item">Projects</nuxt-link>
                        <li v-if="home" class="header-nav-list-item" v-scroll-to="'#projects'">Projects</li>
                        <nuxt-link to="/about" tag= "li" class="header-nav-list-item">About</nuxt-link>
                        <li class="header-nav-list-item" v-scroll-to="'#contact'">Contact</li>
                        <li class="header-nav-list-item"><a href="/img/BjornHarlson-Resume-0623.pdf">Resumé</a></li>
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
            openMenu:false
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
    },
    computed:{
        isMenuOpen(){
            if(this.openMenu){
                return 'd-block'
            }
            else{
                return 'd-none d-md-block'
            }
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
