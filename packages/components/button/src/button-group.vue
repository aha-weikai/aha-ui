<!-- 通过按钮组来控制一组按钮的大小和类型 -->
<template>
  <div :class="ns.b('group')">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { buttonGroupContextKey } from '@aha-ui/tokens'
import { provide, reactive, toRef } from 'vue'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ElButtonGroup',
})

const props = defineProps(buttonGroupProps)
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)

const ns = useNamespace('button')
</script>

<style></style>
