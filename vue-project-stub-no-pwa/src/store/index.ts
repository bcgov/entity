// Libraries
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

// State
import { stateModel, resourceModel } from './state'

// Actions
import { setName, setResource } from './actions'

// Mutations
import { mutateName, mutateResource } from '@/store/mutations'

Vue.use(Vuex)

export const store: Store<any> = new Vuex.Store<any>({
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
