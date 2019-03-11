<template>
  <v-toolbar dark color="#003366">

    <router-link to="/" class="navbar-brand router-link-never-mark-active">
      <img src="@/assets/images/gov3_bc_logo.png"
           alt="Province of British Columbia"
           title="Province of British Columbia logo"/>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn to="/" flat dark class="hidden-xs-only">Home</v-btn>
    <v-btn to="/" flat icon class="hidden-md-and-up"><v-icon>home</v-icon></v-btn>

    <v-btn to="/about" flat dark class="hidden-xs-only">About</v-btn>
    <v-btn to="/about" flat icon class="hidden-md-and-up"><v-icon>info</v-icon></v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: 'std-header',
};
</script>

<style scoped>

  .navbar-brand {
    margin-bottom: 13px;
  }

  /*
  #header-main {
    background-color: #003366;
    border: none;
    border-bottom: 2px solid #fcba19;
    padding-bottom: 5px;
    box-shadow: 0px 5px 10px 0px rgba(169,169,169,1);
    height: 63px;
  }

  .navbar {
    padding-left: 40px;
    padding-bottom: 13px;
    right: 0;
    left: 0;

  }

  .navbar-brand {
    float: left;
  }

  .navbar-brand img {
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  */

</style>
