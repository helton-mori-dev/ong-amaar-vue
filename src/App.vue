<template>
  <v-app>
    <Header/>
      <v-content id="top">
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
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap');

* {
  font-family: 'Muli', sans-serif;
}

/*Pra poder funcionar com o position fixed forçado no menu*/
#top {
  margin-top: 85px;
}
@media screen and (min-width:960px) {
  #top {
    margin-top: 95px;
  }
}

</style>