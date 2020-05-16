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
  </div>
</template>

<script>
  export default {
    name: 'SejaUmParceiro',
    data() {
      return {
        firstMessage: 'Seja um',
        secondMessage: 'Parceiro'
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
</style>