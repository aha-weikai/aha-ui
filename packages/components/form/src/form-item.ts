import { definePropType } from '@aha-ui/utils'
import type { Arrayable } from '@aha-ui/utils'
import type { FormItemRule } from '@aha-ui/tokens'
import type FormItem from './form-item.vue'
import { ExtractPropTypes } from 'vue'

export const formItemValidateStates = [
  '',
  'error',
  'validating',
  'success',
] as const

export type FormItemValidateState = (typeof formItemValidateStates)[number]
export type FormItemProp = Arrayable<string>

export const formItemProps = {
  label: String,
  /** model 的键名 */
  prop: String,
  rules: {
    // 保证类型准确性
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
}

export type FormItemProps = ExtractPropTypes<typeof formItemProps>

export type FormItemInstance = InstanceType<typeof FormItem>

// 如果不适用definePropType，需要像下面这样写
export const formItemProps0 = {
  rules: {
    type: [Object, Array] as Arrayable<FormItemRule>,
  },
}
