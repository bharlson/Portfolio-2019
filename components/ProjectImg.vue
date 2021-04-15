<template>
    <article>
        <figure 
            class="figure" 
            @click="displayClass = 'd-lg-block'"
            :class="zoomClass"
            >
            <img :src="'/img/'+src" :alt="alt" class="img-fluid">
        <figcaption class="text-center">{{caption}}</figcaption>
        </figure>

        <div 
            v-if="preview" 
            class="modal" 
            :id="alt" 
            :class="displayClass"
            @click="displayClass = 'd-none'"
        >
            <div class="modal-dialog" :class="'modal-'+modalSize">
                <div class="modal-content">
                    <a class="close-btn">
                        &times;
                    </a>
                    <img :src="'/img/'+src" alt="" class="img-fluid">
                    <div class="modal-footer" v-if="caption">
                        {{caption}}
                    </div>
                </div>
            </div>
        </div><!--/modal-->
    </article>
</template>

<script>
export default {
    data(){
        return{
            displayClass: 'd-none',
        }
    },
    props:{
        src:{
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
            default:'xl'
        }
    }
    ,
    computed:{
        zoomClass(){
            if(this.preview){
                return 'zoom'
            }
            else{
                return ''
            }
        }
    }
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/_variables.scss';

img{
    border: 2px solid $black;
}
 @media (min-width: $lg){
    .zoom{
        &:hover, &:active{
            cursor:zoom-in;
        }   
    }
    .modal{
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
            // padding-left:2rem;
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
