import { Arrayable } from '@aha-ui/utils'
import type { RuleItem } from 'async-validator'

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}
