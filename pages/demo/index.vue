<template lang='pug'>
    .grid-container
        .box(v-for='post in posts')
            h1 {{post.title}}
            p 
                b {{post.summary}} 
            img.thumbnail(:src='post.thumbnail')
            p {{post.content}}
</template>

<script>
export default {
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/',{
            version:'draft',
            starts_with:'blog/'
        }).then(res=>{
            console.log(res);
            return {
                posts: res.data.stories.map(bp=>{
                    return {
                        id: bp.slug,
                        title: bp.content.title,
                        summary: bp.content.summary,
                        content: bp.content.content,
                        thumbnail: bp.content.thumbnail,
                    }
                })
            };
        })
    }
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
            display: block;
        }
        
    }
    .box{
        display: block;
    }
    .thumbnail{
        max-width: 200px;
    }


</style>

