// Libraries
import { computed } from 'vue'
import { useStore } from 'vuex'

// Interfaces
import { ResourceExampleIF } from '@/interfaces'

/**
 * Composable for components to retrieve text/settings from json resource.
 */
export function useResourceLookup() {
  const store = useStore()
  const resourceModel = computed(() => store.state.resourceModel)

  /**
   * Method to return the specified message
   *
   * @param id ID a number indicating the id of the resource to look up.
   */
  const getName = (id: number): string => {
    const user: ResourceExampleIF | undefined = resourceModel.value && 
      resourceModel.value.find((user: ResourceExampleIF) => user.id === id)
    return user ? user.displayName : ''
  }

  /**
   * Method to return the specified display Name
   *
   * @param id ID a number indicating the id of the resource to look up.
   */
  const getMessage = (id: number): string => {
    const user: ResourceExampleIF | undefined = resourceModel.value && 
      resourceModel.value.find((user: ResourceExampleIF) => user.id === id)
    return user ? user.message : ''
  }

  return {
    getName,
    getMessage
  }
}