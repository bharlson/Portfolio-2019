<template>
    <div class="container" v-editable="blok">
        <section id="intro">
                <div class="row">
                    <div class="col">
                        <h1>{{title}}</h1>
                        <p>{{intro}}</p>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
export default {
    layout:'project',
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/creaytive',{
            // version: process.env.NODE_ENV =='producttion' ? 'published' : 'draft',
            version: context.isDev ? 'draft':'published', 
        }).then(res=>{
            console.log(res.data.story.content);
            return {
                blok: res.data.story.content,
                title: res.data.story.content.title,
                intro: res.data.story.content.intro
            };
        })
    },
    mounted(){
        this.$storybridge.on('change', ()=>{
            location.reload(true);
        });
    }
}
</script>

<style style='scss' scoped>
@import url(../../assets/scss/_variables.scss);

</style>

