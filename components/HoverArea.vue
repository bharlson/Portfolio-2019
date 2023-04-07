<template>
    <div class="hover-area"
    @mouseover="hover = true"
    @mouseout="hover = false"
    >
        <custom-cursor
        :cursorClass="customClass"
        v-show="hover"
        />
        <slot></slot>
    </div>
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
        // height:auto;
        // background-color:red;
    }
</style>