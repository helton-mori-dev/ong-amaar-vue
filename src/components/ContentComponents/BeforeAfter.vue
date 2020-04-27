<template>
  <v-container class="container-antes-depois no-max-width" lightbackground>
    
    <v-row class="margin-auto flex-center">
        <v-col cols="8" class="central-text-antes-depois">
            <h2>Antes / Depois</h2>
            <span>A ONG Amaar resgatou muitos animais em situação de rua. Confira a foto de antes e depois de alguns dos bichinhos que passaram por aqui!</span>
        </v-col>
    </v-row>
    <v-row class="text-center">
        <v-col cols="3">
            <v-img src="../../assets/antesdepois1.jpg"></v-img>
        </v-col>
        <v-col cols="3">
            <v-img src="../../assets/antesdepois2.jpg"></v-img>
        </v-col>

        <v-col cols="3">
            <v-img src="../../assets/antesdepois3.jpg"></v-img>
        </v-col>

        <v-col cols="3">
            <v-img src="../../assets/antesdepois4.jpg"></v-img>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'BeforeAfter',
  }
</script>

<style>
.no-max-width {
  max-width: none;
}
.margin-auto {
  margin: auto;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.container-antes-depois > .row {
    max-width: 1300px;
    margin: auto;
    justify-content: center;
}
.container-antes-depois {
    padding: 40px 0 80px;
}
.container-antes-depois h2 {
  font-weight: 800;
  font-size: 24px;
  padding-bottom: 20px;
}

.container-antes-depois .central-text-antes-depois span{
  font-size: 17px;
  font-weight: 400;
  color: #666;
}
.central-text-antes-depois {
    text-align: center;
    color: #604298;
    margin-bottom: 10px;
}
</style>