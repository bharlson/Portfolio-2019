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
