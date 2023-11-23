import { withInstall, withNoopInstall } from '@aha-ui/utils'

import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const ElForm = withInstall(Form, { FormItem })

export default ElForm

export const ElFormItem = withNoopInstall(FormItem)

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
