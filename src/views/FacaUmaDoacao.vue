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
    <v-container class="container-banner">
      <v-row class="text-center row-banner" no-gutters>
        <v-col cols="12" sm="9">
          <a :href="links.linktree" target="blank">
            <v-img src="../assets/doacao/banner-doacao-principal.png" center>
            </v-img>
          </a>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="text-center anchor-button-doacao">
      <v-col>
        <a href="#ancora-doacao">
          <v-icon large color="secondary"> mdi-arrow-down </v-icon>
        </a>
      </v-col>
    </v-row>

    <v-container class="container-message-doacao" id="ancora-doacao">
      <v-row class="text-center mb-10 container-historia" no-gutters>
        <v-col cols="12" class="message">
          <p class="first-text-conheca">
            ?
            <span class="second-text-conheca">
              Qual o impacto das suas doações
            </span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="4">
          <v-img src="../assets/doacao/banner-doacao.png"></v-img>
        </v-col>
        <v-col cols="12" sm="8" class="paragraph-text-container">
          <h2 class="subtitle">
            Mais de 960 animais conseguiram ser adotados!
          </h2>
          <p class="paragraph-text">
            Esta é a felícia, ela tem apenas 6 meses e conseguiu ser adotada.
            Ela vai à feira de adoção desde os 45 dias. graças às doações da
            comunidade conseguimos resgatar muitos animais em situação de rua e
            mantê-los protegidos em lares temporários. Agradecemos à comunidade
            por todo apoio, sem vocês não conseguiríamos realizar este trabalho
            tão incrível!
          </p>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
    <v-container class="container-fundos no-max-width" lightbackground>
      <v-row class="margin-auto flex-center">
        <v-col cols="12" sm="8" class="central-text-fundos">
          <h2>Nós coletamos fundos para:</h2>
        </v-col>
      </v-row>
      <v-col class="horizontal-scroll" cols="12">
        <v-row class="text-center linha-scroll">
          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-consultas.png"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-cirurgias.png"></v-img>
          </v-col>

          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-vacinas.png"></v-img>
          </v-col>

          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-medicamentos.png"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-racao.png"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img src="../assets/doacao/fundos-acessorios.png"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <v-container class="container-cirurgias-tratamentos">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="8" class="paragraph-text-container">
          <h2 class="subtitle">
            Foram realizadas mais de 200 cirurgias e tratamentos
          </h2>
          <p class="paragraph-text">
            Esse é o Bill. Ele foi encontrado se arrastando na rua. Tinha
            pneumonia e suspeita de fraturas. Graças ao apoio da comunidade foi
            possível pagar as consultas e tratamento do Bill e de muitos outros
            animais que precisaram de tratamento.
          </p>
        </v-col>
        <v-col cols="4" class="d-none d-sm-flex">
          <v-img
            src="../assets/doacao/banner-cirurgias-tratamentos.png"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>

    <a class="btn-ajudar" :href="links.linktree" target="blank"
      >Quero fazer uma doação</a
    >
  </div>
</template>

<script>
export default {
  name: "FacaUmaDoacao",
  data() {
    return {
      firstMessage: "Faça uma",
      secondMessage: "Doação",
      items: [
        {
          text: "Início",
          disabled: false,
          href: "/",
        },
        {
          text: "Seja um voluntário",
          disabled: false,
          href: window.location.href,
        },
      ],
      links: {
        linktree: "https://linktr.ee/ONGAMAAR",
      },
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

.container-banner {
  text-align: center;
  background: #503683;
  max-width: none;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.container-banner .row-banner {
  text-align: center;
  justify-content: center;
  width: 100%;
}

.anchor-button-doacao {
  padding: 40px 0;
  background: #503683;
}

.container-message-doacao {
  background: #fff;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 260px;
  padding-top: 100px;
}

.container-fundos .linha-scroll {
  max-width: 1300px;
  margin: auto;
  justify-content: center;
}
.container-fundos {
  padding: 40px 0 80px;
}
.container-fundos h2 {
  font-weight: 800;
  font-size: 20px;
}
.container-fundos .central-text-fundos span {
  font-size: 17px;
  font-weight: 400;
  color: #666;
}
.central-text-fundos {
  text-align: center;
  color: #604298;
  margin-bottom: 10px;
}
.container-cirurgias-tratamentos {
  background: #fff;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 260px;
  padding: 50px 0 100px;
}

.container-cirurgias-tratamentos .subtitle {
  font-size: 20px;
}

.container-cirurgias-tratamentos .paragraph-text {
  margin-top: 10px;
}

.btn-ajudar {
  border-radius: 28px;
  background: #63ded1;
  color: #503683;
  font-size: 18px;
  font-weight: 700;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: table;
  margin: 0 auto 100px;
  transition: 0.3s all ease;
}

.btn-ajudar:hover {
  opacity: 0.7;
}

@media screen and (max-width: 960px) {
  .horizontal-scroll {
    overflow: scroll;
  }

  .container-fundos .linha-scroll {
    max-width: none;
    width: 1350px;
  }

  .container-fundos > .linha-scroll > div {
    max-width: 24%;
  }

  .container-cirurgias-tratamentos {
    padding: 50px 15px 100px;
  }
}
</style>
