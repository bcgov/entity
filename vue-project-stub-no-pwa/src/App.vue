<template>
  <v-app id="app">
    <div class="app-body">
      <Header/>
      <main>
        <router-view />
      </main>
    </div>
  </v-app>
</template>

<script lang="ts">
// Libraries
import { defineComponent } from 'vue'

// Components
import { Header } from '@/components/common'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style lang="scss">
</style>
