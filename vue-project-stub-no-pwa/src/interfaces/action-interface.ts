import { ActionContext } from 'vuex'
import { StateModelIF, ResourceExampleIF } from './'

// Define root state type for Vuex 4
export interface RootState {
  stateModel: StateModelIF;
  resourceModel: ResourceExampleIF[];
}

// Interface to define a Vuex Action
export interface ActionIF {
  (context: ActionContext<RootState, RootState>, payload: any): void
}

export interface ActionBindingIF {
  (payload: any): void
}
