<template>
  <v-container class="container-message-conheca" id="ancora-conheca-ong">
    <v-row class="text-center" no-gutters>
      <v-col cols="12" class="message">
          <p class="first-text-conheca">
              Conheça a
              <span class="second-text-conheca">
                  ONG Amaar
              </span>
          </p>
      </v-col>
    </v-row>
    <v-row >
        <v-spacer></v-spacer>
        <v-col cols="12" sm="8" class="central-text">
            Nós somos o Grupo AMAAR, Associação Maringaense de Ajuda aos Animais Resgatados. Somos uma equipe de pessoas comuns que trabalham, estudam tem família e enfrentam batalhas do dia-a-dia como qualquer outro cidadão, mas que doam um pouco de seu tempo para a causa animal.
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="4">
            <v-img src="../../assets/oquefazemos.jpg"></v-img>
        </v-col>
        <v-col cols="12" sm="8" class="paragraph-text-container">
            <h2 class="subtitle">O que fazemos?</h2>
            <p class="paragraph-text">Fazemos um trabalho de resgate, recuperação, esterilização, adoção mediante entrevista e acompanhamento pós-adoção. </p>
            
            <p class="paragraph-text">
                Nossa capacidade de resgate é muito limitada, pois não temos abrigo e nem dinheiro, dependemos de pessoas solidárias que hospedam os animais em suas casas até que sejam adotados e dependemos de doações para mantê-los e para pagar as clínicas veterinárias, as quais não temos palavras pra agradecer pela parceria fantástica, por todos os descontos e principalmente todo carinho e dedicação que sempre dão aos nossos resgatados. 
            </p>
            <p class="paragraph-text">

                Nossa feira de adoção acontece há 5 anos, todos os domingos das 9:30 às 17:00 na Praça do Bem (em frente à ATI do Parque do Ingá). As vagas da feira são voltadas principalmente aos nossos resgates, aos animais da ONG Dignidade Animal à qual temos uma parceria, e à animais resgatados por pessoas da comunidade. Além disso, fazemos um trabalho de conscientização e orientação à todos que buscam por nossa ajuda de alguma maneira.
            </p>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ConhecaOng',
  }
</script>

<style>
.container-message-conheca {
    background:  #fff;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 260px;
    padding-top: 150px;
}
.first-text-conheca {
    font-size: 122px;
    color: #eee9f3;
    font-weight: 800;
    line-height: 11px;
    letter-spacing: -2px;
}
.second-text-conheca {
    font-size: 46px;
    color: #604298;
    display: block;
    font-weight: 700;
    letter-spacing: 0;
}
.central-text {
    text-align: center;
    margin: 60px 0;
    font-size: 17px;
}
.paragraph-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.paragraph-text {
    font-size: 17px;
    margin: 28px 0;
    display: block;
}
.subtitle {
    font-size: 26px;
    font-weight: 700;
    color: #604298;
}

@media screen and (max-width: 960px) {
  .container-message-conheca {
    padding-top: 100px;
    min-height: 200px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .container-message-conheca .central-text{
      text-align: left;
  }

  .first-text-conheca {
    font-size: 4rem;
    line-height: 6px;
    font-weight: bolder;
  }
  .second-text-conheca {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 960px) {
    .paragraph-text-container {
        padding-left: 50px;
    }
}
</style>