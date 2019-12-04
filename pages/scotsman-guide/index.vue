<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{projectName}}</h1>
                <p>
                    <a href="http://scotsmanguide.com" target="_blank">Visit Site</a> <a href="">View Code</a>
                </p> 
                <!-- <img src='@/assets/img/scott2019/scott2019-desktop-animated.gif' alt=""> -->
                <project-img src='@/assets/img/sgm/scotsmanguide-desktop-static.jpg' caption='test'></project-img>
            </div>
        </div>
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
            projectName:'Scotsman Guide'
        }
    }
}
</script>

<style style='scss' scoped>
@import url(../../assets/scss/_variables.scss);

</style>

