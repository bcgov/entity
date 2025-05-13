<template>
  <v-card>
    <h1>Welcome {{name}}</h1>
    <p>This is your message: {{message}}</p>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ResourceExample',
  props: {
    name: {
      type: String as PropType<string>,
      default: ''
    },
    message: {
      type: String as PropType<string>,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
