import { computed, unref } from 'vue'
/**
 * OOCSS：Object Oriented CSS 面向对象的css
 * 面向对象的特点：封装，继承，多态，上述主要用到了封装和继承
 * BEM
 * block-name[-blockSuffix]__<element-name>--<modifier-name>_<modifier_value>
 * 例如：el-form-item__input--default
 *
 * 创建块 el-form、
 * 创建元素 el-input__inner、
 * 创建块修改器 el-form--default、
 * 创建块后缀元素 el-form-item、
 * 创建元素修改器 el-scrollbar__wrap--hidden-default、
 * 创建动作状态 例如：is-success is-required
 */

/**
 * ## 命名前缀也就是命名空间
 * @default "el"
 */
export const defaultNameSpace = 'el'

/**
 * ## BEM 命名字符拼接函数
 * @param namespace 命名空间
 * @param block 组件块
 * @param blockSuffix 组件块里面还有组件块
 * @param element 组件块内元素
 * @param modifier 修改器，标识一些状态
 * @returns BEM 规范的命名
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  // 默认是Block
  let cls = `${namespace}-${block}`

  // 如果存在 Block 后缀，也就是 Block 里面还有 Block，
  // 例如：el-form 下面还有一个 el-form-item
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  // 如果存在元素
  if (element) {
    cls += `__${element}`
  }
  // 如果存在修改器
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

/**
 * ## 创建一个命名空间的hook
 * @param block 组件块
 * @returns BEM 的工具函数
 */
export const useNamespace = (block: string) => {
  /**
   * ## 命名前缀也就是命名空间
   */
  const namespace = computed(() => defaultNameSpace)

  /**
   * ## 创建块 例如：el-form，为了防止命名冲突，增加了后缀
   * @remarks 如果有 后缀，则添加后缀
   */
  const b = (blockSuffix = '') =>
    _bem(unref(namespace), block, blockSuffix, '', '')

  /**
   * ## 创建元素 例如：el-input__inner
   */
  const e = (element?: string) =>
    element ? _bem(unref(namespace), block, '', element, '') : ''

  /**
   * ## 创建块修改器 例如：el-form--default
   */
  const m = (modifier?: string) =>
    modifier ? _bem(unref(namespace), block, '', '', modifier) : ''

  /**
   * ## 创建后缀块元素 例如：el-form-item__input
   */
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, '')
      : ''

  /**
   * ## 创建元素修改器 例如：el-scrollbar__wrap--hidden-default
   */
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(unref(namespace), block, '', element, modifier)
      : ''

  /**
   * ## 创建块后缀修改器 例如：el-form-item--default
   */
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(unref(namespace), block, blockSuffix, '', modifier)
      : ''

  /**
   * ## 创建块元素修改器 例如：el-form-item__content--xxx
   */
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(unref(namespace), block, blockSuffix, element, modifier)
      : ''

  const statePrefix = 'is-'
  /**
   * ## 创建动作状态 例如： is-success is-required
   * @param name 状态名称
   * @param args [state=false]: 是否是状态，没有state参数时，默认为是
   * @returns 完整的状态名称
   */
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  }
}
