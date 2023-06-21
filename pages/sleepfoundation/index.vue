<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{pageTitle}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Web Development</p>
                </div>
                <div class="col-md">
                    <p class="text-md-right">
                        <a href="https://sleepfoundation.org" target="_blank">Visit Site</a>
                    </p>
                </div>
            </div>
            <div class="row">
               <div class="col-md-8">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-homepage-full.jpg"
                    name="sleepfoundation-desktop"
                    bgColor="#2f4571"
                    caption="Homepage: Desktop"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-homepage-full-mobile.jpg"
                    name="sleepfoundation-mobile"
                    bgColor="#2f4571"
                    caption="Homepage: Mobile"
                    ></project-img-scrollable>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Of the multiple brands managed by Onecare Media, Sleep Foundation is, as of 2023, the most successful. <a href="https://sleepfoundation.org" target="_blank">Sleepfoundation.org</a> has a mix of educational articles and commercial product reviews/listicles.</p>
                    <p>Built with SEO in mind by some of the best experts in the industry, the site consistently ranks in the top 5 Google results for popular sleep related search queries.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <project-img src="sleepfoundation/google-ranking-example.png" preview="true" />
                </div>
                <div class="col-md-6">
                    <project-img src="sleepfoundation/google-ranking-cpap.png" preview="true" caption="Results as of June 2023" />
                </div>
            </div>
        </section>
        <section id="redesign">
            <div class="row">
                <div class="col">
                    <h2>Redesign</h2>
                    <p>During 2021 and 2022, Onecare Media grew rapidly as an organization and I was tasked along with my partners on the engineering team with revamping the Wordpress themes used across our suite of web properties, starting with Sleep Foundation.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-v1-homepage-full.jpg"
                    name="sleepfoundation-v1"
                    bgColor="#ffffff"
                    caption="Homepage: Original Design Circa 2021"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-md-6">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-interim-homepage-full.jpg"
                    name="sleepfoundation-interim"
                    bgColor="#ffffff"
                    caption="Homepage: Interim Design Circa 2022"
                    >
                    </project-img-scrollable>
               </div>
            </div>

        </section>
        <section id="reflection">
            <div class="row">
                <div class="col">
                    <h2>Reflection</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>
                    </p>
                </div>
            </div>
        </section>
        <section id="credit">
            <div class="row mt-4">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Nathan Motsinger:</b> Visual Design</p>
                    <p><b>Michelle Weaver:</b> Co-Developer</p>
                    <p><b>Blake Stagner:</b> Co-Developer</p>
                    <p><b>Amber Alter:</b> Co-Developer</p>
                    <p><b>Matt Jennings:</b> Co-Developer</p>
                </div>
            </div>
        </section>
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
            windowWidth:0,
            pageTitle:'Sleep Foundation'
        }
    },
    head(){
        return{
            title:'Bjørn Harlson | '+this.pageTitle
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.sleepfoundation{
    &-desktop{
        height:360px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:540px;
        }
        @media (min-width: $xl){
            height:628px;
        }
    }
    &-mobile{
        height:381px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:517px;
        }
        @media (min-width: $xl){
            height:628px;
        }
    }
    &-v1{
        height:324px;
        @media (min-width: $sm){
            height:480px;
        }
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:480px;
        }
        @media (min-width: $xl){
            height:560px;
        }
    }
    &-interim{
        height:360px;
        @media (min-width: '420px'){
            height:425px;
        }
        @media (min-width: $sm){
            height:540px;
        }
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:480px;
        }
        @media (min-width: $xl){
            height:560px;
        }
    }
}
</style>

