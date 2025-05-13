<template>
  <v-card>
    <div class="stateExample">
      <h1>This is an about page that contains an example for state</h1>
      <p>{{ stateModel.stateText }}</p>
    </div>

    <!-- Resourced Component example #1 -->
    <ResourceExample
      :name="getName(1)"
      :message="getMessage(1)"
    />

    <!-- Resourced Component example #2-->
    <ResourceExample
      :name="getName(2)"
      :message="getMessage(2)"
    />
  </v-card>
</template>
<script lang="ts">
// Libraries
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

// Components
import { ResourceExample } from '@/components/common'

// Resources
import { ExternalResource } from '@/resources'

// Composables
import { useResourceLookup } from '@/composables'

export default defineComponent({
  name: 'StateExample',
  components: {
    ResourceExample
  },
  setup() {
    // Use store and mixins as composables
    const store = useStore()
    const { getName, getMessage } = useResourceLookup()

    onMounted(() => {
      // Example of setting the State of a string
      store.dispatch('setName', 'Testing My Actions and Mutations: Congratulations... it worked!')

      // Example of setting the State of a Resource
      store.dispatch('setResource', ExternalResource)
    })

    return {
      stateModel: store.state.stateModel,
      getName,
      getMessage
    }
  }
})
</script>
