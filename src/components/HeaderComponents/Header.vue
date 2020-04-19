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
        <button class="menu">
          <i class="v-icon mdi mdi-menu"></i>
          <span class="header-menu ml-2">Menu</span>
        </button>
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

        <v-col class="header-buttons mt-3">
          <div>
            <a 
              class="quero-ajudar"
              href="https://github.com/vuetifyjs/vuetify/releases/latest" 
              target="_blank"
            >Quero ajudar
            </a>
            <a 
              class="entre-em-contato"
              href="https://github.com/vuetifyjs/vuetify/releases/latest" 
              target="_blank"
            >Entre em contato
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
}
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