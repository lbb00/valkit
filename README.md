# Valkit
[![Npm](https://badgen.net/npm/v/valkit)](https://www.npmjs.com/package/valkit)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/valkit)](https://bundlephobia.com/result?p=valkit)
[![Coverage](https://img.shields.io/codecov/c/github/lbb00/valkit.svg)](https://codecov.io/gh/lbb00/valkit)
![Typescript](https://img.shields.io/badge/TS-Typescript-blue)
[![License](https://img.shields.io/github/license/lbb00/valkit.svg)](https://github.com/lbb00/valkit/blob/master/LICENSE)
[![Npm download](https://img.shields.io/npm/dw/valkit.svg)](https://www.npmjs.com/package/valkit)


## Usage

### Core

```ts
valkit(1, (v) => v) // 1
valkit(
  () => 1,
  (v) => v
) // 1
```

### React

```tsx
<Valkit value={1} handler={(v) => v} render={(v) => <div>{v}</div>} />
```

### Vue

```vue
<template>
  <Valkit :value="1" :handler="(v) => v">
    <template #default="{ value }">
      <div>{{ value }}</div>
    </template>
  </Valkit>
</template>
```
