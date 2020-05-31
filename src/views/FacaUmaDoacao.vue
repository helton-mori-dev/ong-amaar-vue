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
    <v-row class="text-center" no-gutters>
      <v-col cols="12" class="message">
          <p class="first-text-conheca">
              ?
              <span class="second-text-conheca">
                  Qual o impacto das suas doações
              </span>
          </p>
      </v-col>
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
    max-width: 1300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 260px;
    padding-top: 150px;
}
</style>