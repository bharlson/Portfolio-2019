<template>
    <div class="container" v-editable="blok">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{title}}</h1>
                    <p><b>Role:&nbsp;</b>{{role}}</p>
                    <p v-html='intro'></p>
                </div>
            </div>
        </section>
        <section id="images">
            <div class="row">
                <div class="col-lg-8">
                    <project-img-scrollable 
                    :src='images[1].figure_img' 
                    :caption='images[1].figure_caption'
                    name='creaytive-desktop'
                    ></project-img-scrollable>
                </div>
                <div class="col-md-6 col-lg-4">
                    <project-img-scrollable 
                    :src='images[2].figure_img' 
                    :caption='images[2].figure_caption'
                    name='creaytive-mobile'
                    ></project-img-scrollable>
                </div>
                <div class="col-md-6">
                    <p v-html="body"></p>
                </div>
                <div class="col-md-6">
                    <project-img 
                    :src='images[3].figure_img'
                    :caption='images[3].figure_caption'
                    ></project-img>
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
    },
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/creaytive',{
            version: context.isDev ? 'draft': 'published', 
        }).then(res=>{
            console.log(res.data.story.content);
            return {
                blok: res.data.story.content,
                title: res.data.story.content.title,
                role: res.data.story.content.role,
                intro: res.data.story.content.intro,
                body: res.data.story.content.body,
                images: res.data.story.content.images
            };
        })
    },
    mounted(){
        this.$storybridge.on('change', ()=>{
            location.reload(true);
        });
        window.onresize = ()=>{
            this.windowWidth = window.innerWidth;
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

