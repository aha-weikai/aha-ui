import { definePropType, isArray, isBoolean, isString } from '@aha-ui/utils'
import type { FormRules } from '@aha-ui/tokens'
import { ExtractPropTypes } from 'vue'
import type Form from './form.vue'
import { FormItemProp } from './form-item'

export const formProps = {
  model: Object,
  rules: {
    type: definePropType<FormRules>(Object),
  },
} as const

export type FormProps = ExtractPropTypes<typeof formProps>
export type FormInstance = InstanceType<typeof Form>

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}

export type FormEmits = typeof formEmits
