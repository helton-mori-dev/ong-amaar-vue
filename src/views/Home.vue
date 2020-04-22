<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PageMessage />
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageMessage from '@/components/ContentComponents/PageMessage.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageMessage
  }
}
</script>
