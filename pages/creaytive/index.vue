<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>Creaytive</h1>
                    <p><b>Role:&nbsp;</b>Web Development</p>
                    <p>Over the summer of 2016 I worked as the sole web development intern for the startup marketing firm Creaytive Inc. My first project working there was to rebuild the company's website. Initially the company site was built in wordpress using a series of plugins that gave the site an excessively long load time and inconsistent design scheme. Working off design comps created by the owner, Alex Korobov, I was tasked with rebuilding the site manually without using a CMS.</p>
                </div>
            </div>
            <div class="row">
               <div class="col-md-8">
                    <project-img-scrollable 
                    src="creaytive/creaytivehomepagetablet.png"
                    name="creaytive-desktop"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="creaytive/creaytivehomepagemobile.png"
                    name="creaytive-mobile"
                    ></project-img-scrollable>
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
                        As my first ever professional web project, I got a good primer on everything that can go right and wrong when building a new site. It was a very small team project and I often had to think on my feet or turn to google if I ran into issues. Having that much responsibility with only one web development class under my belt was nerve-wracking at times, but also immensely rewarding. I’m grateful for the opportunity it gave me to take what I’d learned at school and apply it in the real world for the first time, and I grew a lot over the course of that Summer
                    </p>
                </div>
            </div>
        </section>
        <section id="credit">
            <div class="row mt-4">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Alex Korobov:</b> Visual Design, Project Direction</p>
                    <p><b>Alex Kuksenko:</b> Project Direction</p>
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
            windowWidth:0
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.creaytive{
    &-desktop{
        height:220px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:418px;
        }
        @media (min-width: $xl){
            height:500px;
        }
    }
    &-mobile{
        height:530px;
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:418px;
        }
        @media (min-width: $xl){
            height:500px;
        }
    }
}
</style>

