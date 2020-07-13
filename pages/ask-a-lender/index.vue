<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{projectName}}</h1>
                    <p><b>Role:&nbsp;</b>Design, Web Development</p>
                    <p>Ask a Lender was launched in 2017 as a sister company to Scotsman Guide. Built off the longstanding connections Scotsman Guide has in the mortgage lending industry, Ask a Lender was conceived as a consumer-facing site for connecting borrowers with lenders in a free and transparent way.</p>
                    <p>As of 2018, the company is defunct, but features originally implemented in Ask a Lender have been adapted to the newly revamped Scotsman Guide website</p>
                </div>
            </div>
            <div class="row">
               <div class="col">
                    <project-img src="aal/aal-homepage-desktop-static.jpg"></project-img>
               </div>
            </div>
        </section>
        <section id="lender-search">
            <div class="row">
                <div class="col">
                    <h2>Lender Search</h2>
                    <p>Lender Search is at the heart of the site’s functionality and business model. Users can search through lender and company profiles, and directly contact a lender without leaving the site. We went through numerous iterations to solve the problem of giving the access to highly specific customization options while not overcrowding the interface and overwhelming the user.</p>
                </div>
            </div>
            <div class="row">
               <div class="col">
                    <project-img src="aal/LenderSearch-Animation.gif"></project-img>
               </div>
            </div>
        </section>
        <section id="tlp">
            <div class="row">
                <div class="col">
                    <h2>Topic Landing Pages</h2>
                    <p>Built for SEO, topic landing pages were designed to draw traffic to the site and educate borrowers on the ins and outs of lending.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <project-img-scrollable 
                    src="aal/aal-tlp-desktop-screen.jpg"
                    name="aal-tlp-desktop"
                    ></project-img-scrollable>
                </div>
                <div class="col-10 offset-1 offset-md-0 col-md-4">
                    <project-img-scrollable 
                    src="aal/aal-tlp-mobile-screen.jpg"
                    name="aal-tlp-mobile"
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
            projectName:'Ask A Lender'
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
.aal-tlp{
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
                height:450px;
            }
        }
}
</style>

