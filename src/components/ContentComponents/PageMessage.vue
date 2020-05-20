<template>
  <v-container class="container-message">
    <v-row class="text-center" no-gutters>
      <v-col cols="12" class="message">
          <p class="first-text">
              {{ firstMessage }}
              <span class="second-text">
                {{ secondMessage }}                  
              </span>
          </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PageMessage',
    data() {
      return {
        firstMessage: 'E você?',
        secondMessage: 'Quer ajudar? ;)'
      }
    }
  }
</script>

<style>
.container-message {
    background:  #503683;
    max-width: none;
    display: flex;
    justify-content: center;
    min-height: 260px;
    padding-top: 150px;
    
}
.first-text {
    font-size: 122px;
    color: #604298;
    font-weight: 800;
    line-height: 11px;
    letter-spacing: -2px;
}
.second-text {
    font-size: 46px;
    color: #fff;
    display: block;
    font-weight: 700;
    letter-spacing: 0;
}

@media screen and (max-width: 960px) {
  .container-message {
    padding-top: 125px;
    min-height: 200px;
  }

  .first-text {
    font-size: 4rem;
    line-height: 0;
    font-weight: bolder;
  }
  .second-text {
    font-size: 1.5rem;
  }
}
</style>