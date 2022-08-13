<template>
    <div class="text-container">
        <div class="title text-overlay">
            Technologies
        </div>
        <div class="body">
            I've worked with a range of technologies in the web development ecosystem. From Front-end to Back-end, I am interested in all technology stacks and always experimenting.
        </div>
    </div>
        <div class="grid-container">
            <div class="tile">
                <font-awesome-icon icon="fa-brands fa-vuejs" size=3x />
                <h3>Front End</h3>
            </div>
            <div>2</div>
            <div>3</div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

.grid-container {
    margin: 0 10%;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3,1fr);
}

.tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
        color: white;
    }
}
    
</style>