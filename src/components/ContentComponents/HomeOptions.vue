<template>
  <v-container class="container-options" primary>
    <v-row class="text-center d-none d-sm-none d-md-flex">
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        class="options-link"
        target="blank"
        href="https://www.instagram.com/ongamaar/"
      >
        <v-col class="adote">
          <div class="img-adote"></div>
          Adote um<span> Animalzinho</span>
        </v-col>
      </v-btn>
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        class="options-link"
        to="/lartemporario"
      >
        <v-col class="temporario">
          <div class="img-temporario"></div>
          <p>Dê um</p>
          <span> Lar temporário</span>
        </v-col>
      </v-btn>
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        class="options-link"
        to="/facaumadoacao"
      >
        <v-col class="doacao">
          <div class="img-doacao"></div>
          Faça uma<span> Doação</span>
        </v-col>
      </v-btn>
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        class="options-link"
        to="sejaumparceiro"
      >
        <v-col class="parceiro">
          <div class="img-parceiro"></div>
          Seja um<span> parceiro</span>
        </v-col>
      </v-btn>
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        class="options-link"
        to="sejaumvoluntario"
      >
        <v-col class="voluntario">
          <div class="img-voluntario"></div>
          Seja um<span> Voluntário</span>
        </v-col>
      </v-btn>
    </v-row>
    <v-row class="d-flex d-md-none">
      <v-col cols="12" class="adote">
        <v-btn
          text
          dark
          depressed
          height="unset"
          class="options-link"
          target="blank"
          href="https://www.instagram.com/ongamaar/"
        >
          <v-img class="img-adote" src="../../assets/adote-mobile.png"></v-img>
          Adote um<span> Animalzinho</span>
        </v-btn>
      </v-col>
      <v-col cols="12" class="temporario">
        <v-btn
          text
          dark
          depressed
          height="unset"
          class="options-link"
          to="/lartemporario"
        >
          <v-img
            class="img-temporario"
            src="../../assets/temporario-mobile.png"
          ></v-img>
          Dê um<span> Lar temporário</span>
        </v-btn>
      </v-col>

      <v-col cols="12" class="doacao">
        <v-btn
          text
          dark
          depressed
          height="unset"
          class="options-link"
          to="/facaumadoacao"
        >
          <v-img
            class="img-doacao"
            src="../../assets/doacao-mobile.png"
          ></v-img>
          Faça uma<span> Doação</span>
        </v-btn>
      </v-col>

      <v-col cols="12" class="parceiro">
        <v-btn
          text
          dark
          depressed
          height="unset"
          class="options-link"
          to="sejaumparceiro"
        >
          <v-img
            class="img-parceiro"
            src="../../assets/parceiro-mobile.png"
          ></v-img>
          Seja um<span> parceiro</span>
        </v-btn>
      </v-col>
      <v-col cols="12" class="voluntario">
        <v-btn
          text
          dark
          depressed
          height="unset"
          class="options-link"
          to="sejaumvoluntario"
        >
          <v-img
            class="img-voluntario"
            src="../../assets/voluntario-mobile.png"
          ></v-img>
          Seja um<span> Voluntário</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center anchor-button">
      <v-col>
        <a href="#ancora-conheca-ong">
          <v-icon large color="secondary"> mdi-arrow-down </v-icon>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeOptions",
};
</script>

<style>
.container-options {
  background: #503683;
  max-width: none;
  padding-top: 0;
}

.container-options > .row {
  max-width: 1300px;
  margin: auto;
  justify-content: center;
}

.container-options .options-link {
  text-transform: uppercase;
  color: #63ded1;
  text-decoration: none;
  font-weight: 300;
  padding: 15px 0 0 !important;
  display: block;
  line-height: 20px;
}

.container-options .options-link span {
  font-weight: 900;
}

.container-options .options-link div {
  font-weight: 400;
}

.anchor-button {
  padding: 80px 0;
}

.options-link.v-btn:before {
  display: none;
}

.v-ripple__container {
  display: none !important;
}

@media screen and (max-width: 960px) {
  .container-options .options-link {
    width: 100%;
    text-align: center;
  }

  .container-options .options-link > span {
    display: flex;
    flex-direction: column;
  }

  .adote,
  .temporario,
  .doacao,
  .parceiro,
  .voluntario {
    padding: 0;
  }
}

@media screen and (min-width: 960px) {
  .container-options .options-link span {
    display: block;
    font-weight: 900;
  }

  .container-options a div {
    margin-bottom: 15px;
  }

  .container-options a p {
    margin-bottom: 0;
  }

  .container-options .adote {
    padding-left: 0;
  }

  .container-options .temporario {
    padding-left: 0;
  }

  .container-options .temporario a {
    text-indent: 30px;
  }

  .container-options .adote .img-adote {
    display: block;
    height: 314px;
    width: 211px;
    background-image: url("../../../public/home-hover/adote.png");
  }

  .container-options .adote:hover .img-adote {
    background-position: 0 -314px;
  }

  .container-options .temporario .img-temporario {
    display: block;
    height: 313px;
    width: 220px;
    background-image: url("../../../public/home-hover/temporario.png");
  }

  .container-options .temporario:hover .img-temporario {
    background-position: 0 -313px;
  }

  .container-options .doacao .img-doacao {
    display: block;
    height: 313px;
    width: 220px;
    background-image: url("../../../public/home-hover/doacao.png");
  }

  .container-options .doacao:hover .img-doacao {
    background-position: 0 -314px;
  }

  .container-options .parceiro .img-parceiro {
    display: block;
    height: 314px;
    width: 220px;
    background-image: url("../../../public/home-hover/parceiro.png");
  }

  .container-options .parceiro:hover .img-parceiro {
    background-position: 0 -314px;
  }

  .container-options .voluntario .img-voluntario {
    display: block;
    height: 314px;
    width: 220px;
    background-image: url("../../../public/home-hover/voluntario.png");
  }

  .container-options .voluntario:hover .img-voluntario {
    background-position: 0 -314px;
  }
}
</style>
