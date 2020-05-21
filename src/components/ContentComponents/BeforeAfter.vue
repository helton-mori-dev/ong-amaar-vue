<template>
  <v-container class="container-antes-depois no-max-width" lightbackground>
    
    <v-row class="margin-auto flex-center">
        <v-col cols="12" sm="8" class="central-text-antes-depois">
            <h2>Antes / Depois</h2>
            <span>A ONG Amaar resgatou muitos animais em situação de rua. Confira a foto de antes e depois de alguns dos bichinhos que passaram por aqui!</span>
        </v-col>
    </v-row>
    <v-col class="horizontal-scroll" cols="12">
      <v-row class="text-center linha-scroll">
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
    </v-col>
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
.container-antes-depois .linha-scroll {
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
@media screen and (max-width: 960px) {

  .horizontal-scroll {
    overflow: scroll;    
  }

  .container-antes-depois .linha-scroll {
      max-width: none;
      width: 1350px;
  }

  .container-antes-depois > .linha-scroll > div {
    max-width: 24%;
  }
}
</style>