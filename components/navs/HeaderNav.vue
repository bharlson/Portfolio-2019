<template>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-2 order-1">
                <logo></logo>
            </div>
            <div class="col-md-8 order-3 order-md-2">
            <transition name="header-nav" mode="out-in">
                <nav class="header-nav" v-if="openMenu">
                    <ul class="header-nav-list">
                        <li class="header-nav-list-item">Projects</li>
                        <li class="header-nav-list-item">About</li>
                        <!-- <li class="header-nav-list-item">Contact</li> -->
                    </ul>
                </nav>
            </transition>
            </div>
            <div class="col-6 col-md-2 order-2 order-md-3">
                <a @click="openMenu = !openMenu">
                    <hamburger-menu :menuOpen="openMenu"></hamburger-menu>
                </a>
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
            openMenu:false
        }
    },
    components:{ 
        Logo,
        HamburgerMenu
    },
    computed:{
        
    }
}
</script>

<style lang='scss'>
    $white: #ffffff;

    .header{
        z-index: 10000;
        position: fixed;
        width:100%;
        display: block;
        background: $white;
        padding-top:1rem;
        &-nav{
            padding: 1rem;
            transition: all 2s;
            transform:scaleY(1);
            &-enter-active, &-leave-active{
                transition:opacity 0.5s, transform 1.25s;
                .header-nav{
                    transition: transform 1s;
                    transform:scaleY(1);
                }
            }
            &-leave-active{
                transition:opacity 0.5s, transform 0.5s;
            }
            &-enter, &-leave-to{
                opacity: 0;
                transform:translateX(33%);
                .header-nav{
                    transform:scaleY(0)
                }
            }

            &-list{
                list-style-type:none;
                padding:0;
                display: block;
                text-align: right;
                @media (min-width: 768px) {
                    text-align: right;
                }
                &-item{
                    display:inline-block;
                    font-size:2rem;
                    padding-right:1rem;
                    &:hover, &:active{
                        opacity:0.75;
                        cursor:pointer;
                    }
                    // @media (min-width: 768px) {
                    //     display: inline-block;
                    // }
                }
            }
        }
    }
</style>
