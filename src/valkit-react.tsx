import { useMemo } from 'react'
import type { GetValue, ValueHandler } from './core'
import { valkit } from './core'

type ValkitProps<T, R, C> = {
  value: GetValue<T>
  handler: ValueHandler<T, R>
  render: (value: R) => C
}

export function Valkit<T, R, C>({ value, handler, render }: ValkitProps<T, R, C>) {
  const resolvedValue = useMemo(() => valkit(value, handler), [value, handler])
  return render(resolvedValue)
}
