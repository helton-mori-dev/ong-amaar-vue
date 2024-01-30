<template>
  <div>
    <v-container class="container-message">
      <v-row class="text-center" no-gutters>
        <v-col cols="12" class="message">
          <h1 class="first-text">
            {{ firstMessage }}
            <span class="second-text">
              {{ secondMessage }}
            </span>
          </h1>
        </v-col>
      </v-row>
    </v-container>

    <!-- Tem q componentizar o breadcrumbs -->
    <v-container class="breadcrumbs">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <TextDark />
    <v-container class="container-message" style="padding: 40px 0 80px">
      <v-row class="text-center" no-gutters>
        <v-col cols="12" class="message">
          <h2 class="first-text" style="line-height: 0">
            {{ interrogacao }}
            <span class="second-text" style="font-size: 36px">
              {{ comoFunciona }}
            </span>
          </h2>
        </v-col>
      </v-row>

      <v-row class="text-center como-funciona">
        <v-col cols="12" sm="3">
          <v-img
            src="../assets/lar-temporario/hospede.png"
            height="413px"
            contain
          ></v-img>
          <h3><v-icon>mdi-cards-heart</v-icon>Hospede um animalzinho</h3>
          <label class="text-funciona"
            >Você hospeda um bichinho enquanto procuramos um lar definitivo para
            ele.</label
          >
        </v-col>
        <v-col cols="12" sm="3">
          <v-img
            src="../assets/lar-temporario/racao.png"
            height="413px"
            contain
          ></v-img>
          <h3><v-icon>mdi-pot-steam</v-icon>Ração</h3>
          <label class="text-funciona"
            >A ração fica por conta da Amaar. Levamos a quantidade necessária
            para sua casa.</label
          >
        </v-col>
        <v-col cols="12" sm="3">
          <v-img
            src="../assets/lar-temporario/medicamentos.png"
            height="413px"
            contain
          ></v-img>
          <h3><v-icon>mdi-pill</v-icon>Medicamentos</h3>
          <label class="text-funciona"
            >Caso o animalzinho precise ser tratado, também disponibilizamos os
            medicamentos necessários.</label
          >
        </v-col>
        <v-col cols="12" sm="3">
          <v-img
            src="../assets/lar-temporario/feira.png"
            height="413px"
            contain
          ></v-img>
          <h3><v-icon>mdi-paw</v-icon>Feira de adoção</h3>
          <label class="text-funciona"
            >Leve seu pet aos domingos às 9h na feira da Amaar. E, caso não seja
            adotado, retorne às 17h para buscá-lo.</label
          >
        </v-col>
      </v-row>
    </v-container>

    <Duvidas />
  </div>
</template>

<script>
import TextDark from "@/components/ContentComponents/TextDark.vue";
import Duvidas from "@/components/ContentComponents/Duvidas.vue";
export default {
  name: "LarTemporario",
  components: {
    TextDark,
    Duvidas,
  },
  data() {
    return {
      firstMessage: "Dê um",
      secondMessage: "Lar temporário",
      interrogacao: "?",
      comoFunciona: "Como funciona",
      items: [
        {
          text: "Início",
          disabled: false,
          href: "/",
        },
        {
          text: "Dê um lar temporário",
          disabled: false,
          href: window.location.href,
        },
      ],
    };
  },
};
</script>

<style>
.breadcrumbs {
  background: #503683;
  display: table;
  max-width: none;
  padding: 0;
}

.breadcrumbs ul {
  display: table;
  width: auto;
  margin: auto;
  padding: 0;
}

.breadcrumbs ul:before {
  content: url(../assets/icone-breadcrumbs.png);
  margin-right: 10px;
}

.breadcrumbs ul li a,
.breadcrumbs ul li i.v-icon {
  color: #c9bce2;
  font-weight: lighter;
}

.breadcrumbs ul li:last-child a {
  font-weight: bold;
  color: #fff;
}

.container-message {
  flex-direction: column;
}
.container-message .row {
  width: 100%;
  min-height: 100px;
  max-width: 1300px;
  margin: auto;
}

.como-funciona h3,
.como-funciona label {
  color: #fff;
  text-align: left;
  float: left;
  margin-top: 10px;
}

.como-funciona h3 i {
  color: #fff;
  margin-right: 4px;
  font-size: 20px;
}

.como-funciona .text-funciona {
  font-weight: 300;
  color: #ccc;
  line-height: 20px;
}

@media screen and (max-width: 960px) {
  .container-message .row {
    min-height: 40px;
  }

  .como-funciona h3,
  .como-funciona label {
    padding-left: 28px;
    padding-right: 28px;
  }
}
</style>
