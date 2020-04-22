<template>
  <v-app-bar
    class="header-primary secondary--text"
    app
    color="primary"
    dark
    flat
    height="95"
  >
    <v-container>
      <v-row>
      <v-col>
         <Menu />
      </v-col>

      <v-col>
        <a 
          class="" 
          href="/"
        >
          <img 
            class="logo" 
            src="../../assets/logo.png"
            dense
          />
        </a>
      </v-col>

      <v-col class="header-buttons mt-4">
        <div>
          <a 
            class="quero-ajudar"
            href="about" 
          >Quero ajudar
          </a>
          <a 
            class="entre-em-contato"
            href="/" 
          >Entre em contato
          </a>
        </div>
      </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'Header',
  components: {
    Menu
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700;800&display=swap');

* {
  font-family: 'Muli', sans-serif;
}

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