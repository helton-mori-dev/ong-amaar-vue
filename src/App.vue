<template>
  <v-app>
    <Header/>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from './components/HeaderComponents/Header';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>