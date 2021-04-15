<template>
    <article>
        <figure>
            <div class="scrollable"
            :style="'background-image:url('+loadingBg+');'+'background-color:'+bgColor+';'"
            :class="name +' '+ zoomClass"
            @click="displayClass = 'd-lg-block'"
            >
                <img :src="'/img/'+src" alt="caption" class="img-fluid">
        
            </div>
            <figcaption>{{caption}}</figcaption>
        </figure>
        <!-- <div 
            v-if="preview" 
            class="modal" 
            :id="alt" 
            :class="displayClass"
            @click="displayClass = 'd-none'"
            >
            <div class="modal-dialog" 
            :class="'modal-'+modalSize">
                <div class="modal-content">
                    <a class="close-btn">
                        &times;
                    </a>
                    <div class="scrollable" :class="name">
                        <img :src="'/img/'+src" alt="" class="img-fluid">
                    </div>
                    <div class="modal-footer" v-if="caption">
                        {{caption}}
                    </div>
                </div>
            </div>
        </div> -->
    </article>
    
</template>

<script>
export default {
    data(){
        return{
            // windowWidth:0,
            scrollableHeight:400,
            displayClass: 'd-none',
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
        },
        loadingBg:{
            type: String
        },
        bgColor:{
            type: String
        },
        alt:{
            type:String,
        },
        caption:{
            type:String
        },
        preview:{
            type:Boolean,
            default:false
        },
        modalSize:{
            type:String,
            default:'scrollable-desktop'
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
        // ,
        // zoomClass(){
        //     if(this.preview){
        //         return 'zoom'
        //     }
        //     else{
        //         return ''
        //     }
        // }    
    }

}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/_variables.scss';
// figure{
//     width: 100%;
//     margin: 0 auto;
// }

.modal-scrollable-desktop{
    max-width:800px;
    width:100%;
}
.scrollable{
    background-size:cover;
    // background-repeat:repeat;
    background-position: top;
    overflow:hidden;
    width: 100%;
    border: 2px solid $black;
    max-width:992px;
    margin: 0 auto;
        @media (min-width: 768px) {
        overflow: scroll;
        // cursor:ns-resize;
    }
}
figcaption{
    text-align: center;
}

 @media (min-width: $lg){
    .zoom{
        &:hover, &:active{
            cursor:zoom-in;
        }   
    }
    .modal{
        img{
            border: 2px solid $black;
        }
        display:auto;
        background-color:rgba($white,0.5);
        img{
            border:none;
            border-bottom: 2px solid $black;
        }
        &-content{
            border-radius:0;
            border:2px solid $black;
        }
        &-footer{
            justify-content: center;
        }
        &:hover, &:active{
            cursor:zoom-out;
        }
    }
    .close-btn{
        position: absolute;
        right:1rem;
        top:0;
        font-size:2rem;
        color:$black;
        opacity:0.5;
        mix-blend-mode: hard-light;
        text-decoration:none;
        &:hover,&:active{
            transform:scale(1.05);
        }
        // transition:transform 0.2s;
    }
 }
</style>
