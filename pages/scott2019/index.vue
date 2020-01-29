<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{title}}</h1>
                    <p><b>Role:&nbsp;</b>{{role}}</p>
                    <p v-html="intro"></p>
                </div>
            </div>
        </section>
        <section id="final-site">
            <div class="row">
                <div class="col">
                    <p v-html="images[1].text"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <project-img-scrollable
                    :src="images[1].figure_img"
                    :caption="images[1].figure_caption"
                    name="scott2019-homepage-desktop"
                    ></project-img-scrollable>
                </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable
                    :src="images[2].figure_img"
                    :caption="images[2].figure_caption"
                    name="scott2019-homepage-mobile"
                    ></project-img-scrollable>
                </div>
            </div>
        </section>
        <section id="ui">
            <div class="row">
                <div class="col">
                    <h2>Interactive Features</h2>
                    <p></p>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-3 col-lg-2">
                    <project-img :src="images[3].figure_img"></project-img>
                </div>
                <div class="col-6 col-md-3 col-lg-2 offset-md-1">
                    <project-img :src="images[4].figure_img"></project-img>
                </div>
                <div class="col-6 col-md-3 col-lg-2 offset-md-1">
                    <project-img :src="images[5].figure_img"></project-img>
                </div>
                <div class="col-6 col-md-3 col-lg-2 offset-md-1">
                    <project-img :src="images[6].figure_img"></project-img>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2>Components</h2>
                    <p>Building off the visual language of the initial wireframes, I ended up repurposing key components such as cards, buttons  as new features were added to the site.</p>
                </div>
            </div>
             <div class="row">
                <div class="col-6 col-md-4">
                    <project-img :src="images[7].figure_img" :caption="images[7].figure_caption"></project-img>
                </div>
                <div class="col-6 col-md-4">
                    <project-img :src="images[8].figure_img" :caption="images[8].figure_caption"></project-img>
                </div>
                <div class="col-6 col-md-4">
                    <project-img :src="images[8].figure_img" :caption="images[8].figure_caption"></project-img>
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <h2>Explainers</h2>
                    <p>Voter engagement is critical in any electoral campaign, and running in a district dominated by students many of whom are first time voters, or do not know how to register it was important to not only introduce website users to the candidate, but how to vote for him.</p>
                </div>
            </div>
             <div class="row">
                <!-- <div class="col-12">
                    <project-img :src="images[9].figure_img" :caption="images[9].figure_caption"></project-img>
                </div> -->
                <div class="col-12">
                    <project-img :src="images[10].figure_img" :caption="images[10].figure_caption"></project-img>
                </div>
                <div class="col-12">
                    <project-img :src="images[12].figure_img" :caption="images[12].figure_caption"></project-img>
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
            template:'project'
        }
    },
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/scott2019',{
            // version: context.isDev ? 'draft':'published', 
            version: 'draft' 
        }).then(res=>{
            // console.log(res.data.story.content);
            return {
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
    },

}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.scott2019{
    &-homepage{
        &-desktop{
            height:290px;
            @media (min-width: $sm){
                height:310px;
            }
            @media (min-width: $md){
                height:296px;
            }
            @media (min-width: $lg){
                height:418px;
            }
            @media (min-width: $xl){
                height:480px;
            }
        }
        &-mobile{
            height:600px;
            @media (min-width: $sm){
                height:310px;
            }
            @media (min-width: $md){
                height:296px;
            }
            @media (min-width: $lg){
                height:418px;
            }
            @media (min-width: $xl){
                height:480px;
            }
        }
    }

}
</style>

