<template>
    
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
            // version: context.isDev ? 'draft':'published', 
            version:'draft', 
        }).then(res=>{
            return {
                blok: res.data.story.content,
                title: res.data.story.content.title,
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
    },
    beforeMount(){
        this.windowWidth = window.innerWidth;
        // window.onresize = ()=>{
        //     this.windowWidth = window.innerWidth;
        // }
    }
}
</script>

<style>

</style>
