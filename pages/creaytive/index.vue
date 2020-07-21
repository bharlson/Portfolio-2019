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

