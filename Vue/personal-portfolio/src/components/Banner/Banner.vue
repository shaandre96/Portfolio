<template>
    <div class="banner-container">
        <div class="text-container">
            <h1 class="title">I'm Andre Sha
            </h1>
            <h1 class="title">A creative Software Engineer</h1>
            <h3 class="body">My main experience is in front-end web development with VueJS and AngularJS. But I always look forward to exciting opportunities and challenges, love learning and developing new skills.</h3>
            <btn :text="'Get in touch'"></btn>
        </div>
        <div class="image-container">
            <img src="../../assets/code_logo.gif"/>
        </div>
    </div>
</template>
<script>
import btn from '../Button/Button.vue';

export default {
    components:{
        btn
    }
}

</script>
<style lang="scss" scoped>
    @import '../../../sass/app.scss';
    .banner-container {
        display: flex;
    .text-container{
        flex-grow: 1;
        max-width: 50%;
        padding: 5em;
        .title {
            font-weight: 500;
            font-size: 71px;
            line-height: 60px;
            max-width: 100%;
            // background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
            background: -webkit-linear-gradient(90deg, #ffffff 0%, #c1c1c1 100%);
            background: linear-gradient(90deg, #ffffff 0%, #c1c1c1 100%);
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

    .image-container {
        display: flex;
        align-items: center;
        flex-grow: 1;
        img {
            width: 100%;
        }
    }

    }
</style>