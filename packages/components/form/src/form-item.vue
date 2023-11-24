<template>
  <div :class="ns.b()">
    <label :class="ns.e('label')">
      {{ label }}
    </label>
    <div :class="ns.e('content')">
      <slot></slot>
      <div :class="ns.e('error')">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@aha-ui/hooks/use-namespace'
import { formItemProps } from './form-item'
import { provide, reactive, ref, toRefs } from 'vue'
import { FormItemContext, formItemContextKey } from '@aha-ui/tokens'

const ns = useNamespace('form-item')

defineOptions({
  name: 'ElFormItem',
})

const props = defineProps(formItemProps)
/**
 * ## 校验的错误消息
 */
const validateMessage = ref('')

const validate: FormItemContext['validate'] = async (trigger) => {
  console.log('trigger', trigger)
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validate,
})

provide(formItemContextKey, context)
</script>

<style></style>
