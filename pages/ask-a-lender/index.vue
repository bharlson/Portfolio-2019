<template>
    <div class="container">
        <section id="intro">
            <div class="row">
                <div class="col">
                    <h1>{{projectName}}</h1>
                    <p>Ask a Lender was launched in 2017 as a sister company to Scotsman Guide. Built off the longstanding connections Scotsman Guide has in the mortgage lending industry, Ask a Lender was conceived as a consumer-facing site for connecting borrowers with lenders in a free and transparent way.</p>
                    <p>As of 2018, the company is defunct, but features originally implemented in Ask a Lender have been adapted to the newly revamped Scotsman Guide website</p>
                </div>
            </div>
        </section>
        <section id="homepage">

        </section>
        <section id="lender-search">
            <div class="row">
                <div class="col">
                    <h2>Lender Search</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ad minus qui tempore. Impedit, laboriosam repellat voluptatum dolore vel laborum officiis sequi id quos ullam iusto quisquam labore dolorem illum.</p>
                </div>
            </div>
            <div class="row">
                <figure>
                    <img src="@/assets/img/aal/LenderSearch-Animation.gif" alt="Lender Search Demonstration" class="img-fluid">
                    <figcaption>
                        Lender Search Interface
                    </figcaption>
                </figure>
            </div>
        </section>
                <section id="tlp">
            <div class="row">
                <div class="col">
                    <h2>Topic Landing Pages</h2>
                    <p>Built for SEO, topic landing pages were designed to draw traffic to the site and educate borrowers on the ins and outs of lending.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    layout:'project',
    data(){
        return{
            projectName:'Ask A Lender'
        }
    }
}
</script>

<style style='scss' scoped>
@import url(../../assets/scss/_variables.scss);

</style>

