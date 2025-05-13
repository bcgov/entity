import { shallowMount } from '@vue/test-utils'
import { HelloWorld } from '@/components/Home'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg } // Changed from propsData to props for Vue 3
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
