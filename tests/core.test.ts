import { safe, valkit, valkitIs } from '../src/core'
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

describe('valkit/core - safe', () => {
  it('should return the value', () => {
    expect(safe(1)).toBe(1)
  })

  it('should return the fallback', () => {
    expect(
      safe(() => {
        throw new Error('test')
      }, 1)
    ).toBe(1)
  })

  it('should return undefined if no fallback', () => {
    expect(
      safe(() => {
        throw new Error('test')
      })
    ).toBe(undefined)
  })
})
