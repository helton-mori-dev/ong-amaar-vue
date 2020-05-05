<template>
    <v-footer class="main-footer">
        <Contact />
        <FooterMap />
        <MiniFooter />
    </v-footer>
</template>

<script>
import Contact from '../FooterComponents/Contact'
import MiniFooter from '../FooterComponents/MiniFooter'
import FooterMap from '../FooterComponents/FooterMap'

export default {
    name: 'Footer',
    components: {
        Contact,
        MiniFooter,
        FooterMap
    }
}    
</script>

<style>
.main-footer {
    padding: 0!important;
}
</style>