<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col-md-9 col-lg-7 col-xl-5"><h1>{{projectName}}</h1></div>
                <div class="col-md">                    
                    <p class="pt-md-3">
                        <a href="http://www.scotsmanguide.com" target="_blank">Visit Site</a>
                    </p> 
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Role:&nbsp;</b>Design, Web Development, Audio Engineering</p>
                    <p>
                        Scotsman Guide was established in 1985 as a monthly publication serving professionals in the mortgage lending industry. The print edition has a longstanding reputation among industry professionals, and increasingly the website has become a popular source for industry data, job listings and lead generation.
                    </p>
                </div>
            </div>
        </section>
        <section id="website-redesign">
            <div class="row">
                <div class="col">
                    <h2>Website Redesign</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <project-img-scrollable
                    src="sgm/scotsmanguide-homepage-full.jpg"
                    name="sgm-homepage-desktop"
                    caption="Homepage: Desktop"
                    ></project-img-scrollable>
                </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable
                    src="sgm/scotsmanguide-homepage-mobile-full.jpg"
                    name="sgm-homepage-mobile"
                    caption="Homepage: Mobile"
                    ></project-img-scrollable>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <p>
                        When I was first hired, the company was at a crossroads. The brand has always had strong industry support, but was largely stuck in the past. With print journalism in decline and a website that, as late as 2017, was not mobile friendly, it was time for a major change.
                    </p>
                    <p>
                        Since then I've seen the company flourish. Diversifying its business model beyond the core product of the magazine, and embracing
                        <a href="https://www.scotsmanguide.com/pages/company/about-us" target="_blank">a variety of digital revenue streams</a>. The new website marked the beginning of a renaissance in the business as a whole.
                    </p>
                </div>
                <div class="col-lg-6 pt-lg-4">
                    <project-img src="sgm/old-sgm-site.jpg" caption="Homepage: Old Website"></project-img>
                </div>
            </div>
        </section>
        <section id="feature-articles">
            <div class="row">
                <div class="col">
                    <h2>Feature Articles</h2>
                    <p>Inspired by digital publications like Wired magazine, we revamped our article builder to allow for custom colors and css to give feature articles some extra visual flair to match the illustration.</p>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-7">
                    <project-img-scrollable
                    src="sgm/jackson-feature-full.jpg"
                    name="sgm-jackson-feature"
                    caption="Feature Article, Illustration: Chuck Howard"
                    ></project-img-scrollable>
                </div>                
                <div class="col-md-5">
                    <project-img src="sgm/jackson-feature-style.jpg"
                    ></project-img>
                    <p>Using CSS variables, Individual colors in the article editor can be set directly by entering a hex code. I was especially inspired by the color scheme in this illustration.</p>
                </div>
            </div>
        </section><!--/feature articles-->
        <section id="img-production">
            <div class="row">
                <div class="col">
                    <h2>Image Production</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>As search engines increasingly prioritize content with images, I've gotten the chance to do more image production to augment the company's web content. As a lifelong geography nerd, two of my favorite sections to work on are 
                        <a href="https://www.scotsmanguide.com/browse/content/residential-spotlight-pacific-region" target="_blank">Spotlight</a> and 
                        <a href="https://www.scotsmanguide.com/browse/content/international-investments-germany" target="_blank">International Investments</a>, which focus on industry news in a different US region or foreign country respectively.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <project-img 
                    alt="res-spotlight-pacific-region"
                    src="sgm/pacific-northwest-spotlight.jpeg" 
                    caption="Residential Spotlight: Pacific Region"
                    preview="true"
                    ></project-img>
                </div>
                <div class="col-lg-6">
                    <project-img src="sgm/germany-intl-investments.jpeg" 
                    alt="intl-investments-germany" 
                    caption="International Investments: Germany"
                    preview="true"
                    ></project-img>
                </div>
            </div>
        </section>
        <section id="audio">
            <div class="row">
                <div class="col">
                    <h2>Audio Engineering</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <p>In my free time, music production is one of my main creative outlets, and I'm always excited to get to use that skill set at work. Recently I've been tasked with cleaning up the source audio on interview videos uploaded to the company Youtube channel. </p>
                    <p>Understandably most mortgage industry professionals don't have access to studio quality recording equipment at home, but with over a decade of experience producing music and a minor in audio technology, I enjoy the challenge of getting the most out of any source material.</p>
                </div>
                <div class="col-lg-6 ">
                    <iframe class="border-black mt-lg-5" width="100%" height="300" src="https://www.youtube.com/embed/KXo5Fklaovw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <section id="credit">
            <div class="row mt-4">
                <div class="col">
                    <h2>Credit</h2>
                    <p><b>Jeffrey Sabourin:</b> (Chief product officer) Design, Web Development, Team Management, Leader of design/production team 2019-present</p>
                    <p><b>Mark Roach:</b> (Software Engineering Manager), Leader of development team</p>
                    <p><b>Elliot Sweet:</b> (Fmr. Lead UX Designer, 2018) Design</p>
                    <p><b>Akvinder Kaur:</b>(Fmr. Lead UX Designer, 2018-2019) Design</p>
                    <p><b>Nick Brosas:</b> (Lead UX Designer 2020-present) Design</p>
                    <p><b>Chuck Howard:</b> Illustrator for Feature Article pictured above</p>
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
            projectName:'Scotsman Guide'
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.sgm-homepage{
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
.sgm-jackson-feature{
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
</style>

