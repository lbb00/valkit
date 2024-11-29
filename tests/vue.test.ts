import { describe, it, expect } from 'vitest'
import { Valkit } from '../src/vue/valkit-vue'
import { mount } from '@vue/test-utils'

describe('valkit vue', () => {
  it('Valkit should return the value', () => {
    const wrapper = mount(Valkit, {
      props: {
        value: 1,
        resolver: (v) => v,
      },
      slots: {
        default: '<div>{{ value }}</div>',
      },
    })
    expect(wrapper.html()).toBe('<div>1</div>')
  })
})
