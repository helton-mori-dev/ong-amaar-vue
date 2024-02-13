<template>
  <v-container class="container-message-quote">
    <v-row class="text-center" no-gutters>
      <v-col cols="12" class="message">
        <p class="quotes-style">
          <span class="left-quote quote">&ldquo;</span>
          <span class="right-quote quote">&rdquo;</span>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10" sm="6" class="central-text-quote" v-html="quote">
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OngQuote",
  data() {
    return {
      quote: `Fazemos isso por amor aos animais, o trabalho é <br> 100% voluntário, e damos o nosso melhor para fazê-lo de maneira correta,<br> ética e completa.`,
    };
  },
};
</script>

<style>
.container-message-quote {
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-height: 260px;
  padding: 150px 0;
}
.central-text-quote {
  text-align: center;
  margin: 0 0 60px 0;
  font-size: 20px;
  position: relative;
  z-index: 1;
  font-weight: 600;
  color: #604298;
}

.quotes-style {
  position: relative;
  color: #eee9f3;
  font-weight: 800;
  line-height: 0;
  font-size: 400px;
}

.quote {
  position: absolute;
  z-index: 0;
}

.left-quote {
  top: 130px;
  left: 24%;
}

.right-quote {
  right: 24%;
  top: 182px;
}

@media screen and (max-width: 960px) {
  .quotes-style {
    font-size: 200px;
  }

  .quote {
    position: absolute;
    z-index: 0;
  }

  .left-quote {
    top: 60px;
    left: 2%;
  }

  .right-quote {
    right: 2%;
    top: 210px;
  }
}
</style>
