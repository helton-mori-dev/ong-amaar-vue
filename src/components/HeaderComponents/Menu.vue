<template>
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
</template>

<script>
export default {
  name: 'Menu',
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