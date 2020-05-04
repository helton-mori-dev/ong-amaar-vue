<template>
  <v-app>
    <Header/>
      <v-content id="top">
        <!-- <HelloWorld/> -->
        <router-view></router-view>
      </v-content>
    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>