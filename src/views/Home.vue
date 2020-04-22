<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PageMessage />
    <HomeOptions />
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageMessage from '@/components/ContentComponents/PageMessage.vue'
import HomeOptions from '@/components/ContentComponents/HomeOptions.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageMessage,
    HomeOptions
  }
}
</script>
