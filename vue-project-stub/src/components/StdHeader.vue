<template>
  <v-app-bar dark color="#003366">
    <router-link to="/" class="navbar-brand router-link-never-mark-active">
      <img src="@/assets/images/gov3_bc_logo.png"
           alt="Province of British Columbia"
           title="Province of British Columbia logo"/>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn to="/" text dark class="hidden-xs-only">Home</v-btn>
    <v-btn to="/" icon class="hidden-md-and-up"><v-icon>mdi-home</v-icon></v-btn>

    <v-btn to="/about" text dark class="hidden-xs-only">About</v-btn>
    <v-btn to="/about" icon class="hidden-md-and-up"><v-icon>mdi-information</v-icon></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StdHeader'
})
</script>

<style scoped>
.navbar-brand {
  margin-bottom: 13px;
}
</style>
