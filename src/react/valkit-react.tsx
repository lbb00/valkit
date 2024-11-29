import { useMemo } from 'react'
import type { Value, ValueResolver } from '../core'
import { valkit } from '../core'

export type ValkitResolveProps<T, R, C> = {
  value: Value<T>
  resolver: ValueResolver<T, R>
  render: (value: R) => C
}

export function ValkitResolve<T, R, C>({ value, resolver, render }: ValkitResolveProps<T, R, C>) {
  const resolvedValue = useMemo(() => valkit(value, resolver), [value, resolver])
  return render(resolvedValue)
}
export const Valkit = ValkitResolve
