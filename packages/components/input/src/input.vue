<template>
  <div :class="nsInput.b()">
    <input :type="type" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { inputEmits, inputProps } from './input'

defineOptions({
  name: 'ElInput',
})

defineProps(inputProps)

defineEmits(inputEmits)

const nsInput = useNamespace('input')
</script>

<style></style>
