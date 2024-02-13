<template>
  <v-container class="container-options" primary>
    <v-row class="text-center d-none d-sm-none d-md-flex">
      <v-btn
        text
        dark
        depressed
        height="unset"
        max-width="225"
        target="blank"
        class="options-link"
        :class="card.class"
        v-for="card in cards"
        :key="card.label"
        :to="card.link"
      >
        <v-col class="card__block">
          <div class="card__img"></div>
          <div class="card__label">{{ card.label }}</div>
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
  data() {
    return {
      cards: [
        {
          label: "Adote um animalzinho",
          link: "https://www.instagram.com/ongamaar/",
          class: "adote-animalzinho",
        },
        {
          label: "Dê um lar temporário",
          link: "lartemporario",
          class: "lar-temporario",
        },
        {
          label: "Faça uma Doação",
          link: "facaumadoacao",
          class: "faca-doacao",
        },
        {
          label: "Seja um parceiro",
          link: "sejaumparceiro",
          class: "seja-parceiro",
        },
        {
          label: "Seja um voluntário",
          link: "sejaumvoluntario",
          class: "seja-voluntario",
        },
      ],
    };
  },
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

.container-options .row .v-btn.options-link {
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

.card__label {
  word-wrap: nowrap;
}

.v-ripple__container {
  display: none !important;
}

@media screen and (max-width: 960px) {
  .container-options .row .v-btn.options-link {
    text-align: center;
    height: auto !important;
    display: table;
    margin: auto;
  }

  .container-options .options-link > span {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 960px) {
  .options-link span {
    display: block;
    font-weight: 900;
  }

  a div {
    margin-bottom: 15px;
  }

  .card__img {
    display: block;
    height: 314px;
    width: 211px;
  }

  .adote-animalzinho .card__img {
    background-image: url("../../../public/home-hover/adote.png");
  }

  .adote-animalzinho:hover .card__img {
    background-position: 0 -314px;
  }

  .lar-temporario .card__img {
    background-image: url("../../../public/home-hover/temporario.png");
    background-position: -10px 0;
  }

  .lar-temporario:hover .card__img {
    background-position: -10px -313px;
  }

  .faca-doacao .card__img {
    background-image: url("../../../public/home-hover/doacao.png");
  }

  .faca-doacao:hover .card__img {
    background-position: 0 -314px;
  }

  .seja-parceiro .card__img {
    background-image: url("../../../public/home-hover/parceiro.png");
  }

  .seja-parceiro:hover .card__img {
    background-position: 0 -314px;
  }

  .seja-voluntario .card__img {
    background-image: url("../../../public/home-hover/voluntario.png");
  }

  .seja-voluntario:hover .card__img {
    background-position: 0 -314px;
  }
}
</style>
