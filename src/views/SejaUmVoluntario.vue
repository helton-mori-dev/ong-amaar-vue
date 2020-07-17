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

    <v-container class="breadcrumbs">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-container class="container-message-voluntario" style="padding: 100px 0px 50px;">
      <v-row class="text-center" no-gutters >
        <v-col cols="12" class="message">
          <h2 class="first-text-voluntario" style="line-height: 0">
            {{ interrogacao }}            
              <span class="second-text-voluntario" style="font-size: 36px">
                {{ comoFunciona }}                
              </span>
          </h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="container-message-voluntario">
      <v-row class="text-center como-funciona-voluntario">
          <v-col cols="12" sm="3">
            <v-img src="../assets/seja-voluntario/resgate.jpg" height="413px" contain></v-img>
            <h3><v-icon>mdi-cards-heart</v-icon>Resgates e Lar Temporário</h3>
            <label class="text-funciona">Precisamos de voluntários para auxiliar nos resgates e toda manutenção do pet no lar temporário.</label>
          </v-col>
          <v-col cols="12" sm="3">
            <v-img src="../assets/seja-voluntario/cirurgias.jpg" height="413px" contain></v-img>
            <h3><v-icon>mdi-medical-bag</v-icon>Cirurgias e vacinas</h3>
            <label class="text-funciona">Muitos animais vem com algum trauma físico. O volunt´rio deve ajudar com o acompanhamento para cirurgias e vacinas.</label>  
          </v-col>
          <v-col cols="12" sm="3">
            <v-img src="../assets/seja-voluntario/feira.jpg" height="413px" contain></v-img>
            <h3><v-icon>mdi-paw</v-icon>Feira de adoção</h3>
            <label class="text-funciona">Todos os domingos realizamos a feira da Amaar, precisamos de voluntários para auxiliar na montagem da feira e na adoção dos animais.</label>  
          </v-col>
          <v-col cols="12" sm="3">
            <v-img src="../assets/seja-voluntario/acompanhamento.jpg" height="413px" contain></v-img>
            <h3><v-icon>mdi-home</v-icon>Acompanhamento</h3>
            <label class="text-funciona">Após a adoção do animalzinho, o voluntário deve auxiliar no acompanhamento do animalzinho para ver como está sendo a sua adoção.</label>  
          </v-col>
      </v-row>
    </v-container>

    <v-container class="container-duvidas" no-gutters>
        <v-row class="text-center" no-gutters >
            <v-col cols="12" class="message">
                <h2 class="first-text" style="line-height: 0">
                {{ exclamacao }}            
                    <span class="second-text" style="font-size: 36px">
                    {{ duvidasFrequentes }}                
                    </span>
                </h2>
            </v-col>
        </v-row>
        <v-row class="perguntas">
            <p class="pergunta" v-on:click="show1 = !show1"><span>+</span> O que é necessário para ser um voluntário?</p>
            <p class="resposta" v-show="show1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?</p>
            <p class="pergunta" v-on:click="show2 = !show2"><span>+</span> Quanto tempo preciso disponibilizar para o trabalho voluntário?</p>
            <p class="resposta" v-show="show2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?</p>
            <p class="pergunta" v-on:click="show3 = !show3"><span>+</span> Posso conhecer a instituição antes?</p>
            <p class="resposta" v-show="show3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?</p>
            <p class="pergunta" v-on:click="show4 = !show4"><span>+</span> É preciso ter alguma formação profissional?</p>
            <p class="resposta" v-show="show4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque delectus reiciendis id consequuntur dolores laudantium nobis blanditiis a laborum totam culpa sequi nisi, iste dolore neque veritatis fuga consectetur?</p>
        </v-row>
        <v-btn depressed large color="secondary" class="btn-lar">Faça parte da Equipe Amaar</v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SejaUmVoluntario',
    data() {
      return {
        firstMessage: 'Seja um',
        secondMessage: 'Voluntário',
        exclamacao: '!',
        duvidasFrequentes: 'Dúvidas Frequentes',
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        interrogacao: '?',
        comoFunciona: 'Como funciona',
        items: [
          {
            text: 'Início',
            disabled: false,
            href: '/',
          },
          {
            text: 'Seja um voluntário',
            disabled: false,
            href: window.location.href,
          },
        ],
      }
    }
  }
</script>


<style>
.breadcrumbs {
  background: #503683;
  display: table;
  max-width: none;
  padding-top: 0;
}

.breadcrumbs ul {
  display: table;
  width: auto;
  margin: auto;
  padding-top: 0;
}

.breadcrumbs ul:before{
  content: url(../assets/icone-breadcrumbs.png);
  margin-right: 10px;
}

.breadcrumbs ul li a, .breadcrumbs ul li i.v-icon{
  color: #c9bce2;
  font-weight: lighter;
}

.breadcrumbs ul li:last-child a{
  font-weight: bold;
  color: #fff;
}

.como-funciona-voluntario h3, .como-funciona-voluntario label{
  color: #503683;
  text-align: left;
  float: left;
  margin-top: 10px;
}

.como-funciona-voluntario h3 i {
  color: #503683!important;
  margin-right: 4px;
  font-size: 20px;
}

.como-funciona-voluntario .text-funciona{
  font-weight: 300;
  color: #333;
  line-height: 20px;
}

@media screen and (max-width:960px){
  .container-message .row{
    min-height: 40px;
  }

  .como-funciona-voluntario h3, .como-funciona-voluntario label {
    padding-left: 28px;
    padding-right: 28px;
  }
}

.container-message-voluntario {
  max-width: none;
  display: flex;
  justify-content: center;
  min-height: 140px;
  padding-top: 20px;
  max-width: 1300px;
  padding-bottom: 10px;
}

.container-message-dark {
    background: #503683;
    color: #ccc;
    max-width: none;
}

.pergunta {
    cursor: pointer;
}

.resposta {
    max-width: 700px;
}

.first-text-voluntario {
    font-size: 122px;
    color: #ccc;
    font-weight: 800;
    line-height: 11px;
    letter-spacing: -2px;
}
.second-text-voluntario {
    font-size: 46px;
    color: #604298;
    display: block;
    font-weight: 700;
    letter-spacing: 0;
}

.container-message-dark .central-text {
  font-size: 20px;
}

.container-duvidas {
    width: 100%;
    min-height: 200px;
    padding: 90px 0 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* background: #eee9f3; 
    Tem que ser branco, pra ficar de acordo com a inicial*/
    background: #fff;
    max-width: none;
}

.container-duvidas .second-text {
    color: #503683;
}

.container-duvidas .first-text {
    color: #ded9e3;
}

.container-duvidas .perguntas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 90px;
}

.container-duvidas .perguntas .pergunta {
    color: #503683;
    font-weight: 700;
    border-top: 1px dashed #ded9e3;
    display: block;
    margin-bottom: 0;
    padding: 18px 0;
}

.container-duvidas .perguntas .pergunta:last-child {
    border-bottom: 1px dashed #ded9e3;
}

.container-duvidas .perguntas .pergunta span{
    color: #62ded0;
    font-size: 20px;
    line-height: 10px;
}

.btn-lar.v-btn {
    color: #503683;
    text-transform: initial;
    font-weight: 700;
    width: auto;
    display: table;
    margin: 80px auto;
    border-radius: 30px;
    transition: .3s all ease;
}

@media screen and (min-width:960px) {
    .container-duvidas .perguntas .pergunta {
        width: 700px;
    }
}

@media screen and (max-width:960px) {
    .container-duvidas {
        padding-top: 50px;
    }
    .container-duvidas .second-text {
      font-size: 22px;
    }
}
</style>