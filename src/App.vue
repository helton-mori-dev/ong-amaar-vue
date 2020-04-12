<template>
  <v-app
  >
    <v-app-bar
      class="header-primary secondary--text"
      app
      color="primary"
      dark
      v-row
      flat
      height="95"
    >
      
      <v-flex md4>
        <button class="menu">
          <i class="v-icon mdi mdi-menu"></i>
          <span class="header-menu ml-2">Menu</span>
        </button>
      </v-flex>

      <v-flex md4>
        <a 
          class="" 
          href="/"
        >
          <img 
            class="logo" 
            src="./assets/logo.png"
            dense
          />
        </a>
      </v-flex>

      <v-flex md4 class="header-buttons">
        <div>
          <!-- <button 
            href="https://github.com/vuetifyjs/vuetify/releases/latest" 
            target="_blank"
          >
            <span class="mr-2 ">Quero ajudar</span>
            <v-icon>mdi-open-in-new</v-icon>
          </button> -->
          <a 
            class="quero-ajudar"
            href="https://github.com/vuetifyjs/vuetify/releases/latest" 
            target="_blank"
          >
          Quero ajudar
          </a>
          <a 
            class="entre-em-contato"
            href="https://github.com/vuetifyjs/vuetify/releases/latest" 
            target="_blank"
          >
          Entre em contato
          </a>
        </div>
      </v-flex>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.header-primary > div{
  max-width: 1300px!important;
  margin: 0 auto;
}

.header-primary > div .logo{
  display: table;
  margin: auto;
}

.header-buttons {
  justify-content: flex-end;
  flex: 1;
}

.header-buttons > div {
 float: right;
}

.header-menu {
  text-transform: uppercase;
  font-size: 14px;
  vertical-align: middle;
}

.menu i.mdi-menu {
  font-size: 45px;
  font-weight: 800;
}

.header-buttons > div a {
  color: #503683;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
}

.header-buttons > div a.quero-ajudar{
  border-radius: 25px;
  background: #63DED1;
  transition: .3s all ease;
}

.header-buttons > div a.quero-ajudar:hover{
  opacity: .6;
}

.header-buttons > div a.entre-em-contato{
  color: #63DED1;
  transition: .3s all ease;
  font-size: 16px;
  font-weight: 500;
}

.header-buttons > div a.entre-em-contato:hover{
  color: #30ada0;
}

</style>