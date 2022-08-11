<template>
    <div class="button">
        <button>{{text}}   <font-awesome-icon icon="fa-regular fa-paper-plane" /></button>
    </div>
    
</template>
<script>
export default {
    props: {
        text: String,
    }
}
</script>
<style lang="scss">
@import '../../../sass/app.scss';

.button{
    display: flex;
    justify-content: flex-start;

    button {
        height: 80px;
        width: 225px;
        font-size: 22px;
        border-radius: 1em;
        color: $orange;
        background-color: $gray;
        margin-top: 1em;

        &:hover, &:active {
            background-color: $orange;
            color: $gray;
            cursor: pointer;
            transition: 0.3s ease;
        }
    }
}
</style>