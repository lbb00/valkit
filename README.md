# Valkit

[![Npm](https://badgen.net/npm/v/valkit)](https://www.npmjs.com/package/valkit)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/valkit)](https://bundlephobia.com/result?p=valkit)
[![Coverage](https://img.shields.io/codecov/c/github/lbb00/valkit.svg)](https://codecov.io/gh/lbb00/valkit)
![Typescript](https://img.shields.io/badge/TS-Typescript-blue)
[![License](https://img.shields.io/github/license/lbb00/valkit.svg)](https://github.com/lbb00/valkit/blob/master/LICENSE)
[![Npm download](https://img.shields.io/npm/dw/valkit.svg)](https://www.npmjs.com/package/valkit)

Valkit is a lightweight utility library designed to simplify value processing.

Supports React(16+), Vue(3+), and TypeScript.

## Examples

In Vue Template's for loop, it's often necessary to process some values of item, for example:

```html
<template>
  <div v-for="item in items" :key="item.id">
    <img v-if="item.cover || item.image" :src="item.cover || item.image" />
    <div>{{ item.name }}</div>
  </div>
</template>
```

Valkit helps reuse value-processing code:

```html
<template>
  <div v-for="item in items" :key="item.id">
    <Valkit :value="item" :resolver="(item) => item.cover || item.image">
      <template #default="{ value: cover }">
        <img v-if="cover" :src="cover" />
        <div>{{ item.name }}</div>
      </template>
    </Valkit>
  </div>
</template>
```

## Usage

### Core

- `valkit(value, resolver)`
- `valkitResolve(value, resolver)`
- `valkitIs(value, predicate)`
- `valkitSafe(value, fallback)`

```ts
import { valkit, valkitResolve, valkitIs, valkitSafe } from 'valkit'
valkit(1, (v) => v) // 1
valkit(
  () => 1,
  (v) => v
) // 1

valkitIs(1, (v) => v === 1) // true

valkitSafe(1) // 1
valkitSafe(() => {
  throw new Error('test')
}, 1) // 1
```

### React

- `Valkit`
- `ValkitResolve`

```jsx
import { Valkit } from 'valkit/react'

const Component = () => <Valkit value={1} resolver={(v) => v} render={(v) => <div>{v}</div>} />
```

### Vue

- `Valkit`
- `ValkitResolve`

```html
<script setup>
  import { Valkit } from 'valkit/vue'
</script>

<template>
  <Valkit :value="1" :resolver="(v) => v">
    <template #default="{ value }">
      <div>{{ value }}</div>
    </template>
  </Valkit>
</template>
```
