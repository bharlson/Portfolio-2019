<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3">
                    <h1>Scott 2019</h1>
                </div>
                <div class="col-md">                    
                    <p class="pt-md-3">
                        <a href="http://scott2019.bjornharlson.com" target="_blank">Visit Site</a>
                    </p> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Web Development, Design</p>
                    <p>Over the course of 2019, I built and managed the website for Shaun Scott's campaign for Seattle City Council.</p>
                    <p>Around the same time I started working on the campaign site, I was learning vue.js for my work at Scotsman Guide. I took it as an opportunity to reinforce what I was learning, and built out the site using nuxt.js, a vue powered static site generator.</p>
                </div>
            </div>
        </section>
        <section id="final-site">
            <div class="row">
                <div class="col">
                    <!-- <p v-html="images[1].text"></p> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <project-img-scrollable
                    src="scott2019/scott2019-final-homepage-full.jpg"
                    caption="Homepage: Desktop"
                    name="scott2019-homepage-desktop"
                    ></project-img-scrollable>
                </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable
                    src="scott2019/scott2019-final-homepage-mobile-full.jpg"
                    caption="Homepage: Mobile"
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
                <div class="col-6 col-lg-2">
                    <project-img src="scott2019/democracy-voucher-hand.gif"></project-img>
                </div>
                <div class="col-6 col-lg-2">
                    <project-img src="scott2019/ballot-hand.gif"></project-img>
                </div>
                <div class="col-6 col-lg-3">
                    <project-img src="scott2019/meet-shaun.gif"></project-img>
                </div>
                <div class="col-6 col-lg-5">
                    <project-img src="scott2019/scott2019-form-demo.gif"></project-img>
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
                    <project-img src="scott2019/scott2019-press-card.jpg" caption="Press Card"></project-img>
                </div>
                <div class="col-6 col-md-4">
                    <project-img src="scott2019/scott2019-blog-card.jpg" caption="Blog Card"></project-img>
                </div>
                <div class="col-6 col-md-4">
                    <project-img src="scott2019/scott2019-endorsement-cards.jpg" caption="Endorsement Cards"></project-img>
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
                    <project-img src="scott2019/scott2019-homepage-explainer.jpg" caption="Homepage Explainer"></project-img>
                </div>
                <div class="col-12">
                    <project-img src="scott2019/scott2019-register-to-vote-explainer.jpg" caption="Voter Registration Explainer"></project-img>
                </div>
            </div>
        </section>
        <section id="conclusion">
            <div class="row">
                <div class="col">
                    <project-img src="scott2019/huddle.jpg"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2>Reflection</h2>
                    <p>This project was a major milestone for my career. Doing in house work at
                        <nuxt-link to="/scotsman-guide">Scotsman Guide</nuxt-link>, I'm well accustomed to filling a specialized role on a team with the comfort I can defer to others if I need support. On this project, I was solely responsible for building and maintaining a high profile website. The challenge was at once daunting and thrilling.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <p>Not only did I have to build the site, but I was de facto tech support for anything web related. I stayed up till 5 am the night before the campaign's launch helping the campaign manager through the process of purchasing a web hosting plan and routing the domain.</p>
                    <p>The next <s>morning</s> afternoon, I got to see the site I built linked all over the local news. As the campaign season got going, I saw more and more yard signs with the site popping up all over my neighborhood. It was an honor to work on a project I felt so much personal passion for, and I learned a lot about myself and web development in the process.</p>
                </div>
                <div class="offset-md-2 offset-lg-0 col-lg-4">
                    <project-img src="scott2019/yard-sign.jpeg" caption="Photo Credit: CJ Priebe"></project-img>  
                </div>
            </div>
        </section>
        <section id="credit">
            <div class="row">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Eva Wood:</b> Visual Design, Wireframes, Branding</p>
                    <p><b>Myra Lara:</b> Illustration, Logo, Print Design</p>
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
    }
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

