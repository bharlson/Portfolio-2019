<template>
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <nuxt-link to='/'>
                    <logo></logo>
                </nuxt-link>
            </div>
            <div class="col-9">
                <nav class="header-nav">
                    <ul class="header-nav-list">
                        <li class="header-nav-list-item">Projects</li>
                        <li class="header-nav-list-item">About</li>
                        <!-- <li class="header-nav-list-item">Contact</li> -->
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
        // position: fixed;
        width:100%;
        display: block;
        background-color:$white;
        padding-top:1rem;

        &-nav{
            padding: 0 1rem 1rem 1rem;
            @media (min-width: 768px) {
                padding:1rem;
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
                    display:inline;
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
