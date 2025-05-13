<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
// Libraries
import { defineComponent } from 'vue'

// Components
import { HelloWorld } from '@/components/Home'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>
<style lang="scss">
  .home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
