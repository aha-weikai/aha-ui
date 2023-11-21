import { isString } from '@vue/shared'
import type { ExtractPropTypes, PropType } from 'vue'
import { UPDATE_MODEL_EVENT } from '@aha-ui/constants'
import type Input from './input.vue'

export const inputProps = {
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
}

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
}

export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
