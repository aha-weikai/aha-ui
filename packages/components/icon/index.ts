import Icon from './src/icon.vue'
import { withInstall } from '@aha-ui/utils'

// 通过withInstall 方法给Icon添加了一个install 方法
const ElIcon = withInstall(Icon)
export default ElIcon

// 到处组件的props
export * from './src/icon'
