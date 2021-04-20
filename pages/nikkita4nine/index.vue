<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>Nikkita 4 Nine</h1>
                    <p><b>Role:&nbsp;</b>Web Development</p>
                    <p>
                        In early 2021, I got a call from one of my former contacts on the <nuxt-link to="scott2019">Shaun Scott campaign</nuxt-link> about another candidate in need of website, none other than poet, activist and former Seattle mayoral candidate Nikkita K.O. Oliver. I immediately accepted.
                    </p>
                </div>
            </div>
            <div class="row">
               <div class="col-md-8">
                    <project-img-scrollable 
                    src="creaytive/creaytivehomepagetablet.png"
                    name="nikkita4nine-desktop"
                    bgColor="#4E83D3"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="creaytive/creaytivehomepagemobile.png"
                    name="nikkita4nine-mobile"
                    bgColor="#4E83D3"
                    ></project-img-scrollable>
                </div>
            </div>
            <div class="row">
                <div class="col">
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
            windowWidth:0
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.nikkita4nine{
    &-desktop{
        height:420px;
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
        height:530px;
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

