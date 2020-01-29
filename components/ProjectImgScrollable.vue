<template>
    <figure>
        <div class="scrollable" 
        :class="name"
        >
            <img :src="src" alt="" class="img-fluid">
            
        </div>
        <figcaption>{{caption}}</figcaption>
    </figure>
    
</template>

<script>
export default {
    data(){
        return{
            // windowWidth:0,
            scrollableHeight:400
        }
    },
    props:{
        src:{
            type: String
        },
        name:{
            type: String
        },
        alt:{
            type:String,
        },
        caption:{
            type:String
        }
        // mobileHeight:{
        //     type:Number,
        //     default:400
        // },
        // tabletHeight:{
        //     type:Number,
        //     default:400
        // },
        // desktopHeight:{
        //     type:Number,
        //     default:400
        // },
        // windowWidth:{
        //     type:Number,
        //     default:0
        // }
    },
    computed:{
        mobileWidth(){
            if(this.windowWidth < 768){
                return true;
            }
            else{
                return false;
            }
        },
        tabletWidth(){
            if(this.windowWidth >= 768 && this.windowWidth <= 996){
                return true;
            }
            else{
                return false;
            }
        },
        desktopWidth(){
            if(this.windowWidth > 996){
                return true;
            }
            else{
                return false;
            }
        },
        scrollableHeight(){
            if(this.mobileWidth){
                return this.mobileHeight
            }
            else if(this.tabletWidth){
                return this.tabletHeight
            }
            else if(this.desktopWidth){
                return this.desktopHeight
            }
        }
    }

}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/_variables.scss';
// figure{
//     width: 100%;
//     margin: 0 auto;
// }
.scrollable{
    @media (min-width: 768px) {
        overflow: scroll;
    }
    overflow:hidden;
    width: 100%;
    border: 2px solid $black;
    max-width:992px;
    margin: 0 auto;
    
}
figcaption{
    text-align: center;
}
// p{
//     color:$black;
// }
</style>
