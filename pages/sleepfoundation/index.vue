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
                    <p>OneCare Media is a digital media company which manages multiple brands and web properties in the sleep and wellness vertical. The most successful of these as of 2023 is Sleep Foundation. </p>
                    <p>Sleepfoundation.org has a mix of educational content and commercial product reviews/listicles and consistently ranks in the top 5 of popular sleep related search queries.</p>
                    <p>Working on the redesign of sleepfoundation.org I got a crash course on modern Wordpress development, SEO and the wide range of factors that help a high traffic site perform so well. </p>
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
                    <p><b>Nathan Moslinger:</b> Visual Design</p>
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
}
</style>

