// 通过按钮组来控制一组按钮的大小和类型
import { buttonProps } from './button'
import type { ExtractPropTypes } from 'vue'
import type ButtonGroup from './button-group.vue'

export const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type,
} as const

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
