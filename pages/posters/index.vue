<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Posters</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <project-img src="/posters/showposter-karatechurch.jpg" caption="Dogs, Kids, Mouthful of Snow, Sense A at The Karate Church - 2015"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectImg from '@/components/ProjectImg.vue'
import ProjectImgScrollable from '@/components/ProjectImgScrollable.vue'
export default {
    layout:'page',
    components:{
        ProjectImg,
        ProjectImgScrollable
    },
    data(){
        return{
            windowWidth:0
        }
    },
}
</script>

<style>

</style>
