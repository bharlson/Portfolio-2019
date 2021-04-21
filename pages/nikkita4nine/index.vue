<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col-md-9 col-lg-7 col-xl-5"><h1>{{pageTitle}}</h1></div>

            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Web Development, Design</p>
                </div>
                <div class="col-md">                    
                    <p class="text-md-right">
                        <a href="https://www.nikkita4nine.com" target="_blank">Visit Site</a>
                    </p> 
                </div>
            </div>
            <div class="row">
               <div class="col-md-8">
                    <project-img-scrollable 
                    src="nikkita4nine/nikkita4nine-desktop-home-full.jpg"
                    name="nikkita4nine-desktop"
                    caption="Homepage: Desktop"
                    bgColor="#f0f0f0"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="/nikkita4nine/nikkita4nine-mobile-home-full.jpg"
                    name="nikkita4nine-mobile"
                    caption="Homepage: Mobile"
                    bgColor="#f0f0f0"
                    ></project-img-scrollable>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>In early 2021, an old coworker from <nuxt-link to="/scott2019">the Shaun Scott campaign</nuxt-link> texted me about doing another website for a new candidate. I said yes on a whim as I was due for a new freelance project. I was excited to find out the "new candidate" was actually a local hero of mine: activist, lawyer, poet and former mayoral candidate Nikkita K.O. Oliver.</p>
                    <p>I pulled two late night coding sessions to get the initial site live in time for   the site as a static nuxt.js project the same way as I had with Shaun Scott's site.</p>
                </div>
            </div>
        </section>
        <section id="storyblok">
            <div class="row">
                <div class="col">
                    <h2>Implementing Storyblok</h2>
                    <p>After the launch, we brought on my friend Tariku Allen as a co-developer. Tariku made the wise suggestion that rather than keeping the site static we should implement a headless CMS so the campaign staff wouldn't have to come through us for every minor change.</p>
                    <p>We opted for <a href="https://storyblok.com" target="_blank">storyblok</a>, a headless CMS that works well with the nuxt.js and began the process of rebuilding to allow editing in the storyblok interface.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <project-img-scrollable name="raw-code" src="/nikkita4nine/ourpolicies-raw-code.png" caption="Homepage: Policies section hardcoded"/>
                    <p>This works...</p>
                </div>
                <div class="col-lg-7 mt-4 mt-md-0">
                    <project-img preview="true" src="/nikkita4nine/ourpolicies-storyblok.jpg" caption="Homepage: Policies section in storyblok"/>
                    <p>But this is much easier to understand for a lay person.</p>
                </div>
            </div>
        </section>
        <section id="credit">
            <div class="row mt-4">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Tariku Allen:</b> Web Development</p>
                    <p><b>Mariahlyn Okuna:</b> Design</p>
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
            pageTitle:'Nikkita 4 Nine'
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
.nikkita4nine{
    &-desktop{
        height:360px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:500px;
        }
        @media (min-width: $xl){
            height:627px;
        }
    }
    &-mobile{
        height:500px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:500px;
        }
        @media (min-width: $xl){
            height:627px;
        }
    }
}
.raw-code{
    height:402px;
    // @media (min-width: $md){
    //     height:480px;
    // }
    // @media (min-width: $lg){
    //     height:500px;
    // }
    // @media (min-width: $xl){
    //     // height:627px;
    // }  
}
</style>

