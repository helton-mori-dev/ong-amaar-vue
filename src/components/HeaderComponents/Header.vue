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
         <v-menu
            transition="slide-x-transition"
            bottom
            right
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                class="my-menu"
                text
                v-on="on"
                x-large
              >
                <i class="v-icon mdi mdi-menu"></i>
                <span class="header-menu ml-2">Menu</span>
              </v-btn>
            </template>
            <v-container class="img-container">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-img 
                    src="../../assets/banner-menu.jpg" 
                    contain
                    min-height="100%"
                    >

                  </v-img>
                </v-col>
                <v-col cols="6" class="menu-container">
                  <v-list 
                    class="list-menu"                    
                    flat             
                    >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                      class="label-item"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>


          </v-menu>
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
export default {
  name: 'Header',
  data: () => ({
      items: [
        { title: 'Quero ajudar' },
        { title: 'Sobre a ONG Amaar' },
        { title: 'Prestação de contas' },
        { title: 'Entre em contato' },
      ],
    }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Muli:wght@400;500;600;700&display=swap');

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

/* Menu - conferir se as classes estão todas aqui antes de separar em componente */

.header-menu {
  text-transform: uppercase;
  font-size: 14px;
  vertical-align: middle;
}

.my-menu, .header-buttons {
  height: 100%;
}

.my-menu {
  padding-left: 0!important;
}

.my-menu i.mdi-menu, .my-menu span {
  color:  #63DED1!important;

}

.my-menu i.mdi-menu {
  font-size: 45px;
  font-weight: 800;
}

.menu-container {
  background: #fff;
  display: flex;
  margin-top: 10%;
  justify-content: center;
}

.list-menu {

}

.img-container {
  padding: 0!important;
}

div.v-menu__content {
  top: 0!important;
  left: 0!important;
  border-radius: 0!important;
  height: 100vh;
  width: 80vw;
  overflow: hidden;
  background-color: #fff;
}

div.v-menu__content > .container{
  height: 100%;
}

.label-item {
  margin: 25px 0;
}

.label-item > div {
  font-size: 28px!important;
  font-weight: 700;
  color: #503683;
}

</style>