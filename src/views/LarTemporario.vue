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
    <TextDark />
    <v-container class="container-message" style="padding-top: 40px">
      <v-row class="text-center" no-gutters>
        <v-col cols="12" class="message">
          <h1 class="first-text" style="line-height: 0">
            {{ interrogacao }}            
              <span class="second-text" style="font-size: 36px">
                {{ comoFunciona }}                
              </span>
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TextDark from '@/components/ContentComponents/TextDark.vue'
  export default {
    name: 'LarTemporario',
    components: {
      TextDark
    },
    data() {
      return {
        firstMessage: 'Dê um',
        secondMessage: 'Lar temporário',
        interrogacao: '?',
        comoFunciona: 'Como funciona'
      }
    }
  }
</script>

<style>
/**/
</style>