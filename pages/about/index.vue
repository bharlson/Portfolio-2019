<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>About Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <h1 class="my-5">Bjørn Harlson</h1>
                </div>
            </div><!--/row-->
            <div class="row">
                <div class="col">
                    <h2>Work Experience</h2>
                </div>
            </div>
           <work-exp 
           v-for="i in workExperience" :key="i"
           :companyName="i.companyName"
           :location="i.location"
            :start="i.start"
            :end="i.end"
            :position="i.position"
            :desc="i.desc"
           />
        </section>
    </div>
</template>

<script>
import ProjectImg from '@/components/ProjectImg.vue'
import WorkExp from '@/components/WorkExp.vue'
export default {
    layout:'project',
    components:{
        ProjectImg,
        WorkExp
    },
    data(){
        return{
            windowWidth:0,
            workExperience:[
                {
                    companyName:"Scotsman Guide/Ask a Lender",
                    location: "Bothell, WA",
                    start: "2017",
                    end: "Present",
                    position: "Digital Designer",
                    desc:"Works on a variety of design and web development projects including: creation of graphics for web and print editorial use, user interface design, prototyping, HTML email creation, and front end web development."
                }
                ,
                {
                    companyName:"Shaun Scott for Seattle City Council 2019",
                    location: "Seattle, WA",
                    start: "2018",
                    end: "2019",
                    position: "Web Developer",
                    desc:"Built and maintained a website for a local city council campaign. Designed assets and page layouts as needed."
                }
                ,
                {
                    companyName:"Creaytive Inc.",
                    location: "Bellingham, WA",
                    start: "2018",
                    end: "",
                    position: "Web Development Intern",
                    desc:"Designed and built websites to meet client needs. Gained skills using Wordpress and writing HTML, CSS, and Jquery."
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
@import '@/assets/scss/_variables.scss';
li{
    font-size: 1.25rem;
}
</style>

