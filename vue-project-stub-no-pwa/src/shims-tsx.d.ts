import { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass {
      $props: {}
    }
    interface IntrinsicElements {
      // JSX elements will be converted to their respective types
    }
  }
}
