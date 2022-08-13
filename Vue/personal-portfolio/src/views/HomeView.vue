<template>
  <div class="home">
    <Header></Header>
    <Banner/>
    <Divider/>
    <Projects/>
    <Divider/>
    <Technologies/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Banner from '@/components/Banner/Banner.vue';
import Divider from '@/components/Divider/Divider.vue';
import Projects from '@/components/Banner/Projects.vue';
import Technologies from '@/components/Banner/Technologies.vue';
@Options({
  components: {
    Header,
    Banner,
    Divider,
    Projects,
    Technologies
  },
})
export default class HomeView extends Vue {}
</script>
