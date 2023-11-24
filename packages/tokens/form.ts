import { Arrayable } from '@aha-ui/utils'
import { InjectionKey } from 'vue'
import type { RuleItem } from 'async-validator'
import { FormItemProps, formItemProps } from '@aha-ui/components/form'

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')

export interface FormItemContext extends FormItemProps {
  validate(trigger: string): Promise<any>
}
