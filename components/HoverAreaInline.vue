<template>
    <span class="hover-area"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    >
        <custom-cursor
        :cursorClass="customClass"
        v-show="hover"
        />
        <slot></slot>
    </span>
</template>

<script>
import CustomCursor from '~/components/CustomCursor.vue'

export default {
    data(){
        return{
            hover:false
        }
    },
    components:{
        CustomCursor
    },
    props:{
        customClass:{
            type: String,
            default:''
        }
    },
}
</script>

<style lang="scss">
    .hover-area{
        display:inline-block;
        // height:auto;
        // background-color:red;
        &:hover{
            display: inline-block;
        }
    }
</style>