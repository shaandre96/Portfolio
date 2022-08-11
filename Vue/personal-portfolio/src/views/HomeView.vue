<template>
  <div class="home">
    <Header></Header>
    <Banner/>
    <Divider/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Banner from '@/components/Banner/Banner.vue';
import Divider from '@/components/Divider/Divider.vue';
@Options({
  components: {
    Header,
    Banner,
    Divider
  },
})
export default class HomeView extends Vue {}
</script>
