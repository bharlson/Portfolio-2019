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
                    <p>In early 2021, an old coworker from the Shaun Scott campaign texted me about doing another website for a new candidate. I said yes on a whim as I was due for a new freelance project. I was excited to find out the "new candidate" was actually a local hero of mine: activist, lawyer, poet and former mayoral candidate Nikkita K.O. Oliver.</p>
                    <p>
                        With the time crunch before the campaign launch, I started the site as a static nuxt.js project the same way as I had with Shaun Scott's site. With the help of my friend and co-developer Tariku Allen
                    </p>
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
</style>

