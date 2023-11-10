import type { ExtractPropTypes, PropType } from 'vue'

// 定义props类型
// 但为什么不直接是ts类型
// export const iconProps = {
//   color: String,
//   size: [Number, String],
// } as const

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

export type Props = ExtractPropTypes<typeof iconProps>
