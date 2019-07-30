<template>
    <div class="hamburger-menu">
        <div class="hamburger-menu-line hamburger-menu-line-1"></div>
        <div class="hamburger-menu-line hamburger-menu-line-2"></div>
        <div class="hamburger-menu-line hamburger-menu-line-3"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .hamburger-menu{
        position: relative;
        &-line{
            width:100px;
            height:0.5rem;
            background-color: #000;
            margin-bottom:1rem;
            transition: all 0.5s ease;
        }
        &:hover{
            .hamburger-menu-line{
                &-1{
                   transform: rotate(33deg) translateY(2rem); 
                }
                &-2{
                   transform: rotate(-33deg) translateY(1rem); 
                }
                &-3{
                    opacity:0;
                }
            }
        }
    }
</style>

