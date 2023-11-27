import { FormEmits, FormItemProps, FormProps } from '@aha-ui/components/form'
import { Arrayable } from '@aha-ui/utils'
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from 'async-validator'
import { InjectionKey, SetupContext } from 'vue'

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export type FormRules = Partial<Record<string, Arrayable<FormItemRule>>>

export type FormValidateCallback = (isValid: boolean) => void

export type FormContext = FormProps & {
  emit: SetupContext<FormEmits>['emit']
  addField: (field: FormItemContext) => void
}
export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')

export interface FormItemContext extends FormItemProps {
  validate(trigger: string): Promise<any>
}
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
