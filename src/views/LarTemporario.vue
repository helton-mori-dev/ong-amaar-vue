<template>
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
</template>

<script>
  export default {
    name: 'LarTemporario',
    data() {
      return {
        firstMessage: 'Dê um',
        secondMessage: 'Lar temporário'
      }
    }
  }
</script>

<style>
/**/
</style>