<template>
  <slot :value="rValue" />
</template>

<script setup lang="ts" generic="T, R">
import { computed } from 'vue'
import type { Value, ValueResolver } from '../core'
import { valkit } from '../core'

const props = defineProps<{
  value: Value<T>
  resolver: ValueResolver<T, R>
}>()

const rValue = computed(() => valkit(props.value, props.resolver))
</script>
