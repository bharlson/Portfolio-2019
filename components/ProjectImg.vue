<template>
    <figure class="figure">
        <img :src="src" alt="" class="img-fluid">
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

<style lang='scss' scoped>
@import '@/assets/scss/_variables.scss';
img{
    border: 2px solid $black;
}
figcaption{
    text-align: center;
}

</style>
