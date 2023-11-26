import { definePropType } from '@aha-ui/utils'
import type { FormRules } from '@aha-ui/tokens'

export const formProps = {
  model: Object,
  rules: {
    type: definePropType<FormRules>(Object),
  },
} as const
