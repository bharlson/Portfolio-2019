<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{pageTitle}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Web Development</p>
                </div>
                <div class="col-md">
                    <p class="text-md-right">
                        <a href="https://sleepfoundation.org" target="_blank">Visit Site</a>
                    </p>
                </div>
            </div>
            <div class="row">
               <div class="col-md-8">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-homepage-full.jpg"
                    name="sleepfoundation-desktop"
                    bgColor="#2f4571"
                    caption="Homepage: Desktop"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-homepage-full-mobile.jpg"
                    name="sleepfoundation-mobile"
                    bgColor="#2f4571"
                    caption="Homepage: Mobile"
                    ></project-img-scrollable>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Of the multiple brands managed by Onecare Media, Sleep Foundation is, as of 2023, the most successful. <a href="https://sleepfoundation.org" target="_blank">Sleepfoundation.org</a> has a mix of educational articles and commercial product reviews/listicles.</p>
                    <p>Built with SEO in mind by some of the best experts in the industry, the site consistently ranks in the top 5 Google results for popular sleep related search queries.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <project-img src="sleepfoundation/google-ranking-example.png" preview="true" />
                </div>
                <div class="col-md-6">
                    <project-img src="sleepfoundation/google-ranking-cpap.png" preview="true" caption="Results as of June 2023" />
                </div>
            </div>
        </section>
        <section id="redesign">
            <div class="row mt-4">
                <div class="col">
                    <h2>Redesign</h2>
                    <p>During 2021 and 2022, Onecare Media grew rapidly as an organization, and added multiple new brands to our portfolio. With this growth, it was necessary to set consistent standards for the design and structure of our websites and online presence.</p>
                    <p>As a member of the engineering team, I was first tasked with working on the redesign of the wordpress theme used on our #1 site: Sleepfoundation.org.</p>
                    <p>On the design side, we were making a radical shift towards a darker color scheme, so an interim theme was developed as a midway point.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-v1-homepage-full.jpg"
                    name="sleepfoundation-v1"
                    bgColor="#ffffff"
                    caption="Homepage: Original Design Circa 2021"
                    >
                    </project-img-scrollable>
               </div>
                <div class="col-md-6">
                    <project-img-scrollable 
                    src="sleepfoundation/sleepfoundation-interim-homepage-full.jpg"
                    name="sleepfoundation-interim"
                    bgColor="#ffffff"
                    caption="Homepage: Interim Design Circa 2022"
                    >
                    </project-img-scrollable>
               </div>
            </div>
        </section>
        <section id="tech-stack">
            <div class="row mt-4">
                <div class="col">
                    <h2>Tech Stack</h2>
                    <p>We started with the structural changes first, implementing a new tech stack optimized for clean code, a modular component structure and logical, replicable CSS standards building off Bootstrap.</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <h3>Gutenberg Blocks</h3>
                    <p>In 2018 Wordpress added Gutenberg Blocks which allow for the creation of reusable modular UI components, in a way that JAMstack libraries like React, Angular and Vue operate. </p>
                    <p>With the rest of our tech stack we created a library of blocks that could be used by our content editors to intuitively structure the site using the WYSIWYG editor without having to write a line of code.</p>
                    <p>(Example images from <a href="https://www.advancedcustomfields.com/blog/acf-5-8-introducing-acf-blocks-for-gutenberg/" target="_blank">The Advanced Custom Fields Blog</a>)</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <project-img src="sleepfoundation/gutenberg-blocks.png" preview="true" caption="Selecting a block in the WYSIWYG Editor" />
                </div>
                <div class="col-md-6">
                    <project-img src="sleepfoundation/acf-fields-editor-example.jpg" preview="true" caption="Editing a block" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <h3>Advanced Custom Fields</h3>
                    <p>A popular wordpress plugin for creating new content fields outside those included in the WP core. We used ACF to scaffold the backend content fields needed by our editors and writers to keep the site up to date in the Gutenberg WYSIWYG editor.</p>
                    <project-img src="sleepfoundation/acf-blocks-field-group.png" preview="true" caption="" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-7">
                    <h3>Twig by Symphony</h3>
                    <p>A templating engine for PHP allowing for semantic code and easily extendable templates. We use twig extensively for markup and logic across the theme. </p>
                    <p>Loops and conditionals are expressed by wrapping markup in {% for %} and {% if %} tags respectively, and dynamic values (in this case coming from ACF fields) are passed via double curly braces, as shown in the example image.</p>
                </div>
                <div class="col">
                    <project-img src="sleepfoundation/twig-example.png" caption="Example of Twig markup" />
                </div>
            </div>

        </section>
        <section id="contributions">
            <div class="row mt-4">
                <div class="col">
                    <h2>My contributions</h2>
                </div>
            </div>

            <!-- <div class="row">
                <div class="col">
                    <h3>Homepage</h3>
                </div>
            </div> -->
            <div class="row">
                <div class="col">
                    <project-img src="sleepfoundation/desktop-nav.jpg" caption="Main Navigation: Desktop" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <project-img src="sleepfoundation/mobile-nav.jpg" caption="Main Navigation: Mobile" />
                </div>
                <div class="col">
                    <project-img src="sleepfoundation/homepage-banner.png" caption="Homepage Banner Block" />
                </div>
            </div>
            <!-- <div class="row">
                <div class="col">
                    <project-img src="sleepfoundation/homepage-banner.png" caption="Homepage Banner Block" />
                </div>
            </div> -->
            <div class="row">
                <div class="col-md-8">
                    <project-img src="sleepfoundation/sleep-habits-banner.jpg" caption="Sleep Habits Banner Block, used on the homepage" />
                </div>
                <div class="col">
                    <project-img src="sleepfoundation/author-block.png" caption="Author Block, used on <a href='https://www.sleepfoundation.org/about-us/who-we-are' target='_blank'>'Who We Are'</a> " />
                </div>
            </div>



        </section>
        <section id="credit">
            <div class="row mt-4">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Nathan Motsinger:</b> Visual Design</p>
                    <p><b>Michelle Weaver:</b> Co-Developer</p>
                    <p><b>Blake Stagner:</b> Co-Developer</p>
                    <p><b>Amber Alter:</b> Co-Developer</p>
                    <p><b>Matt Jennings:</b> Co-Developer</p>
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
            pageTitle:'Sleep Foundation'
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
.sleepfoundation{
    &-desktop{
        height:360px;
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
        height:381px;
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
    &-v1{
        height:324px;
        @media (min-width: $sm){
            height:480px;
        }
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:480px;
        }
        @media (min-width: $xl){
            height:560px;
        }
    }
    &-interim{
        height:360px;
        @media (min-width: '420px'){
            height:425px;
        }
        @media (min-width: $sm){
            height:540px;
        }
        @media (min-width: $md){
            height:480px;
        }
        @media (min-width: $lg){
            height:480px;
        }
        @media (min-width: $xl){
            height:560px;
        }
    }
}
</style>

