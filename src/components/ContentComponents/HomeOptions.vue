<template>
    <v-container class="container-options" primary>
        <v-row class="text-center d-none d-sm-none d-md-flex">
            <v-col cols="2" class="adote">                                
                <a class="options-link" target="blank" href="https://www.instagram.com/ongamaar/">
                    <div class="img-adote"></div>
                    Adote um<span> Animalzinho</span>
                </a>
            </v-col>
            <v-col cols="2" class="temporario">      
                <a class="options-link" href="/lartemporario">
                    <div class="img-temporario"></div>   
                    <p>Dê um</p>
                    <span> Lar temporário</span>
                </a>
            </v-col>
            <v-col cols="2" class="doacao">             
                <a class="options-link" href="/facaumadoacao">
                    <div class="img-doacao"></div>   
                    Faça uma<span> Doação</span>
                </a>
            </v-col>
            <v-col cols="2" class="parceiro">
                <a class="options-link" href="sejaumparceiro">
                    <div class="img-parceiro"></div>
                    Seja um<span> parceiro</span>
                </a>
            </v-col>
            <v-col cols="2" class="voluntario">                
                <a class="options-link" href="sejaumvoluntario">
                    <div class="img-voluntario"></div>
                    Seja um<span> Voluntário</span>
                </a>
            </v-col>
        </v-row>
        <v-row class="d-flex d-md-none">
            <v-col cols="12" class="adote">
                <v-img class="img-adote" src="../../assets/adote-mobile.png"></v-img>
                <a class="options-link" target="blank" href="https://www.instagram.com/ongamaar/">Adote um<span> Animalzinho</span></a>
            </v-col>
            <v-col cols="12" class="temporario">
                <v-img class="img-temporario" src="../../assets/temporario-mobile.png"></v-img>
                <a class="options-link" href="/lartemporario">Dê um<span> Lar temporário</span></a>
            </v-col>

            <v-col cols="12" class="doacao">
                <v-img class="img-doacao" src="../../assets/doacao-mobile.png"></v-img>
                <a class="options-link" href="/facaumadoacao">Faça uma<span> Doação</span></a>
            </v-col>

            <v-col cols="12" class="parceiro">
                <v-img class="img-parceiro" src="../../assets/parceiro-mobile.png"></v-img>
                <a class="options-link" href="sejaumparceiro">Seja um<span> parceiro</span></a>
            </v-col>
            <v-col cols="12" class="voluntario">
                <v-img class="img-voluntario" src="../../assets/voluntario-mobile.png"></v-img>
                <a class="options-link" href="sejaumvoluntario">Seja um<span> Voluntário</span></a>
            </v-col>
        </v-row>
        <v-row class="text-center anchor-button">
            <v-col>
                <a href="#ancora-conheca-ong">
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
    font-weight: 900;
}

.anchor-button {
    padding: 80px 0;
}


@media screen and (max-width:960px) {
    .container-options .options-link {
        width: 100%;
        text-align: center;
    }
}

@media screen and (min-width:960px){
    .container-options .options-link span{
        display: block;
        font-weight: 900;
    }

    .container-options a div {
        margin-bottom: 15px;
    }

    .container-options a p {
        margin-bottom: 0;
    }

    .container-options .adote  {
        padding-left: 0;
    }

    .container-options .temporario  {
        padding-left: 0;
    }

    .container-options .temporario  a{
        text-indent: 30px;
    }

    .container-options .adote .img-adote{        
        display: block;
        height: 314px;
        width: 220px;
        background-image: url('../../../public/home-hover/adote.png');
    }

    .container-options .adote:hover .img-adote{        
        background-position: 0 -314px;
    }

    .container-options .temporario .img-temporario{
        display: block;
        height: 313px;
        width: 220px;
        background-image: url('../../../public/home-hover/temporario.png');
    }

    .container-options .temporario:hover .img-temporario{        
        background-position: 0 -313px;
    }

    .container-options .doacao .img-doacao{
        display: block;
        height: 313px;
        width: 220px;
        background-image: url('../../../public/home-hover/doacao.png');
    }

    .container-options .doacao:hover .img-doacao{        
        background-position: 0 -314px;
    }

    .container-options .parceiro .img-parceiro{
        display: block;
        height: 314px;
        width: 220px;
        background-image: url('../../../public/home-hover/parceiro.png');
    }

    .container-options .parceiro:hover .img-parceiro{        
        background-position: 0 -314px;
    }

    .container-options .voluntario .img-voluntario{
        display: block;
        height: 314px;
        width: 220px;
        background-image: url('../../../public/home-hover/voluntario.png');
    }

    .container-options .voluntario:hover .img-voluntario{        
        background-position: 0 -314px;
    }
}
</style>