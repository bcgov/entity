<template>
  <div class="mixinExample">
    <h1>This is an about page that contains an example for a Mixin</h1>
    <h2>Testing Mixins: {{ sendMsg('My First Message')}}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCommon } from '@/composables'

export default defineComponent({
  name: 'MixinExample',
  setup() {
    const { sendMsg } = useCommon()
    
    return {
      sendMsg
    }
  }
})
</script>
