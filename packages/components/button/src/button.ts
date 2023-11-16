import type { ExtractPropTypes, PropType } from 'vue'
import { Loading } from '@element-plus/icons-vue'
import type Button from './button.vue'

export const buttonEmits = {
  /**
   * ## 点击事件
   * @param evt
   * @returns
   */
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

/**
 * ## 使用type 来定义按钮的样式
 */
export type ButtonType =
  | ''
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'text'

/**
 * ## button type 的原始类型
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset'

/**
 * ## button 组件大小
 */
export type ButtonSize = '' | 'default' | 'small' | 'large'

export const buttonProps = {
  size: String as PropType<ButtonSize>,
  type: {
    type: String as PropType<ButtonType>,
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  disabled: Boolean,
  autofocus: Boolean,
  round: Boolean,
  plain: Boolean,
  circle: Boolean,

  // 扩展
  icon: {
    type: [Object, String] as PropType<object | string>,
    default: '',
  },
  loading: Boolean,
  loadingIcon: {
    type: [Object, String] as PropType<object | string>,
    default: () => Loading,
  },
} as const

/**
 * ## button props 类型
 */
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

/**
 * ## button 组件实例类型
 */
export type ButtonInstance = InstanceType<typeof Button>
