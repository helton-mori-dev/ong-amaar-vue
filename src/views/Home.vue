<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PageMessage />
    <HomeOptions />
    <ConhecaOng />
    <OngQuote />
    <BeforeAfter />
    <VenhamVisitar />
  </div>
</template>

<script>
// @ is an alias to /src
import PageMessage from '@/components/ContentComponents/PageMessage.vue'
import HomeOptions from '@/components/ContentComponents/HomeOptions.vue'
import ConhecaOng from '@/components/ContentComponents/ConhecaOng.vue'
import OngQuote from '@/components/ContentComponents/OngQuote.vue'
import BeforeAfter from '@/components/ContentComponents/BeforeAfter.vue'
import VenhamVisitar from '@/components/ContentComponents/VenhamVisitar.vue'

export default {
  name: 'Home',
  components: {
    PageMessage,
    HomeOptions,
    ConhecaOng,
    OngQuote,
    BeforeAfter,
    VenhamVisitar
  }
}
</script>
