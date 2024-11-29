import { valkit, valkitIs } from '../src/core'
import { describe, it, expect } from 'vitest'

describe('valkit/core - resolver', () => {
  it('should return the value', () => {
    expect(valkit(1, (v) => v)).toBe(1)
    expect(
      valkit(
        () => 1,
        (v) => v
      )
    ).toBe(1)
  })
})

describe('valkit/core - is', () => {
  it('should return the boolean', () => {
    type O = {
      a?: {
        b?: string[]
      }
    }
    const o = { a: { b: ['ok'] } }
    expect(valkitIs(o.a?.b, (v) => !!v)).toBe(true)
  })
})
