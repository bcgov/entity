<template>
  <div id="app">
    <std-header></std-header>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import StdHeader from '@/components/StdHeader.vue';

export default {
  name: 'home',
  components: {
    StdHeader,
  },
};
</script>
<style lang="stylus">

body
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50


</style>
