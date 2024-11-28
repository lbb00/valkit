<template>
  <slot :value="rValue" />
</template>

<script setup lang="ts" generic="T, R">
import { computed } from 'vue'
import type { GetValue, ValueHandler } from './core'
import { valkit } from './core'

const props = defineProps<{
  value: GetValue<T>
  handler: ValueHandler<T, R>
}>()

const rValue = computed(() => valkit(props.value, props.handler))
</script>
