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
import { computed, provide, reactive, ref, toRefs } from 'vue'
import {
  FormItemContext,
  FormItemRule,
  formItemContextKey,
} from '@aha-ui/tokens'
import { Arrayable } from '@aha-ui/utils'

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
  const rules = getFilteredRule(trigger)
  console.log('trigger', trigger, rules)
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validate,
})

const getFilteredRule = (trigger: string) => {
  const rules = _rules.value
  return rules.filter((rule) => {
    // 如果规则中没写出发方式或trigger不存在，这种情况全部校验
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) {
      // 如果trigger是数组，则判断数组中有没有包含当前出发的方式
      return rule.trigger.includes(trigger)
    } else {
      // 如果trigger 是字符串则判断规则中的trigger是否相同
      return rule.trigger === trigger
    }
  })
}

/**
 * ## 将规则校验统一处理成数组
 * @param rules
 */
const ensureArray = (rules: Arrayable<FormItemRule> | undefined) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}
const _rules = computed(() => {
  const rules: FormItemRule[] = props.rules
    ? Array.isArray(props.rules)
      ? props.rules
      : [props.rules]
    : []
  return rules
})

provide(formItemContextKey, context)
</script>

<style></style>
