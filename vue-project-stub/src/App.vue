<template>
  <div id="app">
    <std-header></std-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StdHeader from '@/components/StdHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    StdHeader
  }
})
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
