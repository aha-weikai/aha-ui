import ButtonGroup from './src/button-group.vue'
import Button from './src/button.vue'
import { withInstall, withNoopInstall } from '@aha-ui/utils'

// 可以把ButtonGroup 看作是Button的附带组件，在进行 install Button 时，也就安装了ButtonGroup
export const ElButton = withInstall(Button, {
  ButtonGroup,
})

// ButtonGroup 不进行单独安装
export const ElButtonGroup = withNoopInstall(ButtonGroup)

export default ElButton

export * from './src/button'
