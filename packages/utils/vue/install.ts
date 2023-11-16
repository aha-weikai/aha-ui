import type { Plugin } from 'vue'
import { NOOP } from '@vue/shared'

// 通过vue提供的plugin 类型和传进来的组件类型T的集合进行确定组件类型具有plugin类型方法，如install方法
export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = function (app) {
    // 动态设置组件名称
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
    if (extra) {
      for (const [key, comp] of Object.entries(extra)) {
        ;(main as any)[key] = comp
      }
    }
  }

  return main as SFCWithInstall<T> & E
}

export const withNoopInstall = <T>(component: T) => {
  // NOOP 其实就是 ()=>void 来表示不返回任何内容的函数
  ;(component as SFCWithInstall<T>).install = NOOP

  return component as SFCWithInstall<T>
}
