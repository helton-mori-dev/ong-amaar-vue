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

<style scoped>

</style>