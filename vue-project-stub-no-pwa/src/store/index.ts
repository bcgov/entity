// Libraries
import { createStore, Store } from 'vuex'

// State
import { stateModel, resourceModel } from './state'

// Actions
import { setName, setResource } from './actions'

// Mutations
import { mutateName, mutateResource } from '@/store/mutations'

// Interfaces
import { RootState } from '@/interfaces'

// Create the store with proper typing
export const store = createStore<RootState>({
  state: {
    stateModel,
    resourceModel
  },
  mutations: {
    mutateName,
    mutateResource
  },
  actions: {
    setName,
    setResource
  }
})
