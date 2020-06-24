<template>
    <v-container class="container-duvidas" no-gutters>
        <v-row class="text-center" no-gutters >
            <v-col cols="12" class="message">
                <h2 class="first-text" style="line-height: 0">
                {{ exclamacao }}            
                    <span class="second-text" style="font-size: 36px">
                    {{ duvidasFrequentes }}                
                    </span>
                </h2>
            </v-col>
        </v-row>
        <v-row class="perguntas">
            <p class="pergunta" v-on:click="show1 = !show1"><span>+</span> Qualquer pessoa pode ser voluntário?</p>
                <p class="resposta" v-show="show1">Sim, qualquer pessoa, basta ter disponibilidade de tempo e amor para dedicar aos animais.</p>
            <p class="pergunta" v-on:click="show2 = !show2"><span>+</span> Quanto tempo preciso disponibilizar para o trabalho voluntário?</p>
                <p class="resposta" v-show="show2">Aos domingos, em escala de revezemento com outros voluntários</p>
            <p class="pergunta" v-on:click="show3 = !show3"><span>+</span> Posso conhecer a instituição antes?</p>
                <p class="resposta" v-show="show3">Venha nos visitar aos domingos</p>
            <p class="pergunta" v-on:click="show4 = !show4"><span>+</span> É preciso ter formação profissional?</p>
                <p class="resposta" v-show="show4">Não, apenas vontade de ajudar.</p>
        </v-row>
        <v-btn depressed large color="secondary" class="btn-lar">Quero dar lar temporário</v-btn>
    </v-container>
</template>

<script>

export default {
  name: 'Duvidas',
  data () {
      return {
          exclamacao: '!',
          duvidasFrequentes: 'Dúvidas Frequentes',
          show1: false,
          show2: false,
          show3: false,
          show4: false
      }
  }
};
</script>

<style>
.pergunta {
    cursor: pointer;
}

.resposta {
    max-width: 700px;
}

.container-duvidas {
    width: 100%;
    min-height: 200px;
    padding: 90px 0 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* background: #eee9f3; 
    Tem que ser branco, pra ficar de acordo com a inicial*/
    background: #fff;
    max-width: none;
}

.container-duvidas .second-text {
    color: #503683;
}

.container-duvidas .first-text {
    color: #ded9e3;
}

.container-duvidas .perguntas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 90px;
}

.container-duvidas .perguntas .pergunta {
    color: #503683;
    font-weight: 700;    
    border-top: 1px dashed #cec9d3;
    display: block;
    margin-bottom: 0;
    padding: 18px 0;
    width: 100%;
}

.container-duvidas .perguntas .pergunta:last-child {
    border-bottom: 1px dashed #cec9d3;
}

.container-duvidas .perguntas .pergunta span{
    color: #62ded0;
    font-size: 20px;
    line-height: 10px;
}

.btn-lar.v-btn {
    color: #503683;
    text-transform: initial;
    font-weight: 700;
    width: auto;
    display: table;
    margin: 80px auto;
    border-radius: 30px;
    transition: .3s all ease;
}

@media screen and (min-width:960px) {
    .container-duvidas .perguntas .pergunta {
        width: 700px;
    }
}

@media screen and (max-width:960px) {
    .container-duvidas {
        padding-top: 50px;
    }
}
</style>