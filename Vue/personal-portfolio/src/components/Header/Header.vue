<template>
    <div class="header-container">
        <img alt="My Logo" height="80" src="../../assets/logo.png">
        <div class="router-container">
            <router-link to="/">Portfolio</router-link>
            <router-link to="#projects">Projects</router-link>
            <router-link to="#tech">Tech</router-link>
            <router-link to="#about">About</router-link>
        </div>
        <div class="icon-container">
            <a href="https://github.com/shaandre96/Portfolio" target="_blank">
                <font-awesome-icon style="margin-right: 1em" icon="fa-brands fa-github" size="3x" inverse/>
            </a>
            <a href="https://www.linkedin.com/in/andre-sha-744a65226/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" size="3x" inverse/>
            </a>
        </div>
    </div>
</template>
<script>
export default {}

methods: {

}
</script>
<style lang="scss">
@import '../../../sass/app.scss';

.header-container {
    display: flex;
    background: rgba( 0, 0, 0, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    .router-container {
        color: $charcoal;
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: space-evenly;
    
        a {
            text-decoration: none;
            font-size: 24px;
            place-self: center;
            color: $gray;
            &:hover{
               color: $orange;
               transition: color 0.3s ease; 
            }
        }
    }

    .icon-container {
        display: flex;
        width: 50%;
        justify-content: flex-end;
        align-items: center;
        margin-right: 2em;

    }

}






</style>