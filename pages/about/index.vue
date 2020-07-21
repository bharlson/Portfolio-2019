<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>About Me</h1>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import ProjectImg from '@/components/ProjectImg.vue'
export default {
    layout:'project',
    components:{
        ProjectImg
    },
    data(){
        return{
            windowWidth:0
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
</style>

