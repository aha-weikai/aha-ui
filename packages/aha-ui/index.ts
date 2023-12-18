import ElButton, { ElButtonGroup } from '@aha-ui/components/button'
import { ElForm, ElFormItem } from '@aha-ui/components/form'
import ElIcon from '@aha-ui/components/icon'
import ElInput from '@aha-ui/components/input'

const components = [
  ElIcon,
  ElButton,
  ElButtonGroup,
  ElInput,
  ElForm,
  ElFormItem,
]

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const ElementPlus = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return
    // 将标识设置为true，标识已经安装了
    app[INSTALLED_KEY] = true
    // 循环组件库的每个组件进行安装
    components.forEach((c) => app.use(c))
  },
}

export default ElementPlus
