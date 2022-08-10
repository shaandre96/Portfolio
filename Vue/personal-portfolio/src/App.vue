<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>



<style lang="scss">
@import '../sass/app.scss';
#app {
  box-sizing: border-box;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $dark_blue;

  height: 100vh;
  width: 100%;

}

</style>
