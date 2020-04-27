<template>
  <v-container class="container-venham-conhecer">
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="8" class="paragraph-text-container">
            <h2 class="subtitle">Venham nos visitar!</h2>
            <p class="paragraph-text"> 
              Não vamos conseguir mudar o mundo, mas mudamos o mundo de cada animal que passa por nossas mãos. </p>
            
            <p class="paragraph-text">
                Agradecemos em nome de todos os bichinhos à todas as pessoas que nos ajudaram até aqui e continuam nos ajudando. Aproveitamos pra convidá-los a conhecer nossa feira de adoção, que ocorre todos os domingos na Praça do Bem, temos diversos tipos de animais para alegrar ainda mais a sua casa.
            </p>
            <p class="paragraph-text">
              Quem quiser doar ou ser voluntário, é só entrar em contato com uma de nós, inbox ou no Instagram. Com o dinheiro arrecadado, conseguimos tirar muitos animais da rua e oferecer um lar adequado para cada um deles. Caso queiram ajudar, entre em contato com a gente. Temos diversas formas de auxílio para ao ONG Amaar.
            </p>
        </v-col>
        <v-col cols="4">
            <v-img src="../../assets/bannervenhamvisitar.jpg"></v-img>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'VenhamVisitar',
  }
</script>

<style>
.container-venham-conhecer {
    background:  #fff;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 260px;
    padding-top: 150px;
}
</style>