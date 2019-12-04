<template>
    <figure>
        <img :src="require(src)" alt="" class="img-fluid">
        <figcaption>{{caption}}</figcaption>
    </figure>
</template>

<script>
export default {
    data(){
        return{
            // imgSrc:require(this.src)
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
        }
    }
}
</script>

<style style='scss' scoped>
@import url(../assets/scss/_variables.scss);

</style>
