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
            <p class="pergunta"><span>+</span> Qualquer pessoa pode ser voluntário?</p>
            <p class="pergunta"><span>+</span> Quanto tempo preciso disponibilizar para o trabalho voluntário?</p>
            <p class="pergunta"><span>+</span> Posso conhecer a instituição antes?</p>
            <p class="pergunta"><span>+</span> É preciso ter formação profissional?</p>
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
          duvidasFrequentes: 'Dúvidas Frequentes'
      }
  }
};
</script>

<style>
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