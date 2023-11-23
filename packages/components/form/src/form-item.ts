import { definePropType } from '@aha-ui/utils'
import type { Arrayable } from '@aha-ui/utils'
import type { FormItemRule } from '@aha-ui/tokens'

export const formItemProps = {
  label: String,
  prop: String,
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
}
