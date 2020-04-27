<template>
  <v-container class="container-contato" primary>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" class="paragraph-text-container">
            <h2 class="subtitle">Entre em contato!</h2>
        </v-col>
        <v-col cols="6">
            <h3>Feirinha de Adoção</h3>
            <span>
                Praça do Bem - Em frente ao ATI do Ingá<br>
                Entre a Av. XV de Novembro e São Paulo <br>
                Domingo das 9h às 17h            
            </span>
            <ul>
                <li>Instagram</li>
                <li>Face</li>
                <li>Whats</li>
            </ul>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style>
.container-contato {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 260px;
    padding-top: 150px;
}
</style>