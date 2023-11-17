<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
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
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>

    <el-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon"></slot>
    </el-icon>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { computed, inject, ref } from 'vue'
import { buttonEmits, buttonProps } from './button'
import { ButtonGroupContext, buttonGroupContextKey } from '@aha-ui/tokens'

defineOptions({
  name: 'ElButton',
})

const props = defineProps(buttonProps)

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
 * ## 取出组件提供的context
 */
const buttonGroupContext = inject<ButtonGroupContext | undefined>(
  buttonGroupContextKey,
  undefined
)
const _size = computed(() => props.size || buttonGroupContext?.size)
const _type = computed(() => props.size || buttonGroupContext?.type || '')

/**
 * ## 组件暴露自己的属性以及方法，供外部使用
 */
defineExpose({
  ref: _ref,
})
</script>

<style></style>
