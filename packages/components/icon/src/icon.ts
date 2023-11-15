import type { ExtractPropTypes, PropType } from 'vue'
import type Icon from './icon.vue'

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

// 打包时候，生成 .d.ts文件
export type Props = ExtractPropTypes<typeof iconProps>

export type IconInstance = InstanceType<typeof Icon>
