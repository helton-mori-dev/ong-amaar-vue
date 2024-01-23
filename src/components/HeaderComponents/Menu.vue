<template>
  <v-menu
    transition="slide-x-transition"
    bottom
    right
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-btn class="my-menu" text v-on="on" x-large>
        <i class="v-icon mdi mdi-menu"></i>
        <span class="header-menu ml-2">Menu</span>
      </v-btn>
    </template>
    <v-container class="img-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" class="d-none d-sm-none d-md-flex">
          <v-img src="../../assets/banner-menu.jpg" cover min-height="100%">
            <v-btn class="close-menu" text depressed large @click="closeMenu()">
              <v-icon>mdi-close</v-icon>
              Fechar
            </v-btn>
          </v-img>
        </v-col>

        <v-col cols="12" md="6" class="menu-container">
          <v-btn
            class="close-menu d-flex d-sm-flex d-md-none"
            text
            depressed
            large
            @click="closeMenu()"
          >
            <v-icon>mdi-close</v-icon>
            Fechar
          </v-btn>
          <v-list class="list-menu" flat>
            <v-list-item class="label-item quero-ajudar-title">
              <v-list-item-title
                v-on:click="
                  show1 = !show1;
                  toggleClassQuero();
                "
                >Quero ajudar</v-list-item-title
              >
              <ul class="lista-quero-ajudar" v-show="show1">
                <li>
                  <v-btn
                    flat
                    text
                    dark
                    depressed
                    class="options-link"
                    target="blank"
                    href="https://www.instagram.com/ongamaar/"
                  >
                    Adote um <span class="bold">Animalzinho</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    flat
                    text
                    dark
                    depressed
                    class="options-link"
                    to="/lartemporario"
                  >
                    Dê um <span class="bold">lar temporário</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    flat
                    text
                    dark
                    depressed
                    class="options-link"
                    target="blank"
                    :href="links.linkTree"
                  >
                    Faça uma <span class="bold">doação</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    flat
                    text
                    dark
                    depressed
                    class="options-link"
                    to="sejaumparceiro"
                  >
                    Seja um <span class="bold">parceiro</span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    flat
                    text
                    dark
                    depressed
                    class="options-link"
                    to="sejaumvoluntario"
                  >
                    Seja um <span class="bold">voluntário</span>
                  </v-btn>
                </li>
              </ul>
            </v-list-item>
            <v-list-item class="label-item">
              <v-list-item-title>
                <a href="/#ancora-conheca-ong">Sobre a ONG Amaar</a>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="label-item">
              <v-list-item-title
                ><a href="#">Prestação de contas</a></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="label-item">
              <v-list-item-title>
                <a href="/#contact">Entre em contato</a>
              </v-list-item-title>
            </v-list-item>
            <v-list-item class="links-menu">
              <SocialLinks />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-menu>
</template>

<script>
import SocialLinks from "@//components/GeneralComponents/SocialLinks.vue";

export default {
  name: "Menu",

  components: {
    SocialLinks,
  },
  methods: {
    closeMenu: function () {
      document.getElementsByClassName("v-menu__content")[0].style.display =
        "none";
    },
    toggleClassQuero: function () {
      let titletoggle = document.querySelector(".quero-ajudar-title");
      titletoggle.classList.toggle("quero-ajudar-title-height");
    },
  },
  data() {
    return {
      show1: false,
      links: {
        linkTree: "https://linktr.ee/ONGAMAAR",
      },
    };
  },
};
</script>

<style>
.quero-ajudar-title {
  width: 100%;
  flex-direction: column;
  align-items: flex-start !important;
  position: relative;
  height: 48px;
}

.quero-ajudar-title-height {
  height: auto;
}

.quero-ajudar-title .v-list-item__title:before {
  content: "+";
  position: absolute;
  top: -3px;
  left: -8px;
  color: darkcyan;
  font-size: 30px;
  font-weight: bold;
}

.quero-ajudar-title-height .v-list-item__title:before {
  content: "-";
}

.quero-ajudar-title .v-list-item__title {
  align-self: flex-start;
  cursor: pointer;
  transition: 0.3s all ease;
  overflow: visible;
}

.lista-quero-ajudar {
  padding: 22px 9px 22px 0 !important;
  list-style: none;
}

.quero-ajudar-title .lista-quero-ajudar {
  padding: 22px 9px 0 0 !important;
}

.lista-quero-ajudar li a,
.lista-quero-ajudar li span {
  color: #666;
  text-transform: initial;
  font-size: 18px;
  padding-left: 0 !important;
}

.close-menu {
  position: absolute;
  left: 40%;
  top: 30px;
  z-index: 2;
}

.close-menu span {
  color: #fff;
  font-size: 12px;
}

.close-menu i {
  background: #503683;
  border-radius: 100%;
  padding: 8px;
  margin-right: 10px;
}

.header-menu {
  text-transform: uppercase;
  font-size: 14px;
  vertical-align: middle;
}

.my-menu,
.header-buttons {
  height: 100%;
}

.my-menu {
  padding-left: 0 !important;
}

.my-menu i.mdi-menu,
.my-menu span {
  color: #63ded1 !important;
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
  padding: 0 !important;
  height: 100%;
}

.img-container .row {
  height: 100%;
}

div.v-menu__content {
  top: 0 !important;
  left: 0 !important;
  border-radius: 0 !important;
  height: 100vh;
  width: 80vw;
  overflow: hidden;
  background-color: #fff;
}

div.v-menu__content > .container {
  height: 100%;
}

.label-item {
  margin: 25px 0;
  display: block;
}

.label-item > div {
  font-size: 28px !important;
  font-weight: 700;
  color: #503683;
}

.label-item a {
  text-decoration: none;
  transition: 0.3s all ease;
}

.quero-ajudar-title .v-list-item__title:hover,
.label-item a:hover {
  color: darkcyan;
}

.links-menu .social-links {
  margin-top: 5px;
}

.links-menu .social-links i {
  color: #503683;
}

@media screen and (max-width: 960px) {
  div.v-menu__content {
    width: 100vw;
    max-width: unset;
  }
  .menu-container {
    position: relative;
    justify-content: flex-start;
    flex-direction: column;
  }
  .menu-container .list-menu {
    padding-left: 30px;
  }
  .close-menu {
    top: -30px;
    right: 0;
    left: auto;
    justify-content: flex-end !important;
  }
  .close-menu span {
    color: #503683;
    font-size: 14px;
    font-weight: 700;
  }

  .close-menu i:before {
    color: #fff;
  }
}
</style>
