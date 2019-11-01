<template lang='pug'>
    .grid-container
        .box
            h1 hello fdsfdsfss
        .box
            h1 hi
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h1{
        font-family: Arial;
    }
    .grid-container{
        display: grid;
        grid-gap:1rem 1rem;
        grid-template-columns: auto;
        @media(min-width: 768px){
            grid-template-columns: auto auto;
        }
        max-width:85%;
        margin:0 auto;
        &>*{
            border:1px solid black;
        }
    }
</style>

