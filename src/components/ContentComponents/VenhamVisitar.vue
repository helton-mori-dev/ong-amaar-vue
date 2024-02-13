<template>
  <v-container class="container-venham-conhecer">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="8" class="paragraph-text-container">
        <h2 class="subtitle">{{ subtitle }}</h2>
        <p
          class="paragraph-text"
          v-for="paragrafo in paragrafos"
          :key="paragrafo"
        >
          {{ paragrafo }}
        </p>
      </v-col>
      <v-col cols="4" class="d-none d-sm-flex">
        <v-img src="../../assets/bannervenhamvisitar.jpg"></v-img>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "VenhamVisitar",
  data() {
    return {
      subtitle: "Venham nos visitar!",
      paragrafos: [
        "Não vamos conseguir mudar o mundo, mas mudamos o mundo de cada animal que passa por nossas mãos.",
        "Agradecemos em nome de todos os bichinhos à todas as pessoas que nos ajudaram até aqui e continuam nos ajudando. Aproveitamos pra convidá-los a conhecer nossa feira de adoção, que ocorre todos os domingos na Praça do Bem, temos diversos tipos de animais para alegrar ainda mais a sua casa.",
        "Quem quiser doar ou ser voluntário, é só entrar em contato com uma de nós, inbox ou no Instagram. Com o dinheiro arrecadado, conseguimos tirar muitos animais da rua e oferecer um lar adequado para cada um deles. Caso queiram ajudar, entre em contato com a gente. Temos diversas formas de auxílio para ao ONG Amaar.",
      ],
    };
  },
};
</script>

<style>
.container-venham-conhecer {
  background: #fff;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 260px;
  padding: 150px 0;
}

@media screen and (max-width: 960px) {
  .container-venham-conhecer {
    padding: 40px 20px;
  }
}
</style>
