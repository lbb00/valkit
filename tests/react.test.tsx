import React from 'react'
import { Valkit } from '../src/react/valkit-react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

describe('valkit react', () => {
  it('Valkit should return the value', () => {
    const { container } = render(<Valkit value={1} resolver={(v) => v} render={(v) => <div>{v}</div>} />)
    expect(container.innerHTML).toBe('<div>1</div>')
  })
})
