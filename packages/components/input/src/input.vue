<!--
受控组件：可以通过非元素api控制的组件
非受控组件：非受控组件，顾名思义就是不受我们程序控制的组件。比如我们原生的 HTML input 表单

1. compositionstart
当用户使用拼音输入法开始输入汉字拼音时，这个事件就会被触发。
2. compositionupdate
拼音输入法，输入中触发
3. compositionend
拼音输入法，输入结束触发 -->

<template>
  <div :class="nsInput.b()">
    <input
      :type="type"
      ref="input"
      @input="handleInput"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
    />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks'
import { inputEmits, inputProps } from './input'
import { computed, nextTick, onMounted, shallowRef } from 'vue'
import { UPDATE_MODEL_EVENT } from '@aha-ui/constants'
import { formItemContextKey } from '@cobyte-ui/tokens'
const formItem = inject(formItemContextKey, undefined)

const nsInput = useNamespace('input')

defineOptions({
  name: 'ElInput',
})

const emit = defineEmits(inputEmits)
const props = defineProps(inputProps)

const nativeInputValue = computed(() => {
  return !props.modelValue ? '' : String(props.modelValue)
})

/**
 * ## input元素的 ref
 * 为了提升效率，只浅层监听了input元素
 */
const input = shallowRef<HTMLInputElement>()

/**
 * ## 只暴露input元素的value属性
 */
const _ref = computed(() => input.value)

/**
 * ## 设置表单的value
 */
const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

type TargetElement = HTMLInputElement | HTMLTextAreaElement

/**
 * ## 中文拼写开启
 */
let isComposing = false

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement

  if (isComposing) return
  // console.log('---', value)
  // 发射v-model 的 update:modelValue 监听事件
  emit(UPDATE_MODEL_EVENT, value)
  // 等待页面渲染刷新
  // 如果视图数据没有更新，那么视图上的props仍为上一次的值，执行更新表单的值就为旧的值
  await nextTick()
  // 更新input表单的值
  setNativeInputValue()
}

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing = true
}
const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}
const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing) {
    isComposing = false
    handleInput(event)
  }
}

onMounted(() => {
  setNativeInputValue()
})
</script>

<style></style>
