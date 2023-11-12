import type Icon from '@aha-ui/components/icon'

import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElIcon: typeof Icon
  }
}
