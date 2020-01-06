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
import { Component, Vue } from 'vue-property-decorator'

// Components
import { Header } from '@/components/common'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
