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
import { computed, inject, provide, reactive, ref, toRefs } from 'vue'
import {
  FormContext,
  FormItemContext,
  FormItemRule,
  FormValidateFailure,
  formContextKey,
  formItemContextKey,
} from '@aha-ui/tokens'
import { Arrayable } from '@aha-ui/utils'
import AsyncValidator from 'async-validator'

defineOptions({ name: 'ElFormItem' })

const ns = useNamespace('form-item')

const props = defineProps(formItemProps)

/**
 * ## 校验的错误消息
 */
const validateMessage = ref('')
// const formItemClasses = computed(() => [
//   ns.b(),
//   ns.is('error', validateState.value === 'error'),
//   ns.is('success', validateState.value === 'success'),
// ])

const formContext = inject<FormContext | undefined>(formContextKey, undefined)

/**
 * rules 合并form和form-item中的rules
 */
const _rules = computed(() => {
  const rules: FormItemRule[] = ensureArray(props.rules)
  const formRules = formContext?.rules
  // 当form组件的rules存在，且form-当form组件的rules存在，且form-item的prop属性也需要存在，才进行rule合并，prop 为键名
  if (formRules && props.prop) {
    const _rules = formRules[props.prop]
    if (_rules) {
      // 在合并前同样通过ensureArray 函数统一处理成数组
      rules.push(...ensureArray(_rules))
    }
  }
  return rules
})

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors } = error

  validateMessage.value = errors
    ? errors[0].message ?? `${props.prop} is required`
    : ''

  formContext?.emit('validate', props.prop!, false, validateMessage.value)
}

const onValidationSucceeded = () => {
  validateMessage.value = ''
  console.log(props.prop)
  formContext?.emit('validate', props.prop!, true, '')
}

const validate: FormItemContext['validate'] = async (trigger) => {
  const rules = getFilteredRule(trigger)
  console.log('trigger', trigger, rules)
  // 获取form-item的prop 属性
  const modelName = props.prop!
  // 获取form 组件的model属性
  const model = formContext!.model!
  console.log(modelName, model)

  // 声明校验实例对象
  const validator = new AsyncValidator({
    [modelName]: rules,
  })
  return validator
    .validate({ [modelName]: model[modelName] }, { firstFields: true })
    .then(() => {
      onValidationSucceeded()
    })
    .catch((err: any) => {
      onValidationFailed(err)
      return Promise.reject(err)
    })
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validate,
})

provide(formItemContextKey, context)

/**
 * ## 获取过滤后的rules
 * @param trigger 触发方式
 */
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
 * @returns rules[]
 */
const ensureArray = (rules: Arrayable<FormItemRule> | undefined) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}
</script>

<style></style>
