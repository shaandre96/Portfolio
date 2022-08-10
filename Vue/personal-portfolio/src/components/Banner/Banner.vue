<template>
    <div class="banner-container">
      <div class="text-container">
        <h1 class="title">I'm Andre Sha
        </h1>
        <h1 class="title">A creative Software Engineer</h1>
        <h3 class="body">My main experience is in front-end web development with VueJS and AngularJS. But I always look forward to exciting opportunities and challenges, love learning and developing new skills.</h3>
      </div>
    </div>
</template>
<script>
export default {
    
}

</script>
<style lang="scss" scoped>
    @import '../../../sass/app.scss';
    .text-container{
        width: 50%;
        padding: 2em;
        .title {
            font-weight: 500;
            font-size: 71px;
            line-height: 72px;
            max-width: 100%;
            background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: unset;
            text-align: start;
            padding-bottom: 1em;
        }
        .body{
            text-align: start;
            color: $gray;
            font-size: 25px;
            line-height: 35px;
            font-weight: 300;
            margin: unset;
        }
    }
</style>