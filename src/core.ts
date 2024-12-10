export type Value<T> = (() => T) | T

function getValue<T>(value: Value<T>): T {
  return typeof value === 'function' ? (value as () => T)() : value
}

export type ValueResolver<T, R> = (value: T) => R
export const valkitResolve = <T, R>(value: Value<T>, resolver: ValueResolver<T, R>): R => resolver(getValue(value))
export const valkit = valkitResolve

export type ValuePredicate<T> = (value: T) => boolean
export function valkitIs<T, R extends T = NonNullable<T>>(value: Value<T>, predicate: ValuePredicate<T>): value is R {
  return valkitResolve(value, predicate)
}
export const is = valkitIs

export type ValueFallback<R> = ((error: unknown) => R) | R
export function valkitSafe<R>(value: Value<R>, fallback?: ValueFallback<R>) {
  try {
    return getValue(value)
  } catch (error) {
    return typeof fallback === 'function' ? (fallback as (error: unknown) => R)(error) : fallback
  }
}
export const safe = valkitSafe
