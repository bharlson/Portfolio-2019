<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col-md-9 col-lg-7 col-xl-6"><h1>{{projectName}}</h1></div>
                <div class="col-md">                    
                    <p class="pt-md-3">
                        <a href="http://www.scotsmanguide.com" target="_blank">Visit Site</a>
                    </p> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Design, Web Development</p>
                    <p>Scotsman Guide is a monthly publication serving professionals in the mortgage lending industry. Established in 1985, the print edition has a longstanding reputation as a quality media outlet among mortgage lenders and loan originators.</p>
                    <p>Between 2017 and 2019, I worked with the design and development teams at Scotsman Guide to build a more modern site.</p>
                </div>
            </div>
        </section>
        <div class="row">
            <div class="col-md-8">
                <project-img-scrollable 
                src="sgm/scotsmanguide-homepage-full.jpg"
                name="sgm-homepage-desktop"
                caption="Homepage: Desktop"
                ></project-img-scrollable>
            </div>
            <div class="col-10 offset-1 offset-md-0 col-md-4">
                <project-img-scrollable 
                src="sgm/scotsmanguide-homepage-mobile-full.jpg"
                name="sgm-homepage-mobile"
                caption="Homepage: Mobile"
                ></project-img-scrollable>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectImg from '@/components/ProjectImg.vue'
import ProjectImgScrollable from '@/components/ProjectImgScrollable.vue'
export default {
    layout:'project',
    components:{
        ProjectImg,
        ProjectImgScrollable
    },
    data(){
        return{
            projectName:'Scotsman Guide Website'
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.sgm-homepage{
    &-desktop{
        height:290px;
        @media (min-width: $sm){
            height:310px;
        }
        @media (min-width: $md){
            height:296px;
        }
        @media (min-width: $lg){
            height:418px;
        }
        @media (min-width: $xl){
            height:480px;
        }
    }
    &-mobile{
        height:600px;
        @media (min-width: $sm){
            height:310px;
        }
        @media (min-width: $md){
            height:296px;
        }
        @media (min-width: $lg){
            height:418px;
        }
        @media (min-width: $xl){
            height:480px;
        }
    }
}
</style>

