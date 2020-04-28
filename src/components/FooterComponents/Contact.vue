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
                        <ul class="footer-links">
                            <li class="instagram"><a href="https://www.instagram.com/ongamaar/">Instagram<i class="fab fa-instagram"></i></a></li>
                            <li class="facebook"><a href="https://www.facebook.com/ongamaar/">Facebook<i class="fab fa-facebook-f"></i></a></li>
                            <li class="whatsapp"><a href="">Whatsapp<i class="fab fa-whatsapp"></i></a></li>
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
    align-items: center;
    justify-content: flex-start!important;
}
.footer-links {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    padding-left: 0!important;
    margin-top: 27px;
}
.footer-links > li {
    font-size: 0;
    margin-right: 25px;
}
.footer-links a {
    color: #63DED1!important;
}
.footer-links i {
    transition: .3s all ease;
    font-size: 28px;
}
.footer-links .instagram:hover i {
    color: #c32aa3;
}
.footer-links .facebook:hover i {
    color: #3b5998;
}
.footer-links .whatsapp:hover i {
    color: #25d366;
}

</style>