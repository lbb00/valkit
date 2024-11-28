import { valkit } from '../src/core'
import { describe, it, expect } from 'vitest'

describe('valkit', () => {
  it('should return the value', () => {
    expect(valkit(1, v => v)).toBe(1)
    expect(valkit(() => 1, v => v)).toBe(1)
  })
})
