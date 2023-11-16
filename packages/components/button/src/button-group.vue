<!-- 通过按钮组来控制一组按钮的大小和类型 -->
<template>
  <div :class="ns.b('group')">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ElButtonGroup',
})

defineProps(buttonGroupProps)

const ns = useNamespace('button')
</script>

<style></style>
