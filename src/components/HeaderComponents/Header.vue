<template>
  <v-app-bar
    id="header-primary"
    class="header-primary secondary--text overflow-hidden"
    color="primary"
    dark
    flat
    hide-on-scroll
    prominent
    height="95"
  >
    <v-container>
      <v-row class="header-col">
        <v-col class="menu-col">
          <Menu />
        </v-col>

        <v-col class="logo-col">
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

        <v-col class="header-buttons mt-3 d-none d-sm-none d-md-none d-md-flex">
          <div>
            <div
              class="quero-ajudar"
            >Quero ajudar
              <ul class="lista-ajudar">
                <li>
                  <v-btn flat text dark depressed  class="options-link" target="blank" href="https://www.instagram.com/ongamaar/">
                  Adote um <span class="bold">Animalzinho</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn flat text dark depressed class="options-link" to="/lartemporario">
                  Dê um <span class="bold">lar temporário</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn flat text dark depressed class="options-link" target="blank" href="https://www.vakinha.com.br/vaquinha/ajude-a-ong-amaar-ong-amaar-2">
                    Faça uma <span class="bold">doação</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn flat text dark depressed class="options-link" to="sejaumparceiro">
                  Seja um <span class="bold">parceiro</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn flat text dark depressed class="options-link" to="sejaumvoluntario">
                    Seja um <span class="bold">voluntário</span>
                  </v-btn>
                </li>
              </ul>
            </div>
            <a 
              class="entre-em-contato"
              href="#contact" 
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

.header-primary {
  position: fixed!important;
}

header.header-primary.v-app-bar {
  overflow: visible!important;
  position: relative;
  z-index: 1;
}

.header-primary > div{
  max-width: 1300px!important;
  margin: 0 auto;
}

.header-primary > div .logo{
  display: table;
  margin: auto;
}

.header-primary .v-toolbar__content .container {
  padding: 0 0;
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

.header-buttons > div div.quero-ajudar {
  border-radius: 25px;
  background: #63DED1;
  position: relative;
  float: left;
  color: #503683;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;  
  cursor: pointer;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li a{
  color: #503683;
  text-transform: initial;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li a span{
  letter-spacing: 0;
  font-weight: 400;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li a span:hover{
  font-weight: 900;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li a span .bold{
  font-weight: bolder;
  padding-left: 2px;
}

.header-buttons > div div.quero-ajudar:after{
  content: '';
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 15px;
  display: block;
  width: 100%;
}

.header-buttons > div div.quero-ajudar .lista-ajudar{
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: calc(100% + 15px);
  background: #fff;
  padding: 22px 9px;
  border-radius: 10px;
  z-index: 100;
  transition: .3s all ease;
  list-style: none;
  min-width: 230px;
}

.header-buttons > div div.quero-ajudar:hover .lista-ajudar {
  display: block;
  transition: .3s all ease;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li{
  text-align: left;
  width: 100%;
  padding: 0 0 0;
  font-weight: 500;
}

.header-buttons > div div.quero-ajudar .lista-ajudar li:hover a{
  font-weight: bold;
}

.header-buttons > div div.quero-ajudar .lista-ajudar span{
  font-weight: 700;
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

@media screen and (max-width: 960px) {
  .header-col {
    margin: auto;
    display: table;
    width: 100%;
  }
  .menu-col {
    float: right;
    width: auto;
  }
  .logo-col {
    float: left;
    width: auto;
  }
  .logo-col .logo{
    padding: 5px 0 0 20px;
    max-height: 50px;
  }
  .header-primary, .header-primary .v-toolbar__content {
    height: 85px!important;
  }
}
</style>