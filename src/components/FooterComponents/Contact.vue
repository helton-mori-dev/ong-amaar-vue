<template>
  <v-container primary class="no-max-width">
        <v-container class="container-contato" >
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="6" class="paragraph-text-container subtitle-content-footer">
                    <h2 class="subtitle">Entre em contato :)</h2>
                </v-col>
                <v-col cols="6">
                    <div class="mini-container">
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
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
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
    padding: 70px 50px;
    color: #fff;
}

.container-contato h2 {
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    color: #fff;
}

.container-contato h3 {
    margin-bottom: 20px;
}

.container-contato .mini-container {
    display: table;
    margin: auto
}

.container-contato .mini-container span {
    color: #ccc;
    font-weight: 300;
}
.subtitle-content-footer {
    align-items: center!important;
    justify-content: flex-start;
}
</style>