<template>
  <form :class="ns.b()">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { formContextKey, formItemContextKey } from '@aha-ui/tokens'
import { formProps } from './form'
import { provide, reactive, toRefs } from 'vue'

const ns = useNamespace('form')

defineOptions({
  name: 'ElForm',
})

const props = defineProps(formProps)

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
  })
)
</script>

<style></style>
