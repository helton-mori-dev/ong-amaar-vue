<template>
    <v-footer class="main-footer">
        <Contact />
        <MiniFooter />
    </v-footer>
</template>

<script>
import Contact from '../FooterComponents/Contact'
import MiniFooter from '../FooterComponents/MiniFooter'

export default {
    name: 'Footer',
    components: {
        Contact,
        MiniFooter
    }
}    
</script>

<style>
.main-footer {
    padding: 0!important;
}
</style>