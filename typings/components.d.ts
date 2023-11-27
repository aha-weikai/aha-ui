import ElIcon from '@aha-ui/components/icon'
import { ElButton, ElButtonGroup } from '@aha-ui/components/button'
import type { ElFormItem, Form, FormItem } from '@aha-ui/components/form'
import type ElInput from '@aha-ui/components/input'

import '@vue/runtime-core'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    ElIcon: typeof ElIcon
    ElButton: typeof ElButton
    ElInput: typeof ElInput
    ElButtonGroup: typeof ElButtonGroup
    ElFormItem: typeof ElFormItem
    ElForm: typeof ElForm
  }
}
export {}
