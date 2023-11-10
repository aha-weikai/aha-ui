<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { iconProps } from './icon'
import { computed, type CSSProperties } from 'vue'
import { addUnit, isUndefined } from '@aha-ui/utils'

const bem = useNamespace('icon')

const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color, // 通过css变量
  }
})
</script>

<style scoped></style>
