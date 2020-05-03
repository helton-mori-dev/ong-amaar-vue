<template>
    <v-container class="container-options" primary>
        <v-row class="text-center">
            <v-col cols="2" class="adote">
                <v-img class="img-adote" height="320px" src="../../assets/adote.png"></v-img>
                <v-img class="adote-hover d-none" height="320px" src="../../assets/adote-hover.png"></v-img>
                <a class="options-link" target="blank" href="https://www.instagram.com/ongamaar/">Adote um<span>Animalzinho</span></a>
            </v-col>
            <v-col cols="2" class="temporario">
                <v-img class="img-temporario" height="320px" src="../../assets/temporario.png"></v-img>
                <v-img class="temporario-hover d-none" height="320px" src="../../assets/temporario-hover.png"></v-img>
                <a class="options-link" href="/lartemporario">Dê um<span>Lar temporário</span></a>
            </v-col>

            <v-col cols="2" class="doacao">
                <v-img class="img-doacao" height="320px" src="../../assets/doacao.png"></v-img>
                <v-img class="doacao-hover d-none" height="320px" src="../../assets/doacao-hover.png"></v-img>
                <a class="options-link" href="#">Faça uma<span>Doação</span></a>
            </v-col>

            <v-col cols="2" class="parceiro">
                <v-img class="img-parceiro" height="320px" src="../../assets/parceiro.png"></v-img>
                <v-img class="parceiro-hover d-none" height="320px" src="../../assets/parceiro-hover.png"></v-img>
                <a class="options-link" href="sejaumparceiro">Seja um<span>parceiro</span></a>
            </v-col>
            <v-col cols="2" class="voluntario">
                <v-img class="img-voluntario" height="320px" src="../../assets/voluntario.png"></v-img>
                <v-img class="voluntario-hover d-none" height="320px" src="../../assets/voluntario-hover.png"></v-img>
                <a class="options-link" href="sejaumvoluntario">Seja um<span>Voluntário</span></a>
            </v-col>
        </v-row>
        <v-row class="text-center anchor-button">
            <v-col>
                <a href="#ancora">
                    <v-icon large color="secondary">
                        mdi-arrow-down
                    </v-icon>
                </a>
                    
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

.anchor-button {
    padding: 80px 0;
}

.container-options .adote:hover .img-adote{
    display: none;
}
.container-options .adote:hover .adote-hover{
    display: flex!important;
}

.container-options .temporario:hover .img-temporario{
    display: none;
}
.container-options .temporario:hover .temporario-hover{
    display: flex!important;
}

.container-options .doacao:hover .img-doacao{
    display: none;
}
.container-options .doacao:hover .doacao-hover{
    display: flex!important;
}

.container-options .parceiro:hover .img-parceiro{
    display: none;
}
.container-options .parceiro:hover .parceiro-hover{
    display: flex!important;
}

.container-options .voluntario:hover .img-voluntario{
    display: none;
}
.container-options .voluntario:hover .voluntario-hover{
    display: flex!important;
}
</style>