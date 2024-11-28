export type GetValue<T> = (() => T) | T
export type ValueHandler<T, R> = (value: T) => R

export const valkit = <T, R>(getValue: GetValue<T>, handler: ValueHandler<T, R>): R =>
  handler(typeof getValue === 'function' ? getValue() : getValue)
