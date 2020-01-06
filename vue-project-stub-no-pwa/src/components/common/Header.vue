<template>
  <header class="app-header">
    <div class="container">
      <a href="/basePath/" class="brand">
        <span class="brand__title">BC Registries <span class="brand__title--wrap">& Online Services</span></span>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/theme.scss";

$app-header-font-color: #ffffff;

.app-header {
  height: 70px;
  color: $app-header-font-color;
  border-bottom: 2px solid $BCgovGold5;
  background-color: $BCgovBlue5;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.brand {
  display: flex;
  align-items: center;
  padding-right: 1rem;
  text-decoration: none;
  color: inherit;
}

.brand__image {
  display: block;
  margin-right: 1.25rem;
  max-height: 70px;
}

.brand__title {
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 600px) {
  .brand__image {
    margin-right: 0.75rem;
    margin-left: -0.15rem;
  }

  .brand__title {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .brand__title--wrap {
    display: block;
  }
}
</style>
