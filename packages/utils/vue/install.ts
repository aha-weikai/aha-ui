import type { Plugin } from 'vue'

// 通过vue提供的plugin 类型和传进来的组件类型T的集合进行确定组件类型具有plugin类型方法，如install方法
export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app) {
    app.component('ElIcon', comp as SFCWithInstall<T>)
  }

  return comp as SFCWithInstall<T>
}
