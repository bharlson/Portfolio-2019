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
                <div class="col-lg-4">
                    
                </div>
            </div>
            <!--/row-->
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
           <div class="row">
               <div class="col">
                   <h2>Education</h2>
               </div>
           </div>
           <work-exp
            companyName="Western Washington University"
            location="Bellingham, WA"
            start="2014"
            end="2016"
            position="BA: Design, Minor: Audio Technology, Music and Society"
            desc="Focus: Web Design, Music Production"
           ></work-exp>
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
                    companyName:"<a href='/scotsman-guide'>Scotsman Guide</a>/<a href='/ask-a-lender'>Ask a Lender</a>",
                    location: "Bothell, WA",
                    start: "2017",
                    end: "Present",
                    position: "Digital Designer",
                    desc:"Works on a variety of design and web development projects including: image production for web and print editorial use, user interface design, prototyping, HTML email creation, and front end web development."
                }
                ,
                {
                    companyName:"<a href='/scott2019'>Shaun Scott for Seattle City Council 2019</a>",
                    location: "Seattle, WA",
                    start: "2018",
                    end: "2019",
                    position: "Web Developer",
                    desc:"Built and maintained a website for a local city council campaign. Designed assets and page layouts as needed."
                }
                ,
                {
                    companyName:"<a href='/creaytive'>Creaytive Inc.</a>",
                    location: "Bellingham, WA",
                    start: "2016",
                    end: "",
                    position: "Web Development Intern",
                    desc:"Designed and built websites to meet client needs. Gained skills using Wordpress and writing HTML, CSS, and Jquery."
                }
                ,
                {
                    companyName:"The Planet Magazine",
                    location: "Bellingham, WA",
                    start: "2015",
                    end: "2016",
                    position: "Web Developer",
                    desc:"Maintained a wordpress website for Western Washington University's Environmental Issues Magazine"
                }
            ],
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

