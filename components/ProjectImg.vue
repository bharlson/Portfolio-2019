<template>
    <div>
        <figure 
            class="figure" 
            @click="displayClass = 'd-lg-block'"
            :class="zoomClass"
            >
            <img :src="'/img/'+src" :alt="alt" class="img-fluid">
        <figcaption>{{caption}}</figcaption>
        </figure>

        <div 
            v-if="preview" 
            class="modal" 
            :id="alt" 
            :class="displayClass"
            @click="displayClass = 'd-none'"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <a class="close-btn" href="#">
                        &times;
                    </a>
                    <img :src="'/img/'+src" alt="" class="img-fluid">
                    <div class="modal-footer">
                        {{caption}}
                    </div>
                </div>
            </div>
        </div>
    </div>
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
