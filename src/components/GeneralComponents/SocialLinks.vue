<template>
    <ul class="social-links">
        <li class="instagram"><a href="https://www.instagram.com/ongamaar/">Instagram<i class="fab fa-instagram"></i></a></li>
        <li class="facebook"><a href="https://www.facebook.com/ongamaar/">Facebook<i class="fab fa-facebook-f"></i></a></li>
        <li class="whatsapp"><a href="/">Whatsapp<i class="fab fa-whatsapp"></i></a></li>
    </ul>
</template>

<script>
export default {
    name: 'SocialLinks'
}
</script>

<style>
.social-links {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    padding-left: 0!important;
    margin-top: 27px;
}
.social-links > li {
    font-size: 0;
    margin-right: 25px;
}
.social-links a {
    color: #63DED1!important;
}
.social-links i {
    transition: .3s all ease;
    font-size: 28px;
}
.social-links .instagram:hover i {
    color: #c32aa3;
}
.social-links .facebook:hover i {
    color: #3b5998;
}
.social-links .whatsapp:hover i {
    color: #25d366;
}

</style>