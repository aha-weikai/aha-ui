<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { ref } from 'vue'
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'ElButton',
})

defineProps(buttonProps)

const emit = defineEmits(buttonEmits)

/**
 * ## 按钮 html元素
 */
const _ref = ref<HTMLButtonElement>()

const ns = useNamespace('button')

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

/**
 * ## 组件暴露自己的属性以及方法，供外部使用
 */
defineExpose({
  ref: _ref,
})
</script>

<style></style>
