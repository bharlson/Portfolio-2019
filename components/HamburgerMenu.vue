<template>
    <div @click="menuOpen = !menuOpen" class="hamburger-menu" :class="{ 'hamburger-menu-open' : menuOpen === true}">
        <div class="hamburger-menu-line hamburger-menu-line-1"></div>
        <div class="hamburger-menu-line hamburger-menu-line-2"></div>
        <div class="hamburger-menu-line hamburger-menu-line-3"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        menuOpen: {
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang='scss' scoped>
    .hamburger-menu{
        margin-top: 0.75rem;
        float:right;
        position: relative;
        transition: transform 0.5s ease;
        transform:scale(0.6);
        &:hover,&:active{
            cursor:pointer;
            opacity:0.7;
        }
        &-line{
            width:4rem;
            height:6px;
            background-color: #000;
            margin-bottom:1rem;
            transition: all 0.5s ease;
        }
        &-open{
            transform:translateX(1rem);
            .hamburger-menu-line{
                &-1{
                   transform: rotate(45deg) translateY(1.9rem) scale(0.7);
                   transform-origin:center; 
                }
                &-2{
                    opacity:0;
                }
                &-3{
                    transform: rotate(-45deg) translateY(-1.9rem) scale(0.7);
                    transform-origin:center;
                }
            }
            &:hover{
                &-1{
                    transform: none!important;
                }
                &-2{
                    transform: none!important;
                    transition-delay: 0.5s;
                }
                &-3{
                    transform: none!important;
                    transition-delay: 0.5s;
                }
            }
        }
    }
</style>

