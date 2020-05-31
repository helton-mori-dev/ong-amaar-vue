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
    <v-container class="container-banner">
      <v-row class="text-center row-banner" no-gutters>
        <v-col cols="9">
          <v-img 
            src="../assets/doacao/banner-doacao-principal.png"
            center
            >
          </v-img>
        </v-col>
          
      </v-row>
    </v-container>
      <v-row class="text-center anchor-button-doacao">
          <v-col>
              <a href="#ancora-doacao">
                  <v-icon large color="secondary">
                      mdi-arrow-down
                  </v-icon>
              </a>
                  
          </v-col>
      </v-row>

    
  <v-container class="container-message-doacao" id="ancora-doacao">
    <v-row class="text-center mb-10 container-historia" no-gutters>
      <v-col cols="12" class="message">
          <p class="first-text-conheca">
              ?
              <span class="second-text-conheca">
                  Qual o impacto das suas doações
              </span>
          </p>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="4">
          <v-img src="../assets/doacao/banner-doacao.png"></v-img>
      </v-col>
      <v-col cols="12" sm="8" class="paragraph-text-container">
          <h2 class="subtitle">Mais de 960 animais conseguiram ser adotados!</h2>
          <p class="paragraph-text">Esta é a felícia, ela tem apenas 6 meses e conseguiu ser adotada. Ela vai à feira de adoção desde os 45 dias. graças às doações da comunidade conseguimos resgatar muitos animais em situação de rua e mantê-los protegidos em lares temporários. Agradecemos à comunidade por todo apoio, sem vocês não conseguiríamos realizar este trabalho tão incrível!</p>
        
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>

  </div>
</template>

<script>
  export default {
    name: 'FacaUmaDoacao',
    data() {
      return {
        firstMessage: 'Faça uma',
        secondMessage: 'Doação'
      }
    }
  }
</script>

<style>
.container-banner {
  text-align: center;
  background: #503683;
  max-width: none;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.container-banner .row-banner {
  text-align: center;
  justify-content: center;  
}
.anchor-button-doacao {
    padding: 40px 0;
    background: #503683;
}

.container-message-doacao {
    background:  #fff;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 260px;
    padding-top: 100px;
}

</style>