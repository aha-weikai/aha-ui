import { computed, unref } from 'vue'

// 默认命名前缀
export const defaultNameSpace = 'el'

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
    cls += `__${element}`
  }
  // 如果存在元素
  if (element) {
    cls += `__${element}`
  }
  // 如果存在修改器
  if (modifier) {
    cls += `__${modifier}`
  }
  return cls
}

export const useNamespace = (block: string) => {
  /**
   * ## 命名前缀也就是命名空间
   */
  const namespace = computed(() => defaultNameSpace)

  /**
   * ## 创建块 例如：el-form
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
   * ## 创建后缀块元素 例如：el-form-item
   */
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(unref(namespace), block, blockSuffix, element, '')
      : ''

  return {
    namespace,
  }
}
