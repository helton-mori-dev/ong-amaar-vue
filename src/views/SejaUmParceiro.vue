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
    
    <v-container class="container-message-dark">
      <v-row>
          <v-spacer></v-spacer>
          <v-col cols="6" class="central-text">
              Você quer ser um parceiro? Através das parcerias, a ONG conseguiu pagar muitas das suas dívidas. <br>
              Sua ajuda é muito importante!
          </v-col>
          <v-spacer></v-spacer>
      </v-row>
    </v-container>

    <v-container class="container-options" primary>
      <v-row class="text-center">
          <v-col cols="2"></v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2"></v-col>
      </v-row>
    </v-container>

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
            <p class="pergunta"><span>+</span> O que é necessário para ser um parceiro?</p>
            <p class="pergunta"><span>+</span> Como posso contribuir?</p>
            <p class="pergunta"><span>+</span> Por quanto tempo a parceria deve ocorrer?</p>
            <p class="pergunta"><span>+</span> Como tenho certeza que o serviço ou dinheiro está sendo bem empregado?</p>
        </v-row>
        <v-btn depressed large color="secondary" class="btn-lar">Quero ser um parceiro</v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SejaUmParceiro',
    data() {
      return {
        firstMessage: 'Seja um',
        secondMessage: 'Parceiro',
        exclamacao: '!',
        duvidasFrequentes: 'Dúvidas Frequentes'
      }
    }
  }
</script>

<style scoped>
.container-message-dark {
    background: #503683;
    color: #ccc;
    max-width: none;
}

.container-message-dark .central-text {
  font-size: 20px;
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
    width: 700px;
    border-top: 1px dashed #ded9e3;
    display: block;
    margin-bottom: 0;
    padding: 18px 0;
}

.container-duvidas .perguntas .pergunta:last-child {
    border-bottom: 1px dashed #ded9e3;
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
</style>