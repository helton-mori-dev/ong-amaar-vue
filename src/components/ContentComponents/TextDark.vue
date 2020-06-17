<template>
  <v-container class="container-message-dark">
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" class="central-text">
            {{ textoD }}
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'TextDark',
    data () {
      return {
        textoD: "A ONG Amaar não tem abrigo. Precisamos da ajuda da comunidade para abrigar os pets resgatados. Graças a esta contribuição, conseguimos resgatar e fazer a doação de muitos animais. Venha fazer parte desta família e colabora com o lar temporário. Você só precisa ter um espacinho em casa e muito amor e compreensão com estes bichinhos."
      }
    }
  }
</script>

<style>
.container-message-dark {
    background: #503683;
    color: #ccc;
    max-width: none;
}
</style>