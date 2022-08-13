<template>
    <div class="banner-container">
        <div class="text-container">
            <h1 class="title text-overlay">I'm Andre Sha
            </h1>
            <h1 class="title text-overlay">A creative Software Engineer</h1>
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