// Libraries
import { createVuetify } from 'vuetify'
import { store } from '@/store'
import { shallowMount } from '@vue/test-utils'

// Components
import StateExample from '@/views/StateExample.vue'
import { ResourceExample } from '@/components/common'

// Create a Vuetify instance for Vue 3
const vuetify = createVuetify()

describe('HelloWorld.vue', () => {
  let wrapper: any

  beforeEach(() => {
    // create wrapper for Dashboard
    // this stubs out the sub-component
    wrapper = shallowMount(StateExample, { 
      global: {
        plugins: [store, vuetify] // Use global for plugins in Vue 3
      }
    })
  })

  afterEach(() => {
    // In Vue Test Utils 2.x, destroy() is replaced with unmount()
    wrapper.unmount()
  })

  it('renders the sub-components properly', () => {
    expect(wrapper.find(ResourceExample).exists()).toBe(true)
  })

  it('displays the appropriate welcome message', () => {
    expect(wrapper.vm.$el.querySelector('.stateExample').textContent)
      .toContain('Congratulations... it worked!')
  })
})
