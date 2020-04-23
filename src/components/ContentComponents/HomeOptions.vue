<template>
    <v-container class="container-options" primary>
        <v-row class="text-center">
            <v-col cols="2">
                <v-img height="320px" src="../../assets/adote.png"></v-img>
                <a class="options-link" href="https://www.instagram.com/ongamaar/">Adote um<span>Animalzinho</span></a>
            </v-col>
            <v-col cols="2">
                <v-img height="320px" src="../../assets/temporario.png"></v-img>
                <a class="options-link" href="/lartemporario">Dê um<span>Lar temporário</span></a>
            </v-col>

            <v-col cols="2">
                <v-img height="320px" src="../../assets/doacao.png"></v-img>
                <a class="options-link" href="#">Faça uma<span>Doação</span></a>
            </v-col>

            <v-col cols="2">
                <v-img height="320px" src="../../assets/parceiro.png"></v-img>
                <a class="options-link" href="sejaumparceiro">Seja um<span>parceiro</span></a>
            </v-col>
            <v-col cols="2">
                <v-img height="320px" src="../../assets/voluntario.png"></v-img>
                <a class="options-link" href="sejaumvoluntario">Seja um<span>Voluntário</span></a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'HomeOptions',
  }
</script>

<style>

.container-options {
    background:  #503683;
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
    color: #63DED1;
    text-decoration: none;
    font-weight: 300;
    padding-top: 15px;
    display: block;
    line-height: 20px;
}

.container-options .options-link span{
    display: block;
    font-weight: 900;
}
</style>