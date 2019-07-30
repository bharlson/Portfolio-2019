<template>
<header>
    <div class="container">
        <div class="row">
            <div class="col-6 col-lg-4">
                <logo></logo>
            </div>
            <div class="col-lg-8">
                <hamburger-menu></hamburger-menu>
            </div>
        </div>
    </div>
</header> 
</template>

<script>
import Logo from '@/components/Logo.vue'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
    components:{ 
        Logo,
        HamburgerMenu
    }
}
</script>

<style lang='scss'>

</style>
