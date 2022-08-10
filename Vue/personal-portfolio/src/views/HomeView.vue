<template>
  <div class="home">
    <Header></Header>
    <Banner/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header/Header.vue';
import Banner from '@/components/Banner/Banner.vue';
@Options({
  components: {
    Header,
    Banner
  },
})
export default class HomeView extends Vue {}
</script>
