<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PageMessage />
    <HomeOptions />
    <ConhecaOng />
  </div>
</template>

<script>
// @ is an alias to /src
import PageMessage from '@/components/ContentComponents/PageMessage.vue'
import HomeOptions from '@/components/ContentComponents/HomeOptions.vue'
import ConhecaOng from '@/components/ContentComponents/ConhecaOng.vue'


export default {
  name: 'Home',
  components: {
    PageMessage,
    HomeOptions,
    ConhecaOng
  }
}
</script>
